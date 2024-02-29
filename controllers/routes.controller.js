  const Bus= require('../models/buses.model')
  const Route = require('../models/routes.model');
//get all
const getAllRoutes = async (req, res) => {
  const routes = await Route.find()
    .populate([{path:'Bus', select: 'license_plate capacity'}])
    .exec();

  res.json(routes);
};
//get by id
const getRoute = async (req, res) => {
  const route = await Route.findById(req.params.id)
    .populate([{path: 'Bus', select: 'license_plate capacity'}])
    .exec();

  res.json(route);
};
//to create
const createRoute = async (req, res) => {
  const {
    Bus, start_location, end_location
  } = req.body;
if (!Bus|| !start_location|| !end_location)
   {
    return res.status(400).json({ message: 'All fields are required' });
  }

    const route = await Route.create({
      Bus, start_location,end_location
    });

    if (route) {
      return res.status(201).json({ message: 'Route successfully created' });
    } else {
      return res.status(400).json({ message: 'Invalid Route created' });
    }
  } 
//to update
const updateRoute = async (req, res) => {
  try {
    const route = await Route.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate([
      { path: 'Bus', select: 'license_plate capacity' }
    ]);

    if (!route) {
      return res.status(404).send({ message: 'Route not found' });
    }else {
        return res.status(201).json({ message: 'Route successfully updated' });
      }

    res.send(route);
  } catch (error) {
    console.error('Error:', error);

    if (error.name === 'ValidationError') {
      return res.status(400).send({ message: error.message });
    }

    res.status(500).send({ message: 'Error updating route' });
  }
};
//to delete
const deleteRoute = async (req, res) => {
  await Route.findByIdAndDelete(req.params.id);
  res.send({ message: 'Route deleted' });
};

module.exports = {
  getAllRoutes,
  getRoute,
  createRoute,
  updateRoute,
  deleteRoute,
};