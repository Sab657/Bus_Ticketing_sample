const mongoose = require('mongoose');

// Define the Ticket schema
const ticketSchema = new mongoose.Schema({
    Bus: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus' },
    Route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route' },
    seat_numbers: Number,
    price: Number,
    Passenger: { type: mongoose.Schema.Types.ObjectId, ref: 'Passenger' },
    purchase_date: String,
  });

  // Define the Ticket model
  module.exports = mongoose.model('Ticket', ticketSchema);