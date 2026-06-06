import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
    const allPages = [
        {name: "Home", href: "/"},
    ].map((p) => (<Link href={p.href} className='text-xl hover:font-bold duration-300' key={p.href}>{p.name}</Link>))
    const adminPages = [
        {name: "Info", href: "/admin"},
        {name: "General settings", href: "/admin/settings"},
        {name: "AI settings", href: "/admin/ai"},
        {name: "Profile settings", href: "/admin/accounts"}
    ].map((p) => (<Link href={p.href} className='text-xl hover:font-bold duration-300' key={p.href}>{p.name}</Link>))
    const teacherPages = [
        {name: "Classes", href: "/classes"}
    ].map((p) => (<Link href={p.href} className='text-xl hover:font-bold duration-300' key={p.href}>{p.name}</Link>))
    const studentPages = [
        {name: "Classes", href: "/classes"}
    ].map((p) => (<Link href={p.href} className='text-xl hover:font-bold duration-300' key={p.href}>{p.name}</Link>))


  return (
    <aside className='w-60 h-full bg-neutral-900 flex flex-col p-4 gap-1 shrink-0'>
        <p className='text-2xl font-bold'>AI Classroom</p>

        {allPages}
    </aside>
  )
}
