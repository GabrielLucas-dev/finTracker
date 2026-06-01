import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '../../generated/prisma/client.js'
import 'dotenv/config'

const DATABASE_URL: string = process.env.DATABASE_URL!

const adapter = new PrismaPg(DATABASE_URL)

export const prisma = new PrismaClient({ adapter })