"use server";

import { db } from "../db";

export async function getAssigments(classId: number) {
    const assigments = await db.assigment.findMany({
        where: {
            classId
        }
    })

    return assigments
}