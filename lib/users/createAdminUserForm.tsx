"use server"

import bcrypt from "bcrypt";
import { db } from "../db";
import { redirect } from "next/navigation";

export async function createAdminUserForm(formData: FormData) {
    const username = formData.get("username") as string | null;
    const password = formData.get("password") as string | null;
    if(!password || !username) return;

    const passwHash = await bcrypt.hash(password, 10)

    await db.users.create({
        data: {
            username,
            password: passwHash,
            role: "admin"
        }
    })

    // wait one second to make sure the user is created
    setTimeout(() => {
        redirect("/")
    }, 1000);
}