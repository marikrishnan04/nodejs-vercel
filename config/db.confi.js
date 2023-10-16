const mongoose =require('mongoose');
const loginUsers = require('../models/Users');
const url ='mongodb+srv://12345:mari1234@user.tyzhkrm.mongodb.net/?retryWrites=true&w=majority'


// mongodb connect.................

 function loginDetails() {
    mongoose.connect(url)

    mongoose.connection.once('open',()=>{
        console.log('connected success');
    })
}

module.exports=loginDetails;