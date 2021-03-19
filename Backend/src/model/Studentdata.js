const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://usertwo:usertwo@casestudysudeep.46g81.mongodb.net/libraryapp?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/studyCenter');
const Schema = mongoose.Schema;

const NewStudentSchema = new Schema({
    fullname : String,
    qualification : String,
    email : String,
    mobno : String, 
    dob : Date,
    password : String
});

var Studentdata = mongoose.model('studentdata', NewStudentSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Studentdata;