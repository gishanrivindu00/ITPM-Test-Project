const { request } = require('express');
const express = require('express');
const sales = require('../models/Sale');


const router = express.Router();

//add sales

router.post('/sales/add',(req,res)=>{

    let newSales = new sales(req.body);

    newSales.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Sale added Successfully."
        });
    });

});

//get Sales

router.get('/sales',(req,res) =>{
    sales.find().exec((err,sales) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingSales:sales
        });
    });
});

//get a specific sale

router.get("/sales/:id",(req,res) =>{

    let salesId =req.params.id;

    sales.findById(salesId,(err,sales) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            sales
        });
    });
});

//update sales

router.put('/sales/update/:id',(req,res)=>{
    sales.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,sales)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Sale Updated Successfully."
            });
        }
    );
});

//delete sales

router.delete('/sales/delete/:id',(req,res) =>{
    sales.findByIdAndRemove(req.params.id).exec((err,deletedSales) =>{
        
        if(err)return res.status(400).json({
            message:"Delete Unsuccessful",err
        });
            
        return res.json({
            message:"Delete Successful",deletedSales
        });
    });
});

module.exports = router