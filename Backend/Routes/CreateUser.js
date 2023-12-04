const express = require('express');
const router = express.Router();
const User = require("../models/User");

const { body, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtSecret = "shreyrishabhrajeshmeenuakshay123";

router.post('/createuser', [
    body("email", 'invalid email').isEmail(),
    body("name", 'must be greater than 5 characters').isLength({min:5}),
    body("password", 'must be greater than 5 characters').isLength({min:5})]
    , async (req, resp) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return resp.status(400).json({ errors: errors.array() });
        }

        const salt = await bcrypt.genSalt(7);
        let secPassword = await bcrypt.hash(req.body.password, salt);

    try {
       await User.create({
            name: req.body.name,
            password:secPassword,
            email: req.body.email,
            location: req.body.location
        }).then(resp.json({success:true}));
     } catch (error){
            console.log(error);
            resp.json({success:false});
        }
})

router.post("/loginuser", [
    body("email", 'invalid email').isEmail(),
    body("password", 'must be greater than 5 characters').isLength({min:5})]
    , async (req, resp) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return resp.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;

    try {

    let userData = await User.findOne({email});
    if (!userData){
        return resp.status(400).json({ errors: "Try login with correct credentials"});
    }

    const psswrdCompare = await bcrypt.compare(req.body.password, userData.password);

    if (psswrdCompare){
        return resp.status(400).json({ errors: "Try login with correct credentials"});
    } 

    const data = {
        user: {
            id: userData.id
        }
    }

    const authToken = jwt.sign(data, jwtSecret);
    return resp.json({ success: true, authToken:authToken });

     } catch (error){
            console.log(error);
            resp.json({success:false});
        }
})

module.exports = router;