const mongoose = require('mongoose')
let placeSchema = new mongoose.Schema({

    places:String,
    image:String,
    date:String,
    budget:String,
    group:String,
    itinerary:[String]
    //booked:{Boolean,default:false}


});

module.exports= mongoose.model('Trips',placeSchema,'places')
