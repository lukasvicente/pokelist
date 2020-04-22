const express = require('express');
/* const mongoose = require('mongoose');
 */
const routes = require('./routes');

/* mongoose.connect('mongodb+srv://pokelist:pokelist@cluster0-rh1dz.mongodb.net/pokelist?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}) */

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333,() => {
    console.log('Backend executando...')
});