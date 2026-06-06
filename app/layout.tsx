import Sidebar from '@/components/Sidebar'
import React from 'react'
import "./globals.css"
import { checkIfSetup } from '@/lib/users/checkIfSetup'
import SetupPage from '@/components/SetupPage'

export default async function RootLayout({children}: {children: React.ReactNode}) {
  const isSettedUp = await checkIfSetup()
  return (
    <html lang='en'>
      <body className='flex h-screen overflow-hidden bg-neutral-800 text-neutral-300'>
        {isSettedUp &&
        <div>
          <Sidebar />
          <main className='flex-1 overflow-y-auto m-2'>
            {children}
          </main>
        </div>
        }
        {!isSettedUp && <SetupPage />}
      </body>
    </html>
  )
}
