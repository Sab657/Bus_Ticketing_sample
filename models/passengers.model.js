const mongoose = require('mongoose');

// Define the Passenger schema
const passengerSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String
  });
  
  // Define the Passenger model
  module.exports = mongoose.model('Passenger', passengerSchema);