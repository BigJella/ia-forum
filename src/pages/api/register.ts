import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

async function addUser(username: string, student_id: number, firstName: string, lastName: string, email: string, password: string) {
  await prisma.user.create({
    data: {
        username,
        student_id,
        firstName,
        lastName,
        email,
        posts: {},
        password,
      },
  })
}

export default function registrationHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {username, student_id, firstName, lastName, email, password} = req.body;
    console.log(req.body)
    addUser(username, parseInt(student_id), firstName, lastName, email, password)
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      await prisma.$disconnect()
      return res.json({"success": false, "message": e})
    })
    return res.json({"success": true, "message": "Registration Successful"})
  } else {
    res.status(302).redirect(302, "/register")
  }
}