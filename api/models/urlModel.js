'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlSchema = new Schema(
  {
    originalUrl: {
      type: String,
    },
    shortUrl: {
      type: String,
    },
    urlCode: {
      type: String,
    },
    createdOn: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Url', UrlSchema);
