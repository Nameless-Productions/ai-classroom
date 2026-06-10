"use server";

import Anthropic from "@anthropic-ai/sdk";
import { getDefaultModel } from "./getDefaultModel";

const client = new Anthropic({
    apiKey: process.env["CLAUDE"]
})

const systemPrompt = `
You are writing an assigment description to a class. The content you received is the teacher's prompt and you will have to write it based on that.
Be specific about everything and sound more like a human teacher than a robot.
The only markdown you can use are linebreks (\n) but nothing else.
Write your response in your very first message content.
`


export async function createAssigment(prompt: string) {
    const res = await client.messages.create({
        max_tokens: 1024,
        model: await getDefaultModel(),
        messages: [{role: "user", content: prompt}],
        system: systemPrompt
    })

    if(res.content[0].type !== "text") return;
    return res.content[0].text
}