const mongoose = require('mongoose');

const AgentsSchema = new mongoose.Schema({

    Agent_ID : {
        type : String,
        required : true,
    },

    Agent_Name : {
        type : String,
        required : true,
    },

    District : {
        type : String,
        required : true,
    },

    Telephone_No : {
        type : String,
        required : true,
    
    },


});

module.exports = mongoose.model("Agent",AgentsSchema);