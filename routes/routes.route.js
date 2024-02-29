
const express = require('express');
const router = express.Router();
const routesController = require('../controllers/routes.controller');

// Routes routes
router.get('/routes', routesController.getAllRoutes);
router.get('/routes/:id', routesController.getRoute);
router.post('/routes', routesController.createRoute);
router.put('/routes/:id', routesController.updateRoute);
router.delete('/routes/:id', routesController.deleteRoute);

module.exports = router;