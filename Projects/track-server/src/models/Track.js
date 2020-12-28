const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  altitude: Number,
  accuracy: Number,
  altitudeAccuracy: Number,
  heading: Number,
  speed: Number,
});

const trackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    default: '',
  },
  locations: [pointSchema],
});

mongoose.model('Track', trackSchema);
