import { createClassForm } from '@/lib/classes/createClass'
import { createUserForm } from '@/lib/users/createUser'
import React from 'react'

export default function SettingsPage() {
  return (<>
    <p className='font-bold text-lg'>Create account</p>
    <form action={createUserForm}>
        <input type="text" name='username' className='inp-normal mb-2 mt-2' placeholder='Username' required />
        <br />
        <select name="role" className='inp-normal mb-2 mt-2 w-full' required>
            <option disabled>Select one</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
        </select>
        <br />
        <input type="password" name='password' className='inp-normal mb-2 mt-2' placeholder='Password' required />
        <br />
        <input type="submit" className='btn-normal w-full' value="Submit" />
    </form>

    <br />

    <form action={createClassForm}>
      <p className='font-bold text-lg mb-2'>Create Class</p>

      <input type="text" name='name' placeholder='Class name' className='inp-normal mb-2' required />
      <br />
      <input type="submit" value="Create class" className='btn-normal w-full' />
    </form>
  </>)
}
