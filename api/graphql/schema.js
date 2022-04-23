const { buildSchema } = require('graphql');


module.exports = buildSchema(`

    type ShortUrl {
        longUrl: String!
        shortUrl: String!
    }

    type RootQuery {
        getShortUrl(longUrl: String): ShortUrl!
        getClicks(shortUrl: String): Int
    }

    type RootMutation {
        shortenUrl(longUrl: String): ShortUrl!
    }
    
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);