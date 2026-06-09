"use server"

import { db } from "../db"

export async function getUserClasses(userId: number) {
    return await db.enrollment.findMany({
        where: {
            userId
        },
        select: {
            classId: true
        }
    })
}