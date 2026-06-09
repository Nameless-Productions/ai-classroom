"use server";

import { db } from "../db";

export async function getClasses() {
    const classes = await db.classes.findMany({
        orderBy: {
            id: "asc"
        }
    })

    return classes
}