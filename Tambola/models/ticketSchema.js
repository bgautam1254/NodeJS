const mongoose = require('mongoose');

let mongooseTicketSchema = {
  tickets: [[[Number]]],
  ticketId: {
    type: String,
    required: true,
    unique: true,
  }
}

const ticketSchema = new mongoose.Schema(mongooseTicketSchema);

const collectionName = "ticket";
const Ticket = mongoose.model(`${collectionName}`, ticketSchema);

module.exports = Ticket;
