const express = require('express');

const authController = require('./controllers/authController');
const authMiddlewares = require('./middlewares/auth');

const routes = express.Router();

routes.post('/register', authController.store);
routes.post('/session', authController.show);

routes.post('/authtoken',authMiddlewares, (req,res) =>{
    return res.json({ ok:true });
});


module.exports = routes;  