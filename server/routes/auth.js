const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {registrationValidation,loginValidation} = require('../validation');

router.post('/register',async (req, res) => {
    const {error} = registrationValidation(req.body);
    if(error) res.status(400).send(error.details[0].message);
    try {
        const emailExist = await User.findOne({email: req.body.email});
        if(emailExist) return res.status(400).send('Email already exists');
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user = new User({
            email: req.body.email,
            password: hashedPassword
        });
        const savedUser = await user.save();
        res.send({user:user._id});

    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        res.status(400);
        res.send(error);
    }
});

router.post('/login',async (req,res)=> {
    const {error} = loginValidation(req.body);
    if(error) res.status(400).send(error.details[0].message);
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('User not found');
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid login credentials');
    const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
    res.header('token', token).send(token);
});
module.exports = router;