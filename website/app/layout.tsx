import './globals.css'
import type { Metadata } from 'next'
import Navigation from './components/Navigation'

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
      <body className="antialiased bg-white text-gray-900">
        <Navigation />
        <div className="pt-24">{children}</div>
      </body>
    </html>
  )
}
