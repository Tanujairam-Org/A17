const { sessionSchema } = require("./Schema");

module.exports = class Database {
  constructor() {}
  /**
   * @param {string} sessionId
   * @returns {Promise<{sessionId: string, session: string}>}
   */

  getSession = async (sessionName) => await this.session.findOne({ sessionName });

  session = sessionSchema;
};
