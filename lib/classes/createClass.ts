"use server";

import { db } from "../db";

export async function createClassForm(formData: FormData) {
    const name = formData.get("name") as string | null;
    if(!name) return;

    await db.classes.create({
        data:{
            name
        }
    })
}