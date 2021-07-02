'use strict';

var bcrypt = require('bcrypt-nodejs');
// @ts-ignore
var mongoosePaginate = require('mongoose-pagination');
var User = require('../models/user');
var Follow = require('../models/follow');
var Publication = require('../models/publication');
var jwt = require('../services/jwt');
var fs = require('fs');
var path = require('path');

function saveUser(req, res) {
    var params = req.body;
    params.userType = params.userType.name;
    params.gender = params.gender.name;
    console.log(req.body)
    var user = new User(params);
    if (true) {
        User.find({
            $or: [{
                email: user.email.toLowerCase()
            }]
        }).exec((err, users) => {
            if (err)
                return res.status(500).send({
                    message: "Creating user error."
                });
            if (users && users.length >= 1) {
                return res.status(500).send({
                    message: "User already exists."
                });
            } else {
                bcrypt.hash(params.password, null, null, (err, hash) => {
                    if (err)
                        return res.status(500).send({
                            message: "Saving user error."
                        });
                    user.password = hash;
                });
                user.save((err, userStored) => {
                    if (err){
                        console.log(err)
                        return res.status(500).send({
                            message: "Saving user error."
                        });
                    }
                      
                    if (userStored) {
                        const token = jwt.createtoken(userStored);
                        res.setHeader('Authorization', `${token}`);
                        return res.status(200).send({
                            user: userStored
                        });
                    } else {
                        return res.status(404).send({
                            message: "User Not Found."
                        });
                    }
                });
            }
        });
    }
}
async function searchUser(req, res) {
    try {

        var itemsPerPage = 10;
        var page = 1;
        const q = req.query.q;
        // @ts-ignore
        User.find({
            $text: {
                $search: q
            }
        }).paginate(page, itemsPerPage, (err, users, total) => {
            if (!users)
                users = []

            if (err) {
                console.log(err)
                users = []
            }

            return res.status(200).send({
                users,
                total,
                pages: Math.ceil(total / itemsPerPage)
            });
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: "Users Not Found."
        });
    }
}

async function loginUser(req, res) {
    var params = req.body;
    var email = params.email;
    console.log(email)
    if (params.username) {
        email = params.username;
    }

    var password = params.password;

    try {
        let user = await User.findOne({
            email: email
        });

        if (!user) {
            throw 'Wrong username or password';
        }

        // @ts-ignore
        let check = await bcrypt.compare(password, user.password, (error, check) => {
            if (error) {
                return res.status(500).send({
                    message: "Couldn't validate your credintials",

                });
            }

            if (!check) {
                return res.status(400).send({
                    message: "Wrong Username or password",

                });
            }

            user.password = undefined;
            const token = jwt.createtoken(user);
            res.setHeader('Authorization', `${token}`);
            user.token = token
            return res.status(200).send({
                token: token,
                user
            });
        })



    } catch (error) {
        console.log(error)
        return res.status(404).send({
            message: error
        });
    }

}

function getUser(req, res) {
    var userId = req.params.id;
    User.findById(userId, (err, user) => {
        if (!user)
            return res.status(404).send({
                message: "User Not Found."
            });
        if (err)
            return res.status(500).send({
                message: "Request Error."
            });

        followThisUser(req.user.sub, userId).then((value) => {
            return res.status(200).send({
                user,
                following: value.following,
                followed: value.followed
            });
        });
    });
}

async function followThisUser(identity_user_id, user_id) {
    var following = await Follow.findOne({
            user: identity_user_id,
            followed: user_id
        }).exec()
        .then((following) => {
            return following;
        })
        .catch((err) => {
            // @ts-ignore
            return handleError(err);
        });

    var followed = await Follow.findOne({
            user: user_id,
            followed: identity_user_id
        }).exec()
        .then((followed) => {
            return followed;
        })
        .catch((err) => {
            // @ts-ignore
            return handleError(err);
        });

    return {
        following: following,
        followed: followed
    };
}

function getUsers(req, res) {
    var identity_user_id = req.user.sub;
    var itemsPerPage = 10;
    var page = 1;
    if (req.params.page) {
        page = req.params.page;
    }
    // @ts-ignore
    User.find().sort('_id').paginate(page, itemsPerPage, (err, users, total) => {
        if (!users)
            return res.status(404).send({
                message: "Users Not Found."
            });
        if (err)
            return res.status(500).send({
                message: "Request Error."
            });

        followUserIds(identity_user_id).then((value) => {
            return res.status(200).send({
                users,
                user_following: value.following,
                user_follow_me: value.followed,
                total,
                pages: Math.ceil(total / itemsPerPage)
            });
        });
    });
}

async function followUserIds(user_id) {
    var following = await Follow.find({
            "user": user_id
        }).select({
            '_id': 0,
            '__v': 0,
            'user': 0
        }).exec()
        .then((following) => {
            return following;
        })
        .catch((err) => {
            // @ts-ignore
            return handleError(err);
        });

    var followed = await Follow.find({
            "followed": user_id
        }).select({
            '_id': 0,
            '__v': 0,
            'followed': 0
        }).exec()
        .then((followed) => {
            return followed;
        })
        .catch((err) => {
            // @ts-ignore
            return handleError(err);
        });

    var following_clean = [];
    following.forEach((follow) => {
        following_clean.push(follow.followed);
    });
    var followed_clean = [];
    followed.forEach((follow) => {
        followed_clean.push(follow.user);
    });

    return {
        following: following_clean,
        followed: followed_clean
    };
}

function getCounters(req, res) {
    var userId = req.user.sub;
    if (req.params.id) {
        userId = req.params.id;
    }
    getCountFollow(userId).then((value) => {
        return res.status(200).send(value);
    });
}

async function getCountFollow(user_id) {
    var following = await Follow.count({
            "user": user_id
        }).exec()
        .then((count) => {
            return count;
        })
        .catch((err) => {
            // @ts-ignore
            return handleError(err);
        });

    var followed = await Follow.count({
            "followed": user_id
        }).exec()
        .then((count) => {
            return count;
        })
        .catch((err) => {
            // @ts-ignore
            return handleError(err);
        });

    var publications = await Publication.count({
            "user": user_id
        }).exec()
        .then((count) => {
            return count;
        })
        .catch((err) => {
            // @ts-ignore
            return handleError(err);
        });

    return {
        following: following,
        followed: followed,
        publications: publications
    };
}

function uploadEvents() {
    return  [{
            event: 'fileBegin',
            action: function (req, res, next, name, file) {
                /* your callback */
                console.log("fileBegin")
            }
        },
        {
            event: 'file',
            action: function (req, res, next, name, file) {
                /* your callback */
                console.log("just file")
            }
        },
        {
            event: 'end',
            action: function (req, res, next, name, file) {
                /* your callback */
                console.log("just end")
            }
        },

        {
            event: 'field',
            action: function (req, res, next, name, value) {
                /* your callback */
            }
        }
    ];
   
}

async function updateUser(req, res) {
    try {
        console.log("file")
        console.log(req.files);
        console.log("fields")
        console.log(req.fields)

        console.log("End of fields")

        const id = req.fields._id

        delete req.fields._id

        if(req.fields.userType == "undefined"){
            delete req.fields.userType;
        }
        
        if (req.files.gallery) {
            const image = req.files.gallery.path;
            req.fields.avatar = image;
        }


        let user = await User.findByIdAndUpdate({
            _id: id
        }, req.fields);
        console.log(user)
        user = await User.findById(id);
        console.log(user)
        user.password = null;
        return res.status(200).send({
            user: user
        });

    } catch (error) {
        console.error(error)
        return res.status(500).send({
            error: error
        });
    }
}

function update(req, res) {
    var userId = req.params.id;
    var update = req.body;
    delete update.password;
    if (userId !== req.user.sub) {
        return res.status(500).send({
            message: "You do not have permissions to modify the user."
        });
    }

    User.find({
        $or: [{
                email: update.email.toLowerCase()
            },
            {
                fullName: update.nick.toLowerCase()
            }
        ]
        // @ts-ignore
    }).exec((err, users) => {
        var user_isset = false;
        users.forEach((users) => {
            if (users._id != userId)
                user_isset = true;
        });
        if (user_isset)
            return res.status(400).send({
                message: "The email and/or the nick already exists..."
            });

        User.findByIdAndUpdate(userId, update, {
            new: true
        }, (err, userUpdated) => {
            if (!userUpdated)
                return res.status(404).send({
                    message: "User Not Found."
                });
            if (err)
                return res.status(500).send({
                    message: "Request Error."
                });

            return res.status(200).send({
                user: userUpdated
            });
        });
    });
}

function uploadImage(req, res) {
    var userId = req.params.id;
    if (req.files) {
        var file_path = req.files.image.path;
        var file_split = file_path.split('/');
        var file_name = file_split[2];
        var ext_split = file_name.split('\.');
        var file_ext = ext_split[1];
        if (userId !== req.user.sub) {
            return removeFilesOfUploads(res, file_path, "You do not have permissions to modify the user.");
        }
        if (file_ext === 'png' || file_ext === 'jpg' || file_ext === 'jpeg' || file_ext === 'gif') {
            User.findByIdAndUpdate(userId, {
                image: file_name
            }, {
                new: true
            }, (err, userUpdated) => {
                if (!userUpdated)
                    return res.status(404).send({
                        message: "User Not Found."
                    });
                if (err)
                    return res.status(500).send({
                        message: "Request Error."
                    });

                return res.status(200).send({
                    user: userUpdated
                });
            });
        } else {
            return removeFilesOfUploads(res, file_path, "Ups, please upload a valid image file.");
        }
    } else {
        return res.status(200).send({
            message: "Ups, please upload any file."
        });
    }
}

function removeFilesOfUploads(res, file_path, message) {
    // @ts-ignore
    fs.unlink(file_path, (err) => {
        return res.status(200).send({
            message: message
        });
    });
}

// @ts-ignore
function logout(req, res) {
    return res.status(200).send({
        message: "exited"
    });
}


function getImageFile(req, res) {
    var image_file = req.params.imageFile;
    var path_file = './uploads/users/' + image_file;
    fs.exists(path_file, (exists) => {
        if (exists) {
            res.sendFile(path.resolve(path_file));
        } else {
            return res.status(200).send({
                message: "Ups, the file not exists."
            });
        }
    });
}

module.exports = {
    saveUser,
    loginUser,
    getUser,
    getUsers,
    getCounters,
    updateUser,
    uploadImage,
    getImageFile,
    searchUser,
    uploadEvents,
    logout
};