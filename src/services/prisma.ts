import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  log: ['query'], // show all logs at terminal
})
