import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    allGamesInfo: [GameInfo!]
    gameInfo(id: ID!): GameInfo
  }
  type GameInfo {
    id: ID!
    gameid: String!
    home: String!
    away: String!
    gameDate: String!
    gameTime: String!
    weather: String!
    roof: String!
    surface: String!
  }
`;