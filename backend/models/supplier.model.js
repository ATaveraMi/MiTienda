import mongoose from "mongoose";
const Brand = require("./brand.model.js");
const supplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brands: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Brand",
    },
  ],
});

// Based on the schema, create the product model
const Supplier = mongoose.model("Supplier", productSchema);

export default Supplier;