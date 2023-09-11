import './globals.css'
import type { Metadata } from 'next'
import { Chakra_Petch } from 'next/font/google'

const chakra = Chakra_Petch({ weight: '400', style: 'normal', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Folarin Raphael',
  description: 'Folarin\'s personal portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={chakra.className}>{children}</body>
    </html>
  )
}
