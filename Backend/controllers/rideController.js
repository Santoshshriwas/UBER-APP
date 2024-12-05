const rideService = require("../services/rideService");
const { validationResult } = require("express-validator");
const mapService = require("../services/mapsService");
const { sendMessageToSocketId}=require("../socket");

