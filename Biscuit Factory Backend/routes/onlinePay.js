const express = require('express');
const onlinePayment = require('../models/onlinePayment');

const router = express.Router();

//save payments

router.post('/opayments/add',(req,res)=> {

    let newopay = new onlinePayment(req.body);

    newopay.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Online Payment saved successfully"
        });
    });

});

// get Payments

router.get('/opayments',(req,res) =>{
    onlinePayment.find().exec((err,opay) =>{
        if(err){
            return res.sendStatus(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingonlinePayment:opay
        });
    });
});

module.exports = router