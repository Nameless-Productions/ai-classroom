import { createAdminUserForm } from '@/lib/users/createAdminUserForm'
import React from 'react'

export default function SetupPage() {
  return (<div className='items-center justify-center flex-1 flex flex-col'>
    <p className='font-bold text-xl'>Setup AI Classroom</p>
    <br />
    <p className='text-lg'>Create admin account:</p>
    <br />
    <form action={createAdminUserForm}>
        <input type="text" name='username' className="inp-normal mt-2 mb-2" placeholder='Username' required />
        <br />
        <input type="password" name='password' className="inp-normal mt-2 mb-2" placeholder='Password' required />
        <br />
        <input type="submit" className='btn-normal mt-2 w-full' value="Create Account" required />
    </form>
  </div>)
}
