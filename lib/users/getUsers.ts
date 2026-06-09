"use server";

import { db } from "../db";

export async function getUsers(){
    const users = await db.users.findMany({
        select: {
            id: true,
            username: true,
            role: true,
            password: false
        },
        orderBy: {
            id: "asc"
        }
    })

    return users
}