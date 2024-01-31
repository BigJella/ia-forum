import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

async function addUser(username: string, studentId: string, firstName: string, lastName: string, email: string, password: string) {
  await prisma.user.create({
    data: {
        username: username,
        student_id: parseInt(studentId),
        student_first_name: firstName,
        student_last_name: lastName,
        email: email,
        posts: {},
        password: password,
      },
  })
}

export default function registrationHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {username, studentId, firstName, lastName, email, password} = req.body;

    addUser(username, studentId, firstName, lastName, email, password)
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
    res.status(201).redirect(201, "/login")
  } else {
    res.status(302).redirect(302, "/register")
  }
}