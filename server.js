const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DB_URL="mongodb://127.0.0.1:27017/Bus_Ticketing_1";

app.use(express.json())
app.use(express.urlencoded({extended: false}))

mongoose.set("strictQuery", false)

mongoose.connect(DB_URL);
const conn = mongoose.connection;
conn.once('open',()=>{
    console.log('connected to MongoDB');
})
conn.on('error',(error)=> {
        console.log(`failed to connect to MongoDB ${error.message}`);
})

// Use routes
const busRoutes = require('./routes/bus.route');
app.use("/bus", busRoutes);
const passengerRoutes = require('./routes/passenger.route');
app.use("/passenger", passengerRoutes);
const routeRoutes = require('./routes/routes.route');
app.use("/route", routeRoutes);
const ticketRoutes = require('./routes/tickets.route');
app.use("/ticket", ticketRoutes);

// Start server
app.listen (3001 , ()=> {
  console.log ('Server is running at port 3001');
}) 