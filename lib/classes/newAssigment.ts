"use server";

import { db } from "../db";

export async function newAssigment(title: string, content: string, classId: number) {
    await db.assigment.create({
        data: {
            name: title,
            content: content,
            classId,
            hasFlashcards: false,
            hasQuiz: false
        }
    })
}