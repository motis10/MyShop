import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Zahi Zur',
    email: 'zahi101@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Moti Stein ',
    email: 'Moti@gmail.com',
    password: bcrypt.hashSync('123456', 10),

    name: 'Ron Fybish ',
    email: 'Ron@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users