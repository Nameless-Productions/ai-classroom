import Sidebar from '@/components/Sidebar'
import React from 'react'
import "./globals.css"

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body className='flex h-screen overflow-hidden bg-neutral-800 text-neutral-300'>
        <Sidebar />
        <main className='flex-1 overflow-y-auto m-2'>
          {children}
        </main>
      </body>
    </html>
  )
}
