import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      requied: true,
    },

    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    //Admins will make the products. Here we will know which admin user will create the products
    user: {
      type: mongoose.Schema.Types.ObjectId,
      requied: true,
      ref: "User",
    },

    //This is where we define all the fields we want for user
    name: {
      type: String,
      requied: true,
    },

    image: {
      type: String,
      requied: true,
      unique: true,
    },

    brand: {
      type: String,
      requied: true,
    },

    category: {
      type: String,
      requied: true,
    },

    description: {
      type: String,
      requied: true,
    },

    //this is basically for average rating coming
    rating: {
      type: Number,
      requied: true,
      default: 0,
    },

    reviews: [reviewSchema],

    numReviews: {
      type: Number,
      requied: true,
      default: 0,
    },

    price: {
      type: Number,
      requied: true,
      default: 0,
    },

    countInStock: {
      type: Number,
      requied: true,
      default: 0,
    },
  },
  {
    timestamps: true, //to create fields automatically comes with mongoose
  }
);

//this is how we put schema with model
const Product = mongoose.model("Product", productSchema);

export default Product;
