  const Passenger = require('../models/passengers.model');
//get all
const getAllPassengers = async (req, res) => {
  const passengers = await Passenger.find()
    .exec();

  res.json(passengers);
};
//get by id
const getPassenger = async (req, res) => {
  const passenger = await Passenger.findById(req.params.id)
    .exec();

  res.json(passenger);
};

//to create
const createPassenger = async (req, res) => {
  try {
    const passenger = new Passenger(req.body);
    await passenger.save();
    res.status(201).json('successfully added passenger');
  } catch (error) {
    console.error('Error creating passenger:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//to update
const updatePassenger = async (req, res) => {
  const passenger = await Passenger.findByIdAndUpdate(req.params.id, req.body, { new: true });

  if (!passenger) {
      return res.status(404).send({ message: 'passenger not found' });
    }else {
        return res.status(201).json({ message: 'passenger successfully updated' });
    }
  res.send(passenger);
};

//to delete
const deletePassenger = async (req, res) => {
  await Passenger.findByIdAndDelete(req.params.id);
  res.send({ message: 'Passenger deleted' });
};

module.exports = {
  getAllPassengers,
  getPassenger,
  createPassenger,
  updatePassenger,
  deletePassenger,
};