import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menschliches Wissen Agent',
  description: 'Ein intelligenter Agent der alle Fragen über den Menschen beantworten kann',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  )
}
