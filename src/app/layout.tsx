import './globals.css'
import { Inter, Montserrat, Caveat, Cinzel, EB_Garamond } from 'next/font/google'
import type { Metadata } from "next"
import { LanguageProvider } from '@/contexts/LanguageContext'
import TranslatableNavigation from '@/components/TranslatableNavigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' })
const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-cinzel' })
const ebGaramond = EB_Garamond({ subsets: ['latin', 'cyrillic'], variable: '--font-eb-garamond' })

export const metadata: Metadata = {
  metadataBase: new URL("https://nd-traditsiya.com"),
  title: {
    default: "НД Традиция – Исторически възстановки и българска история",
    template: "%s | НД Традиция",
  },
  description:
    "Национално дружество Традиция организира исторически възстановки, чествания и образователни събития, посветени на българската история – Априлското въстание 1876, Освобождението на България, боевете при Шипка, Балканските войни и Втората световна война.",
  keywords: [
    "НД Традиция",
    "комитет традиция",
    "исторически възстановки България",
    "Априлско въстание 1876",
    "Освобождението на България 1878",
    "Шипка 1877",
    "Руско-турска война",
    "Балкански войни",
    "Първа световна война България",
    "Втора световна война България",
    "български опълченци",
    "възстановка на битка",
    "честване на исторически събития",
    "българска военна история",
    "възрожденска история"
  ],
  openGraph: {
    title: "НД Традиция",
    description:
      "Исторически възстановки и чествания на ключови събития от българската история – Априлско въстание, Шипка, Освобождение на България и военна история.",
    url: "https://nd-traditsiya.com",
    siteName: "НД Традиция",
    locale: "bg_BG",
    type: "website",
  },
  alternates: {
    canonical: "https://nd-traditsiya.com",
  },
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
      <body className={`${inter.className} ${montserrat.variable} ${inter.variable} ${caveat.variable} ${cinzel.variable} ${ebGaramond.variable} bg-background text-foreground`}>
        <LanguageProvider>
          <TranslatableNavigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
