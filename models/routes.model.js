const mongoose = require('mongoose');
// Define the Route schema
const routeSchema = new mongoose.Schema({
  Bus: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus' },
  start_location: String,
  end_location: String,
});

// Define the Route model
module.exports = mongoose.model('Route', routeSchema);