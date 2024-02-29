const express = require('express');
const ticketsController = require('../controllers/tickets.controller')
const router = express.Router();

// ticket routes
router.get('/tickets', ticketsController.getAllTicket);
router.get('/tickets/:id', ticketsController.getTicket);
router.post('/tickets', ticketsController.createTicket);
router.put('/tickets/:id', ticketsController.updateTicket);
router.delete('/tickets/:id', ticketsController.deleteTicket);

module.exports = router;