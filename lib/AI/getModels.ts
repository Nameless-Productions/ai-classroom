"use server"

import Anthropic from "@anthropic-ai/sdk"

const client = new Anthropic({
    apiKey: process.env["CLAUDE"]
})

export async function getModels() {
    let allModels = []
    for await (const model of await client.models.list()) {
        allModels.push(model.id)
    }
    return allModels;
}