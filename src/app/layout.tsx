import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const inter = Roboto({ 
  subsets: ['latin'], 
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'PolachiniDev',
  description: 'Portfolio do desenvolvedor de software, Vinícius Polachini',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
