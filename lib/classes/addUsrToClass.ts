"use server"

import { db } from "../db";

export async function addUsrToClassForm(formData: FormData) {
    const classId = formData.get("class") as string | null;
    const username = formData.get("username") as string | null;
    if(!classId || !username || isNaN(Number(classId))) return

    const classDb = await db.classes.findUnique({
        where: {
            id: Number(classId)
        }
    });
    if(!classDb) return

    const user = await db.users.findUnique({
        where: {
            username
        }
    });
    if(!user) return

    await db.enrollment.create({
        data: {
            classId: classDb.id,
            userId: user.id
        }
    })
}