const mongoose = require('mongoose');
 
mongoose.connect('mongodb+srv://pokelist:pokelist@cluster0-rh1dz.mongodb.net/pokelist?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});

module.exports = mongoose;