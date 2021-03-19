const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://usertwo:usertwo@casestudysudeep.46g81.mongodb.net/libraryapp?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/studyCenter');
const Schema = mongoose.Schema;

const NewProfSchema = new Schema({
    fullname : String,
    qualifications : String,
    experiences : String,
    email : String, 
    mobno : String, 
    dob : Date,
    password : String
});

var Profdata = mongoose.model('profdata', NewProfSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Profdata;