

const {Association , Event} = require("../orm");


module.exports = {
getAllEvents: async (req, res) => {
    try {
      const events = await Event.findAll({})
      res.status(200).json(events);
    } catch (error) {
      console.log(error);
      res.status(500).send("Failed to load resource");    
    }
  },

addEvent: async (req, res) => {
    try {
      const association = await Event.create(req.body);
      res.status(201).json(association);
    } catch (error) {
      res.status(409).send(error);
    }
  },


  updateEvent: async (req, res) => {
    try {
      const event = await Event.update(req.body,{
        where : {id : req.params.id}
      });
      res.status(201).json(event);
    } catch (error) {
      res.status(409).send(error);
    }
  },

  deleteEvent: async (req, res) => {
    console.log(req.params);
    try {
      const event = await Event.destroy({
        where :{id : req.params.id},
      });
      res.status(201).json(event);
    } catch (error) {
      res.status(409).send(error);
    }
  },


 








}
