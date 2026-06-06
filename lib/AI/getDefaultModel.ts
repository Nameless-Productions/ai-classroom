"use server"

import { db } from "../db"

export async function getDefaultModel() {
    const model = await db.config.findUnique({
        where: {
            key: "DEFAULT_MODEL"
        }
    })

    if(!model) {
        await db.config.create({
            data: {
                key: "DEFAULT_MODEL",
                value: "claude-haiku-4-5-20251001"
            }
        })
        return "claude-haiku-4-5-20251001"
    }

    return model.value
}