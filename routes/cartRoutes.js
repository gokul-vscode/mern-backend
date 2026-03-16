const express = require("express");
const Cart = require("../models/Cart");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", auth, async (req, res) => {

 const { productId } = req.body;
 const userId = req.user.id;

 let cart = await Cart.findOne({ userId });

 if (!cart) {
   cart = new Cart({
     userId,
     items: []
   });
 }

 const item = cart.items.find(i => i.productId === productId);

 if (item) {
   item.quantity += 1;
 } else {
   cart.items.push({ productId, quantity: 1 });
 }

 await cart.save();

 res.json(cart);

});

router.get("/", auth, async (req, res) => {

 const cart = await Cart.findOne({
   userId: req.user.id
 });

 if (!cart) {
   return res.json({ items: [] });
 }

 res.json(cart);

});

module.exports = router;