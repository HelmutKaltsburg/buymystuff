import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@buymystuff.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "Doge",
    email: "doge@buymystuff.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Cheems",
    email: "cheems@buymystuff.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
