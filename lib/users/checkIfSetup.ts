"use server"

import { db } from "../db"

/**
 * Checks if the entire thing is setted up yet (the admin user exists or not)
 * @returns boolean based if it's setted up yet
*/
export async function checkIfSetup(): Promise<boolean> {

    const admins = await db.users.findMany({
        where: {
            role: "admin"
        }
    })

    if(admins.length === 0) return false;
    return true;
}