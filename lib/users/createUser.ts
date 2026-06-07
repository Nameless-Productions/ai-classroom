"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcrypt"
import { db } from "../db";

export async function createUserForm(formData: FormData) {
    // username: string, password: string, role: "student" | "teacher"

    const username = formData.get("username") as string | null
    const password = formData.get("password") as string | null
    const role = formData.get("role") as string | null
    if(!username || !password || !role) return
    if(role !== "teacher" && role !== "student") return
    
    const passwordHash = await bcrypt.hash(password, 10)

    const usr = await db.users.findUnique({
        where: {
            username
        }
    })
    if(usr) return;

    await db.users.create({
        data: {
            username,
            password: passwordHash,
            role
        }
    })

    return redirect("/admin/settings")
}