"use server"

import { client } from "./client"

export async function getModels() {
    let allModels = []
    for await (const model of await client.models.list()) {
        allModels.push(model.id)
    }
}