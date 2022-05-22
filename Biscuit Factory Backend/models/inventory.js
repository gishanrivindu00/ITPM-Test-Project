const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({

    Inventory_ID : {
        type : String,
        required : true
    },
    
    Inventory_Name : {
        type : String,
        required : true
    },

    Inventory_Quantity : {
        type : String,
        required : true
    },

    Supplier_Name : {
        type : String,
        required : true
    },

    Supplier_Email : {
        type : String,
        required : true
    },

    Supplier_ContactNo : {
        type : String,
        required : true
    }


});

module.exports = mongoose.model("Inventory",inventorySchema);