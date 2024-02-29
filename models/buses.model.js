const mongoose = require('mongoose');

//define bus schema
const busSchema = new mongoose.Schema({
  license_plate: String,
  capacity: Number
});

//define bus model
module.exports = mongoose.model('Bus', busSchema);