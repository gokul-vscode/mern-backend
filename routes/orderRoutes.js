const express = require("express");
const router = express.Router();

const Order = require("../models/Order");
const auth = require("../middleware/authMiddleware");

router.post("/create", auth, async (req,res)=>{

 try{

  const {products,totalAmount,address} = req.body;

  const order = new Order({

   userId:req.user.id,
   username:req.user.name,
   email:req.user.email,
   products,
   totalAmount,
   address

  });

  await order.save();

  res.json({message:"Order placed successfully"});

 }catch(err){

  res.status(500).json(err);

 }

});

module.exports = router;