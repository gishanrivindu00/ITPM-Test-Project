const { request } = require('express');
const express = require('express');
const inventory = require('../models/inventory');


const router = express.Router();

//add inventory

router.post('/inventory/add',(req,res)=>{

    let newInventory = new inventory(req.body);

    newInventory.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Inventory added Successfully."
        });
    });

});

//get Inventory

router.get('/inventory',(req,res) =>{
    inventory.find().exec((err,inventory) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingInventory:inventory
        });
    });
});

//get a specific inventory

router.get("/inventory/:id",(req,res) =>{

    let inventoryId =req.params.id;

    inventory.findById(inventoryId,(err,inventory) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            inventory
        });
    });
});

//update inventory

router.put('/inventory/update/:id',(req,res)=>{
    inventory.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,inventory)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Inventory Updated Successfully."
            });
        }
    );
});

//delete inventory

router.delete('/inventory/delete/:id',(req,res) =>{
    inventory.findByIdAndRemove(req.params.id).exec((err,deletedInventory) =>{
        
        if(err)return res.status(400).json({
            message:"Delete Unsuccessful",err
        });
            
        return res.json({
            message:"Delete Successful",deletedInventory
        });
    });
});

module.exports = router