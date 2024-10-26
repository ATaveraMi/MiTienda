import mongoose from "mongoose";
const Brand = require("./product.model.js");
const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

// Based on the schema, create the product model
const Brand = mongoose.model("Brand", brandSchema);

export default Brand;