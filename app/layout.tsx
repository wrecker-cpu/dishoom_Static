import "./globals.css";
import localFont from 'next/font/local'

import { cn } from '@/utils/util'

const gillSans = localFont({
  src: [
    {
      path: './fonts/GillSans.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/GillSans-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/GillSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/GillSans-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/GillSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/GillSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/GillSans-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-gill-sans',
})

const cheltenhamLT = localFont({
  src: [
    {
      path: './fonts/CheltenhamLT-BookItalic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-itc-cheltenham-std',
})

const cheltenhamBT = localFont({
  src: [
    {
      path: './fonts/CheltenhamBT-Roman.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/CheltenhamBT-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-cheltenham-bt',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const htmlClasses = cn(
    [gillSans.variable, cheltenhamLT.variable, cheltenhamBT.variable],
    'overscroll-none',
  )

  return (
    <html lang="en" className={htmlClasses}>
      <body className="bg-beige font-serif text-black">
        {children}
      </body>
    </html>
  )
}

