import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
    const pages = [
        {name: "Home", href: "/"},
    ]
  return (
    <aside className='w-60 h-full bg-neutral-900 flex flex-col p-4 gap-1 shrink-0'>
        <p className='text-2xl font-bold'>AI Classroom</p>

        {pages.map((p) => (
            <Link href={p.href} className='text-xl hover:font-bold duration-300' key={p.href}>{p.name}</Link>
        ))}
    </aside>
  )
}
