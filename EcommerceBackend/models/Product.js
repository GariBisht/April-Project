const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  description: { type: String },
  category: { type: String },
  stock: { type: Number, default: 1 },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);


// {
//   "name": "Elegant Gold Ring",
//   "price": 129.99,
//   "image": "https://example.com/images/gold-ring.jpg",
//   "description": "A beautifully crafted 18k gold ring with intricate detailing.",
//   "category": "Rings",
//   "stock": 10
// }

//http://localhost:5000/api/products
