import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Butler Solutions',
  description: 'Innovative technology solutions for modern businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}