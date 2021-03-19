const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://usertwo:usertwo@casestudysudeep.46g81.mongodb.net/libraryapp?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/studyCenter');
const Schema = mongoose.Schema;

const NewCourseSchema = new Schema({
    title : String,
    fee : String,
    intended : String,
    description : String,
    url:String,
    profemail:String

    
});

var Coursedata = mongoose.model('coursedata', NewCourseSchema);                       
module.exports = Coursedata;