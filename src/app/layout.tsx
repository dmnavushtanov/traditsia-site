import './globals.css'
import { Inter, Montserrat, Caveat, Cinzel } from 'next/font/google'
import type { Metadata } from 'next'
import { LanguageProvider } from '@/contexts/LanguageContext'
import TranslatableNavigation from '@/components/TranslatableNavigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })

export const metadata: Metadata = {
  title: 'НД "Традиция"',
  description: 'Making a difference in our community',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${montserrat.variable} ${inter.variable} ${caveat.variable} ${cinzel.variable} bg-background text-foreground`}>
        <LanguageProvider>
          <TranslatableNavigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
