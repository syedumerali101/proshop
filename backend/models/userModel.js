import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    //This is where we define all the fields we want for user
    name: {
      type: String,
      requied: true,
    },

    email: {
      type: String,
      requied: true,
      unique: true,
    },

    password: {
      type: String,
      requied: true,
    },

    isAdmin: {
      type: Boolean,
      requied: true,
      default: false, //when user registers so it's not an admin
    },
  },
  {
    timestamps: true, //to create fields automatically comes with mongoose
  }
);

//this is how we put schema with model
const User = mongoose.model("User", userSchema);
export default User;
