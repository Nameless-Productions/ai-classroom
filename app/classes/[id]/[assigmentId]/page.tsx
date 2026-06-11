import { db } from '@/lib/db';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function AssigmentPage({params}: {params: Promise<{id: string, assigmentId: string}>}) {
    const id = (await params).id;
    const assigmentId = (await params).assigmentId
    if(isNaN(Number(id)) || isNaN(Number(assigmentId))) return redirect("/classes")

    const headerList = await headers();
    const username = headerList.get("x-username");
    const role = headerList.get("x-role");
    if(!username || !role) return redirect("/login");
    if(role === "teacher" || role === "admin") return redirect("/classes")  

    const userDb = await db.users.findUnique({
        where: {
            username
        }
    });
    if(!userDb) return redirect("/login");

    const usrEnrollmentsWithClass = await db.enrollment.findMany({
      where: {
        userId: userDb.id,
        classId: Number(id)
      }
    })
    if(usrEnrollmentsWithClass.length === 0) return redirect("/classes");

    const assigment = await db.assigment.findUnique({
      where: {
        id: Number(assigmentId)
      }
    })
    if(!assigment) return redirect("/classes")
  return (<>
    <p className='font-bold text-lg'>Assigment: {assigment.name}</p>
    <br />
    <p className='font-bold'>Task: </p>
    <br />
    <div className='whitespace-pre-wrap'>{assigment.content}</div>
  </>)
}
