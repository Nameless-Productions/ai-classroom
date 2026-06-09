import { getUsers } from '@/lib/users/getUsers'
import React from 'react'

export default async function AdminPage() {
    const users = await (await getUsers()).map((u) => (
        <li key={u.id}>ID: {u.id} <br />Username: {u.username} <br />Role: {u.role}</li>
    ))
  return (<>
    <p className='font-bold text-xl'>Info</p>
    <br />
    <p className='font-bold'>All users:</p>
    <ul className='list-inside ml-2 space-y-4'>
        {users}
    </ul>
  </>)
}
