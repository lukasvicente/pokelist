const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

function generateToken(param ={}){
    return jwt.sign(param, authConfig.secret,{
        expiresIn:86400,
    });
}

module.exports = {
    async store(req,res){
        
        const { firstname, lastname, email, password} = req.body;

        try{
            
            if (await User.findOne({email})){
                return res.status(400).json({ error : 'User alredy exists'})
            }

            const user = await User.create({firstname, lastname, email, password});

            user.password = undefined;
            return res.json({
                user,
                token:generateToken({id:user.id})
            });
            
        }catch (error){

            res.status(400).json({ error : 'Register failed'})

        }
    },
    async show(req,res){
        const { email, password } = req.body;

        const user = await User.findOne({email}).select('+password');

        if(!user){
            res.status(401).json({ error : 'User not found'})
        }

        if(!await bcrypt.compare(password, user.password)){
            return res.status(401).json({ error : 'Password invalid'})
        }
        user.password = undefined;

 
       return res.json({
           user,
           token:generateToken({id:user.id})
        })

    }
};