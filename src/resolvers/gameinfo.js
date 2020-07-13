export default {
  Query: {
    allGamesInfo: async (parent, args, { models }) => {
      return await models.GameInfo.findAll();
    },
    gameInfo: async (parent, { id }, { models }) => {
      return await models.GameInfo.findByPk(id);
    },
  }
};