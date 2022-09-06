const mongoose = require ('mongoose')


const userSchema = mongoose.Schema ({
name: {type: String,
required: true}, 
age: Number, 
email: {type:String ,
    required: true},
    unique:true,
    match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],

    password: String

})

module.exports = mongoose.model('User', userSchema )