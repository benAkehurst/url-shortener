const mongoose = require('mongoose');
const validUrl = require('valid-url');
const moment = require('moment');
const shortCode = require('../helpers/uniqueUrlCode');
const Url = mongoose.model('Url');

/**
 * Creates a new short url in the DB
 * POST
 * {
 *  "url": "any url"
 * }
 */
exports.create_short_url = async (req, res) => {
  let originalUrl = req.body.url;

  if (validUrl.isUri(originalUrl)) {
    try {
      const urlCode = shortCode.generate();
      let shortUrl = `${process.env.CLIENT_URL}/${urlCode}`;
      let newUrl = new Url({
        originalUrl: originalUrl,
        shortUrl: shortUrl,
        urlCode: urlCode,
        createdOn: moment(),
      });
      await newUrl.save();
      res.status(200).json({
        success: true,
        message: 'Item shortened successfully',
        data: newUrl,
      });
    } catch (err) {
      res.status(401).json({
        success: false,
        message: 'Something went wrong creating short url',
        data: err,
      });
    }
  } else {
    return res.status(401).json({
      success: false,
      message: 'Invalid URL',
    });
  }
};

/**
 * Gets the long version of the short url
 * GET
 * param - :code
 */
exports.get_long_url = async (req, res) => {
  const urlCode = req.params.code;
  const item = await Url.findOne({ urlCode: urlCode });
  if (item) {
    return res.status(200).json({
      success: true,
      message: 'Shortened item',
      data: item,
    });
  } else {
    return res.status(401).json({
      success: false,
      message: 'Error in fetching shortened url',
    });
  }
};
