import { getClasses } from '@/lib/classes/getClasses'
import { getUsers } from '@/lib/users/getUsers'
import React from 'react'

export default async function AdminPage() {
    const users = await (await getUsers()).map((u) => (
        <li key={u.id}>ID: {u.id} <br />Username: {u.username} <br />Role: {u.role}</li>
    ))

    const classes = await (await getClasses()).map((c) => (
      <li key={c.id}>ID: {c.id} <br />Name: {c.name}</li>
    ))
  return (<>
    <p className='font-bold text-xl'>Info</p>
    <br />

    <p className='font-bold'>All classes:</p>
    <ul className='list-inside ml-2 space-y-2'>
      {classes}
    </ul>

    <br />
    <p className='font-bold'>All users:</p>
    <ul className='list-inside ml-2 space-y-4'>
        {users}
    </ul>
  </>)
}
