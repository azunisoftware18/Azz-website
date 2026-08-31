import "dotenv/config";

import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client.js";

const adapter = new PrismaMariaDb({
   host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  portL: Number(process.env.DATABASE_PORT || 4000),
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });

export default prisma;
