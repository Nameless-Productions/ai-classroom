import React from 'react'

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body>
        <main className='m-2'>
          {children}
        </main>
      </body>
    </html>
  )
}
