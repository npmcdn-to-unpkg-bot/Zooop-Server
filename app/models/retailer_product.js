'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var DiscoverProduct = new Schema({
  retailerId: {
    type: String,
    required: true
  },
	name: {
		type: String,
        required: true
	},
  properties: {
		taste:{
			type: String,
			required: true
		},
		dietaryTags:{
			type: [String],
			required: true
		},
    category: {
  		type: String,
  		required: true
  	}
	}
});

module.exports = mongoose.model('DiscoverProduct',DiscoverProduct);
