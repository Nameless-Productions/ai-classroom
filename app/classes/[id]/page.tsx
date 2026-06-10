import { db } from '@/lib/db';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation'
import React from 'react'
import TeacherPage from '@/components/classes/TeacherPage';

export default async function ClassPage({params}: {params: Promise<{id: string}>}) {
    const id = await (await params).id
    if(isNaN(Number(id))) return redirect("/classes");

    const headerList = await headers()
    const username = headerList.get("x-username")
    if(!username) return redirect("/login")
    const user = await db.users.findUnique({
        where: {
            username
        }
    })
    if(!user) return redirect("/login");
    const userClassEnrollment = await db.enrollment.findMany({
        where: {
            classId: Number(id),
            userId: user.id
        }
    })
    if(userClassEnrollment.length === 0) return redirect("/classes");

    const classDB = await db.classes.findUnique({
        where: {
            id: Number(id)
        }
    })
    if(!classDB) return redirect("/classes")
  return (<>
    <p className='font-bold text-lg'>Welcome to class {classDB.name}!</p>
    <br />

    {user.role === "teacher" && <TeacherPage classId={classDB.id} />}
    {user.role === "student" && <p>Hello student!</p>}
  </>)
}
