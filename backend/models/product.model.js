import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    price: {
      type: mongoose.Decimal128,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Each time a product is created, the fields "createdAt" and "updatedAt" will be added automatically
  }
);

// Based on the schema, create the product model
const Product = mongoose.model("Product", productSchema);

export default Product;