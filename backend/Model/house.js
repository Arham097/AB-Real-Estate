
const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
  property_id: {
    type: Number,
    required: true,
  },
  property_type: {
    type: String,
    required: [true, 'Please enter the property type'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter the price'],
  },
  location: {
    type: String,
    required: [true, 'Please enter the location'],
  },
  city: {
    type: String,
    required: [true, 'Please enter the city'],
  },
  latitude: {
    type: Number,
    required: [true, 'Please enter the latitude'],
  },
  longitude: {
    type: Number,
    required: [true, 'Please enter the longitude'],
  },
  bedrooms: {
    type: Number,
    required: [true, 'Please enter the number of bedrooms'],
  },
  area: {
    type: Number,
    required: [true, 'Please enter the area'],
  },
  purpose: {
    type: String,
    required: [true, 'Please enter the purpose'],
  },
  baths: {
    type: Number,
    required: [true, 'Please enter the number of bathrooms'],
  },
  description: {
    type: String,
    required: [true, 'Please enter the description'],
  },
});

const houseModel = mongoose.model('houses', houseSchema);
module.exports = houseModel;

