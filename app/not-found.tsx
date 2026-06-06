import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (<>
    <p className='text-xl font-bold'>Page not found</p>
    <p>Return to homepage <Link href="/" className='text-blue-500 underline'>here</Link>.</p>
  </>)
}
