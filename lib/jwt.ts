"use server";

import jwt from "jsonwebtoken"

const secret = process.env["SECRET"] || "im missing"

interface UserCookieInfo {
    uid: number,
    username: string,
    role: "student" | "admin" | "teacher"
}


export async function createToken(userInfo: UserCookieInfo): Promise<string | undefined> {
    try {
        const token = jwt.sign(userInfo, secret)
        return token
    }
    catch(err) {
        console.error(err)
        return
    }
}

export async function verifyToken(token: string): Promise<UserCookieInfo | undefined> {
    try{
        const usr = jwt.verify(token, secret) as UserCookieInfo
        if(!usr.role || !usr.uid || !usr.username) return
        return usr
    }
    catch{
        return
    }
}