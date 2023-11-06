import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luís Fernando Cutilak',
  description: 'Luís Cutilak, is a software developer FullStack, Im looking for my first job as a developer, and I intend to use my professional history, as a salesperson and customer relationship so that I can deliver excellent work and grow with the company. Always evolving!',
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
