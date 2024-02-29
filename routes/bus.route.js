const express = require('express');
const busController= require('../controllers/buses.controller');
const router = express.Router();

//bus routes
router.get('/buses', busController.getAllBuses);
router.get('/buses/:id', busController.getBus);
router.post('/buses', busController.createBus);
router.put('/buses/:id', busController.updateBus);
router.delete('/buses/:id', busController.deleteBus);

module.exports = router;