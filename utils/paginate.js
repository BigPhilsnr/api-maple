

module.exports =function paginateAggregation(page,limit){
    return[{
        '$facet': {
          'docs': [
            {
              '$skip': page
            }, {
              '$limit': limit
            }
          ], 
          'total': [
            {
              '$count': 'count'
            }
          ]
        }
      }, {
        '$unwind': {
          'path': '$total', 
          'preserveNullAndEmptyArrays': true
        }
      }, {
        '$project': {
          'docs': '$docs', 
          'totalDocs': '$total.count'
        }
      }]
}