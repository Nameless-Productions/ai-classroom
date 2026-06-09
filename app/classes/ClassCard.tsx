"use client"

import { redirect } from 'next/navigation'
import React from 'react'

export default function ClassCard({name, color, id}: {name: string, color: string, id: number}) {
  return (<div className={`w-40 h-30 p-2 cursor-pointer text-black rounded-xl ${color}`} onClick={() => redirect(`/classes/${id}`)}>
    <p>{name}</p>
  </div>)
}
