import { db } from '@/lib/db';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation'
import React from 'react'

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

    const classDB = await db.classes.findUnique({
        where: {
            id: Number(id)
        }
    })
    if(!classDB) return redirect("/classes")
  return (<>
    <p className='font-bold text-lg'>Welcome to class {classDB.name}!</p>
  </>)
}
