export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={jakarta.className} >{children}</body>
    </html>
  )
}