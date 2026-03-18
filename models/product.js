// const mongoose = require("mongoose");

// const productSchema = new mongoose.Schema({
//   productId: {
//     type: String,
//     required: true
//   },
//   productName: {
//     type: String,
//     required: true
//   },
//   productPrice: {
//     type: Number,
//     required: true
//   },
//   image: {
//     type: String
//   },
//   stock: {
//     type: Number,
//     default: 0
//   },
//   category: {
//     type: String
//   }
// });

// module.exports = mongoose.model("Product", productSchema);


const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  productPrice: {
    type: Number,
    required: true
  },
  image: String,
  stock: {
    type: Number,
    default: 0
  },
  category: String
});

module.exports = mongoose.model("Product", productSchema);