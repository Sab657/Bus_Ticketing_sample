const Bus = require('../models/buses.model');
const Route = require('../models/routes.model');
const Passenger = require('../models/passengers.model');
const Ticket = require('../models/tickets.model');
//get all
const getAllTicket = async (req, res) => {
  const tickets = await Ticket.find()
    .populate([
      { path: 'Bus', select: 'license_plate capacity' },
      { path: 'Route', select: 'start_location end_location' },
      { path: 'Passenger', select: 'name email phone' },
    ])
    .exec();

  res.json(tickets);
};
//get by id
const getTicket = async (req, res) => {
  const ticket = await Ticket.findById(req.params.id)
    .populate([
      { path: 'Bus', select: 'license_plate capacity' },
      { path: 'Route', select: 'start_location end_location' },
      { path: 'Passenger', select: 'name email phone' },
    ])
    .exec();

  res.json(ticket);
};
const createTicket = async (req, res) => {
    const {
      Bus, Route, seat_numbers,
      price, Passenger, purchase_date
    } = req.body;
  if (!Bus || !Route || !seat_numbers || !price || !Passenger || !purchase_date)
     {
      return res.status(400).json({ message: 'All fields are required' });
    }
  //to check duplicate
    try {
      const duplicate = await Ticket.findOne({seat_numbers}).lean().exec();
  
      if (duplicate) {
        return res.status(409).json({ message: 'Duplicate seat number' });
      }
  //to create
      const ticket = await Ticket.create({
        Bus, Route, seat_numbers,
        price, Passenger, purchase_date
      });
  
      if (ticket) {
        return res.status(201).json({ message: 'Ticket successfully created' });
      } else {
        return res.status(400).json({ message: 'Invalid ticket created' });
      }
    } catch (error) {
      console.error('Error creating ticket:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
//to update
const updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate([
      { path: 'Bus', select: 'license_plate capacity' },
      { path: 'Route', select: 'start_location end_location' },
      { path: 'Passenger', select: 'name email phone' },
    ]);
//to find
    if (!ticket) {
      return res.status(404).send({ message: 'Ticket not found' });
    }else {
        return res.status(201).json({ message: 'Ticket successfully updated' });
    }
    res.send(ticket);
  } catch (error) {
    console.error('Error:', error);

    if (error.name == 'ValidationError') {
      return res.status(400).send({ message: error.message });
    }

    res.status(500).send({ message: 'Error updating ticket' });
  }
};
//to delete
const deleteTicket = async (req, res) => {
  await Ticket.findByIdAndDelete(req.params.id);
  res.send({ message: 'Ticket deleted' });
};

module.exports = {
  getAllTicket,
  getTicket,
  createTicket,
  updateTicket,
  deleteTicket,
};
