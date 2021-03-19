const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://usertwo:usertwo@casestudysudeep.46g81.mongodb.net/libraryapp?retryWrites=true&w=majority');

mongoose.connect('mongodb://localhost:27017/studyCenter');
const Schema = mongoose.Schema;

const NewActivitySchema = new Schema({
    activities : String,
    url1discrip : String,
    url1 : String,
    url2discrip : String,   
    url2 : String,
    url3discrip : String,
    url3 : String,
    title : String,   
    profemail : String,
    date: { type: Date, default: Date.now}


});

var Activitydata = mongoose.model('activitydata', NewActivitySchema);                        //UserData is the model and NewBookData is the schema

module.exports = Activitydata;