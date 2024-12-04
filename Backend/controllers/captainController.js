const captainModel = require("../models/captainModel");
const captainService = require("../services/captainService");
const blackListTokenModel = require("../models/blackListTokenModel");
const {validationResult}= require("express-validator");

module.exports.registerCaptain= async(req,res,next)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }
    const {fullname, email, password,vehicle} = req.body;
    
    const alreadyCaptain = await captainModel.findOne({email});

    if(alreadyCaptain){
      return res.status(400).json({message:"Captain already exist"});
    }

    const hashPassword = await captainModel.hashPassword(password);
    const captain = await captainService.createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashPassword,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType
    })

    const token = captain.generateAuthToken();
    res.status(201).json({token,captain});

}

module.exports.loginCaptain = async(req,res,next)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
    }

    const {email , password}= req.body;
    const captain = await captainModel.findOne({email}).select("+password");
    if(!captain){
      return res.status(401).json({message:"Captain not found"});
      }
      const isValidPassword = await captain.comparePassword(password);
      if(!isValidPassword){
        return res.status(401).json({message:"Invalid password and Email!!"});
        }

        const token = captain.generateAuthToken();
        res.cookie('token',token);
        res.status(200).json({token,captain});
}

module.exports.getCaptainProfile = async (req, res, next) => {
  res.status(200).json({ captain: req.captain });
}

module.exports.logoutCaptain= async(req,res,next)=>{
  const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
  await blackListTokenModel.create({token});
  res.clearCookie('token');
  res.status(200).json({message:"Logged out successfully"});
}