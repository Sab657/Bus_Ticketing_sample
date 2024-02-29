  const Bus = require('../models/buses.model');
 //get all buses
  const getAllBuses = async (req, res) => {
    const buses = await Bus.find()
      .exec();
  
    res.json(buses);
  };
  // get bus by id
  const getBus = async (req, res) => {
    const bus = await Bus.findById(req.params.id)
      .exec();
  
    res.json(bus);
};
  //create new bus
  const createBus = async (req, res) => {
    try {
      const bus = new Bus(req.body);
      await bus.save();
      res.status(201).json('successfully added bus');
    } catch (error) {
      console.error('Error creating bus:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
    //update bus
  const updateBus = async (req, res) => {
    const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!bus) {
      return res.status(404).send({ message: 'bus not found' });
    }else {
        return res.status(201).json({ message: 'bus successfully updated' });
    }
    res.send(bus);
};
  
  // delete bus
  const deleteBus = async (req, res) => {
    await Bus.findByIdAndDelete(req.params.id);
    res.send({ message: 'Bus deleted' });
  };
  
  module.exports = {
    getAllBuses,
    getBus,
    createBus,
    updateBus,
    deleteBus,
  }; 