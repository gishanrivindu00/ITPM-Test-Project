const mongoose = require ("mongoose");

const OnlinePaymentSchema = new mongoose.Schema({
//const OnlinePaymentSchema = new Schema({ 
    
    Account_H_Name : {
        type : String,
        required : true,
    },

    Account_No : {
        type : Number,
        required : true,
    },

    Contact : {
        type : Number,
        required : true,
    },

    Amount : {
        type : Number,
        required : true,
    
    },

});

const oPayment = mongoose.model("onlinePayment",OnlinePaymentSchema);

module.exports = oPayment ; 