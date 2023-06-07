const express = require('express');
const Ticket = require('../models/ticketSchema');
const generateTicket = require('../util/generateTicket')
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');

let jwtSecretKey = process.env.JWT_SECRET_KEY;

const router = express.Router();

// create ticket route
router.post('/tickets', async (req, res) => {
  try {
    const { token, numberOfTickets } = req.body;

    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      const saveTicketSchema = {
        tickets: [],
        ticketId: uuidv4()
      }

      // generate the requested number of tickets
      for (let i = 1; i <= numberOfTickets; i++) {

        let newTicket = generateTicket();
        let number = saveTicketSchema.tickets;
        number.push(newTicket)

      }

      // save the ticket to the database
      const ticket = new Ticket(saveTicketSchema);
      const savedresult = await ticket.save();
      console.log(savedresult);

      res.status(201).json({ savedresult });
    }
    else {
      console.log("Sorry you are not authorized");
      return res.status(401).send(error);
    }
  }
  catch (error) {
    console.error('ticket creation failed:', error);
    res.status(500).json({ message: 'server error' });
  }
});
let arr = [];
// fetch tickets route
router.get('/tickets', async (req, res) => {
  try {

    let { page, size } = req.query;
    page = parseInt(page);
    size = parseInt(size);
    // console.log(typeof (parseInt(page)));
    const { token, ticketId } = req.body;

    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      if (!page || !size) {
        const ticketsNew = await Ticket
          .find({ ticketId: ticketId })
          .select({ tickets: 1 })
        console.log(ticketsNew);
        res.status(200).send(ticketsNew[0]);
      }
      else {
        const ticketsNew = await Ticket
          .find({ ticketId: ticketId })
          .select({ tickets: { $slice: [(page - 1) * size, size] } })
        console.log(ticketsNew);
        res.status(200).send(ticketsNew[0]);
      }
    }

    else {
      console.log("Sorry you are not authorized");
      return res.status(401).send(error);
    }

  }
  catch (error) {
    console.error('ticket fetch failed:', error);
    res.status(500).json({ message: 'server error' });
  }
});

module.exports = router;


