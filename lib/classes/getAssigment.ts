"use server";

import { db } from "../db";

export async function getAssigment(id: number) {
    const assigment = await db.assigment.findUnique({
        where: {
            id
        }
    })
    if(!assigment) return
    return assigment
}