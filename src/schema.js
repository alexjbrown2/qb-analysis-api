const { gql } = require('apollo-server');

const typeDefs = gql`
    type GameInfoObject {
        id: ID!
        game_id: String!
        home: String
        away: String
        start_date: String
        start_time: String
        weather: String
        roof: String
        surface: String
    }
    type Query {
        infoObjects: [GameInfoObject]!
        infoObject(id: ID!): GameInfoObject
    }
`;

module.exports = typeDefs;