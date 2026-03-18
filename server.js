




require("dotenv").config(); // 1. Ithu thaan top-la irukanum
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

// 2. Local link-ah remove pannitu process.env.MONGO_URI kudukanum
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("✅ MongoDB Connected to Atlas"))
.catch(err=>console.log("❌ DB Connection Error:", err));

// 3. Port-ah dynamic-ah mathanum (Render-kaga)
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});