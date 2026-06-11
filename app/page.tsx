import { getUserClasses } from '@/lib/classes/getUserClasses'
import { db } from '@/lib/db'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function MainPage() {
  const headerList = await headers()
  const username = headerList.get("x-username")
  if(!username) return redirect("/login");

  const usr = await db.users.findUnique({
    where: {
      username
    }
  })
  if(!usr) return redirect("/login");

  const classes = await getUserClasses(usr.id)
  return (<>
    <p className='font-bold text-xl'>AI Classroom</p>
    <br />
    {classes.length !== 0 && <p className='font-bold mb-2'>Classes:</p>}
    {classes.map((c) => (
      <Link key={c.id} href={`/classes/${c.id}`}>
        <div className='border-2 border-neutral-600 p-4 rounded-xl bg-neutral-700 hover:bg-neutral-600 duration-300 cursor-pointer'>
          <p className='font-bold text-sm'>{c.name}</p>
        </div>
      </Link>
    ))}

    <br />

    {usr.role === "student" && <>
      <div className='p-2 border-2 border-neutral-600 rounded-xl'>
        <p>AI assistant</p>
        <div className='flex border border-neutral-500 m-2 rounded-xl p-2 bg-neutral-600'>
          <Image className='mr-2' src="/stars.svg" alt='stars' height={15} width={15}></Image>
          <p>Coming soon!</p>
        </div>
      </div>
    </>}
  </>)
}
