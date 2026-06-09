import { getUserClasses } from '@/lib/classes/getUserClasses'
import { db } from '@/lib/db'
import { headers } from 'next/headers'
import React from 'react'
import ClassCard from './ClassCard'

export default async function ClassesPage() {
    const headerList = await headers()
    const username = headerList.get("x-username")
    if(!username) return null
    const usr = await db.users.findUnique({
        where: {
            username: username
        }
    })
    if(!usr) return null
    const classes = await getUserClasses(usr.id)
  return (<>
    <p className='text-lg font-bold'>Classes</p>
    <br />
    <div>
        {classes.map((c) => (
            <ClassCard key={c.id} id={c.id} name={c.name} color={getRandomBgColor()}/>
        ))}
    </div>
  </>)
}


function getRandomBgColor() {
    const colors = ["bg-rose-400", "bg-amber-400", "bg-lime-400", "bg-teal-400", "bg-violet-400", "bg-sky-400", "bg-orange-400", "bg-pink-400", "bg-emerald-400", "bg-indigo-400"]
    let index = Math.floor(Math.random() * colors.length)
    return colors[index]
}