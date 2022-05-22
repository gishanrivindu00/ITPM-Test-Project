//const { json } = require("body-parser");
const express = require("express");
const employee = require("../models/Payemployee");

const router =  express.Router();

//add payment
// http://localhost:8000/payment/add
router.route("/add") .post ((req,res) => {
    
    const clas = req.body.clas ;
    const name = req.body.name;
    const basicPay = req.body.basicPay;
    const travelAllowance = req.body.travelAllowance;
    const otAllowance = req.body.otAllowance;
    const bankAccountNo = req.body.bankAccountNo;
    const totalSalary = req.body.totalSalary;


    let newEmployee = new employee({
        clas:clas,
        name:name,
        basicPay:basicPay,
        travelAllowance:travelAllowance,
        otAllowance:otAllowance,
        bankAccountNo:bankAccountNo,
        totalSalary:totalSalary,
    })
    newEmployee.save().then(()=>{
        res.status(200).json({
            success:true,
        })
    }).catch((err)=>{
        console.log(err);
        res.status(500).json({success: false})
    })
})    

//read all payments
    
//http://localhost:8000/payment   
router.route('/').get((req,res)=>{
    employee.find().exec((err,employees)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingemployee:employees 
        });
    });
});



//update

//http://localhost:8090/payment/update/e000

router.route("/update/:id").post(async(req,res)=>{
    let userId=req.params.id
    const{ clas,name,basicPay,travelAllowance,otAllowance,bankAccountNo,totalSalary }= req.body;

    const updateEmployee={
        clas,
        name,
        basicPay,
        travelAllowance,
        otAllowance,
        bankAccountNo,
        totalSalary
    }
    const update = await employee.findByIdAndUpdate(userId,updateEmployee)
    .then(() =>{
    res.status(200).send({ststus:"Employee Updated"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Errorwith Update"});
});
});
    

//delete

// http://localhost:8090/payment/delete/e000
router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id;

     await employee.findByIdAndDelete(userId)
    .then(() =>{
    res.status(200).send({ststus:"Employee Deleted"})
}).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status:"Error with Deletion",error:err.message});
})
    })

//read only one employee data

//http://localhost:8090/payment/get/e000

router.route("/get/:id").get((req,res)=>{
    let userId=req.params.id;

     employee.findById(userId).exec((err,employees)=>{
    if(err) {
        return res.status(400).json({
            error:err
        });
    }
    return res.status(200).json({
        success:true,
        employees
    });
     });
});


module.exports = router;