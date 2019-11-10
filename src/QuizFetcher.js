const axios = require('axios');
const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple';

class QuizFetcher {
  static async fetch() {
    const response = await axios.get(API_URL);
    return response.data;
  }
}

module.exports = QuizFetcher;