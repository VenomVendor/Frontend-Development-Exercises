/*
    # Endpoint URL #
    
    https://api.github.com/legacy/repos/search/{query}
    
    Note: Github imposes a rate limit of 60 request per minute. Documentation can be found at http://developer.github.com/v3/.
    
    # Example Github Response JSON #
    
    {
      "meta": {...},
      "data": {
        "repositories": [
          { 
            "type": "String",
            "username": "String",
            "name": "String",
            "owner": "String",
            "homepage": "String",
            "description": "String",
            "language": "String",
            "watchers": Number,
            "followers": Number,
            "forks": Number,
            "size": Number,
            "open_issues": Number,
            "score": Number,
            "has_downloads": Boolean,
            "has_issues": Boolean,
            "has_wiki": Boolean,
            "fork": Boolean,
            "private": Boolean,
            "url": "String",
            "created": "String",
            "created_at": "String",
            "pushed_at": "String",
            "pushed": "String"
          },
          {...},
          {...}
        ]
      }
    }
*/