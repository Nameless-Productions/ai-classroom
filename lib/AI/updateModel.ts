"use server"

import { db } from "../db";

export async function updateModel(model: string) {
    await db.config.upsert({
        where: {
            key: "DEFAULT_MODEL"
        },
        update: {
            value: model
        },
        create: {
            key: "DEFAULT_MODEL",
            value: model
        }
    })
}