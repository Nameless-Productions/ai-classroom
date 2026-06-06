"use server";

import { redirect } from "next/navigation";
import { db } from "../db";
import bcrypt from "bcrypt"
import { createToken, UserCookieInfo } from "../jwt";
import { cookies } from "next/headers";

export async function loginForm(formData: FormData) {
    const username = formData.get("username") as string | null
    const password = formData.get("password") as string | null
    if(!username || !password) return redirect("/login?error=Username and password are required");

    const user = await db.users.findUnique({
        where: {
            username
        }
    })
    if(!user) return redirect("/login?error=Invalid credentials");

    const passwordCheck = await bcrypt.compare(password, user.password)
    if(!passwordCheck) return redirect("/login?error=Invalid credentials");

    const userInfo: UserCookieInfo = {
        uid: user.id,
        username,
        role: user.role
    }

    const token = await createToken(userInfo)
    if(!token) return redirect("/login?error=Something happened on our side. Please try again later")

    const cookieStore = await cookies()
    cookieStore.set("token", token, {
        maxAge: 60 * 60 * 24 * 30,
        httpOnly: true,
        path: "/",
        sameSite: "lax"
    })
}