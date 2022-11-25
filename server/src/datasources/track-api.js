// import apollo-datasource-rest package
const { RESTDataSource } = require('apollo-datasource-rest');

// Extend a RESTDataSource class
class TrackAPI extends RESTDataSource {
  // Define a constructor() method
  constructor() {
    super();
    this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
  }

  getTracksForHome() {
    return this.get('tracks');
  }

  getAuthor(authorId) {
    return this.get(`author/${authorId}`);
  }
}

module.exports = TrackAPI;
