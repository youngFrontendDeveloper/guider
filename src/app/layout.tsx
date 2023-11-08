import '../styles/globals.scss'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Guider Pro',  // Заголовок общий для всего проекта
    description: 'Удобная площадка для поиска нужных сервисов',  // Описание общее для всего проекта
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">

        <body className={inter.className}>
        <Header />
        <main className="main">
            {children}
        </main>
        <Footer />
        </body>

        </html>
    )
}
