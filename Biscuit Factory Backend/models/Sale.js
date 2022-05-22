const mongoose = require('mongoose');

const SalesSchema = new mongoose.Schema({

    Sales_ID : {
        type : String,
        required : true,
    },

    Item_Name : {
        type : String,
        required : true,
    },

    Quantity : {
        type : String,
        required : true,
    },

    Price : {
        type : String,
        required : true,
    
    },

    Sale_Date : {
        type : String,
        required : true,
    
    },


});

module.exports = mongoose.model("Sale",SalesSchema);