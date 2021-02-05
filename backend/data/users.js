//basically three users

//we need to give the fields to these users that we made otherwise mongoose is not gonna let us pass
//follow userModel for explanation
import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "Syed Umer Ali",
    email: "umer@example.com",
    password: bcrypt.hashSync("123456", 10),
  },

  {
    name: "Syed Amir Ali",
    email: "amir@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
