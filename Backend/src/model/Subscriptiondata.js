const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://usertwo:usertwo@casestudysudeep.46g81.mongodb.net/libraryapp?retryWrites=true&w=majority');
mongoose.connect('mongodb://localhost:27017/studyCenter');
const Schema = mongoose.Schema;

const NewStudreqSchema = new Schema({
    title : String,
    studemail : String,
    profemail : String,
    status : String,
    
});

var Subscriptiondata = mongoose.model('subscriptiondata', NewStudreqSchema);                       
module.exports = Subscriptiondata;