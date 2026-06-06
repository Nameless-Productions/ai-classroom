import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { checkIfSetup } from "./lib/users/checkIfSetup";
import { verifyToken } from "./lib/jwt";
import { db } from "./lib/db";

export default async function proxy(req: NextRequest) {
    const pathname = req.nextUrl.pathname
    const redirectToLogin = NextResponse.redirect(new URL("/login", req.url))
    const redirectToRoot = NextResponse.redirect(new URL("/", req.url))
    const returnTo404 = new NextResponse(null, {status: 404})

    if(pathname.startsWith("/login") || pathname.startsWith("/_next")) return NextResponse.next();
    if(pathname === "/" && !(await checkIfSetup())) return NextResponse.next()

    const cookieStore = await cookies()
    const token = cookieStore.get("token")?.value
    if(!token) return redirectToLogin;

    const userInfo = await verifyToken(token)
    if(!userInfo) return redirectToLogin;

    const res = NextResponse.next();

    const user = await db.users.findUnique({
        where: {
            username: userInfo.username
        }
    })
    if(!user) return redirectToLogin;

    res.headers.set("x-username", user.username)
    res.headers.set("x-role", user.role)
    

    if(pathname.startsWith("/admin/")) {
        if(user.role === "admin") return res
        return redirectToRoot
    }
    else if(pathname.startsWith("/classes/")){
        if(user.role === "teacher" || user.role === "student") return res
        return redirectToRoot
    }
    return res
}