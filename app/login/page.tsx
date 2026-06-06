import { loginForm } from '@/lib/users/loginForm'
import React from 'react'

export default function LoginPage() {
  return (<>
    <p className='text-xl font-bold'>Login</p>
    <br />
    <form action={loginForm}>
        <input type="text" name='username' className='inp-normal mb-2 mt-2' placeholder='Username' required />
        <br />
        <input type="password" name='password' className='inp-normal mb-2 mt-2' placeholder='Password' required />
        <br />
        <input type="submit" className='btn-normal' value="Submit" />
    </form>
  </>)
}
