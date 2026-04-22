import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import KakaoFloat from '@/components/layout/KakaoFloat'

export const metadata: Metadata = {
  title: 'Amie Reve | 아미레브',
  description: '인플루언서·유튜버 브랜딩, 소상공인 SNS 마케팅 교육, AI 콘텐츠 마케팅 컨설팅 전문 광고대행사',
  keywords: '아미레브, SNS마케팅, 인플루언서브랜딩, 소상공인교육, AI마케팅, 광고대행',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <KakaoFloat />
        <Footer />
      </body>
    </html>
  )
}
