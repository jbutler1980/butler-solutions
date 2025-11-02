import './globals.css'
import type { Metadata } from 'next'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import SmoothScrollProvider from './components/SmoothScrollProvider'
import { Space_Grotesk, Manrope, IBM_Plex_Mono } from 'next/font/google'

const heading = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
})

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Butler Solutions | Edge Intelligence for Regulated Enterprises',
  description:
    'Butler Solutions engineers AI-native platforms for edge-critical organizations, blending cloud precision with sovereign control.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${heading.variable} ${body.variable} ${mono.variable} font-body bg-midnight text-slate selection:bg-electric/20 selection:text-aqua`}
      >
        <SmoothScrollProvider />
        <Navigation />
        <main className="relative pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
