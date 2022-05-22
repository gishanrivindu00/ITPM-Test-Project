const { request } = require('express');
const express = require('express');
const agents = require('../models/Agent');


const router = express.Router();

//add Agents

router.post('/sales/agents/add',(req,res)=>{

    let newAgents = new agents(req.body);

    newAgents.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Agent added Successfully."
        });
    });

});

//get Agents

router.get('/agents',(req,res) =>{
    agents.find().exec((err,agents) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingAgents:agents
        });
    });
});

//get a specific Agent

router.get("/sales/agents/:id",(req,res) =>{

    let agentId =req.params.id;

    agents.findById(agentId,(err,agents) =>{
        if(err){
            return res.status(400).json({success:false, err});
        }

        return res.status(200).json({
            success:true,
            agents
        });
    });
});

//update Agents

router.put('/agents/update/:id',(req,res)=>{
    agents.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,agents)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Agent Updated Successfully."
            });
        }
    );
});

//delete Agents

router.delete('/agent/delete/:id',(req,res) =>{
    agents.findByIdAndRemove(req.params.id).exec((err,deletedAgents) =>{
        
        if(err)return res.status(400).json({
            message:"Delete Unsuccessful",err
        });
            
        return res.json({
            message:"Delete Successful",deletedAgents
        });
    });
});

module.exports = router