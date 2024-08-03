// Event
//- name (string)
//- location
//    - maps api?
//- date/time (date)
//- host (string)
//- description (string)
//- attendees (int)
//- image (string, link to db or something idk)

const { default: mongoose } = require("mongoose");

const eventSchema = mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  attendees: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Account" }],
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  host: {
    type: mongoose.Schema.Types.ObjectId, ref: "Account",
    required: true
  },
  });

const EventModel = mongoose.model("Event", eventSchema);

module.exports = {
  EventModel,
};
