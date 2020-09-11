module.exports = (app) => {
  const shortenController = require('../controllers/shortenController');
  app
    .route('/api/shorten/make-new-url')
    .post(shortenController.create_short_url);
  app
    .route('/api/shorten/get-original-url/:code')
    .get(shortenController.get_long_url);
};
