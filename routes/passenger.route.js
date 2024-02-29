const express = require('express');
const passengersController = require('../controllers/passengers.controller');
const router = express.Router();

//passenger routes
router.get('/passengers', passengersController.getAllPassengers);
router.get('/passengers/:id', passengersController.getPassenger);
router.post('/passengers', passengersController.createPassenger);
router.put('/passengers/:id', passengersController.updatePassenger);
router.delete('/passengers/:id', passengersController.deletePassenger);

module.exports = router;