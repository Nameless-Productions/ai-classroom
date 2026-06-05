import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "./generated/prisma/client";

const adapter = new PrismaLibSql({
    url: process.env["DB"]!
})

export const db = new PrismaClient({adapter})