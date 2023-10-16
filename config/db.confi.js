const mongoose =require('mongoose');
const loginUsers = require('../models/Users');



// mongodb connect.................

 function loginDetails() {
    mongoose.connect(process.env.BASE_URL)

    mongoose.connection.once('open',()=>{
        console.log('connected success');
    })
}

module.exports=loginDetails;