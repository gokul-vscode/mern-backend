const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  userId: String,
  username: String,
  email: String,

  products: [
    {
      id: String,
      productName: String,
      productPrice: Number,
      quantity: Number,
      image: String
    }
  ],

  totalAmount: Number,
  address: String,

  createdAt: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Order", orderSchema);