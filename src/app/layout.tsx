import './globals.css'
import { Inter, Montserrat } from 'next/font/google'
import { LanguageProvider } from '@/contexts/LanguageContext'
import TranslatableNavigation from '@/components/TranslatableNavigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata = {
  title: 'Nonprofit Organization',
  description: 'Making a difference in our community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${montserrat.variable} ${inter.variable} bg-background text-foreground`}>
        <LanguageProvider>
          <TranslatableNavigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}