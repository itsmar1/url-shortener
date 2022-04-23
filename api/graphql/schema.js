const { buildSchema } = require('graphql');


module.exports = buildSchema(`

    type ShortUrl {
        _id: ID!
        longUrl: String!
        shortUrl: String!
        clicks: Int!
    }

    type RootQuery {
        getShortUrl(longUrl: String!): ShortUrl!
        getLongUrl(shortUrl: String!): ShortUrl!
        getClicks(shortUrl: String!): ShortUrl!
    }

    type RootMutation {
        shortenUrl(longUrl: String): ShortUrl!
    }
    
    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);