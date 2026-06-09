"use server"

import { db } from "../db";

export async function addUsrToClassForm(formData: FormData) {
    const classId = formData.get("class") as number | null;
    const username = formData.get("username") as string | null;
    if(!classId || !username || isNaN(classId)) return

    const classDb = await db.classes.findUnique({
        where: {
            id: classId
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