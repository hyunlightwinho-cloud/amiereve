import type { Metadata } from 'next'
import FaqSection from '@/components/FaqSection'

export const metadata: Metadata = {
  title: '무료 상담 신청 | 인플루언서·SNS 마케팅 문의 - 아미레브',
  description: '아미레브 무료 마케팅 상담을 신청하세요. 인플루언서 브랜딩, 소상공인 SNS 마케팅 교육, 전문적인 SNS 운영대행 상담 신청. 24시간 내 연락드립니다.',
  keywords: [
    '마케팅무료상담', '인플루언서전문상담', '소상공인마케팅교육상담', 'SNS마케팅문의',
    '전문SNS운영신청', '광고대행사문의', '마케팅대행사상담', '아미레브연락처',
  ],
  alternates: { canonical: 'https://amiereve.hyunlight.com/contact', languages: { 'ko-KR': 'https://amiereve.hyunlight.com/contact' } },
  openGraph: {
    title: '무료 상담 신청 | 인플루언서·SNS 마케팅 문의 - 아미레브',
    description: '아미레브 무료 마케팅 상담 신청. 인플루언서 브랜딩, 소상공인 SNS 마케팅 교육, SNS 운영대행 상담. 24시간 내 연락드립니다.',
    url: 'https://amiereve.hyunlight.com/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="pt-16">
      <section className="relative overflow-hidden pt-8 pb-10 md:pt-16 md:pb-14 text-center bg-white border-b border-brand-border">
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: "url('/contact-bg.png')", opacity: 0.2 }}
          aria-hidden="true"
        />
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-yellow z-10" />
        <div className="relative max-w-3xl mx-auto px-6">
          <p className="text-brand-yellow text-[11px] tracking-[0.3em] uppercase font-bold mb-3">CONTACT</p>
          <h1 className="text-brand-dark font-extrabold text-2xl sm:text-3xl md:text-5xl mb-3 tracking-tight">
            지금 바로 시작해볼까요?
          </h1>
          <p className="mb-10 text-sm text-brand-gray">
            아래 방법으로 문의해주시면 24시간 내 연락드립니다
          </p>

          <div className="flex flex-col w-full max-w-md mx-auto divide-y divide-brand-border">
            {/* Email */}
            <a
              href="mailto:amie-reve@naver.com?subject=%5B%EC%95%84%EB%AF%B8%EB%A0%88%EB%B8%8C%5D%20%EC%83%81%EB%8B%B4%20%EB%AC%B8%EC%9D%98&body=%EC%9D%B4%EB%A6%84%3A%20%0A%EC%97%B0%EB%9D%BD%EC%B2%98%3A%20%0A%EB%AC%B8%EC%9D%98%20%EB%82%B4%EC%9A%A9%3A%20%0A"
              className="flex items-center gap-4 py-4 hover:bg-brand-light/40 transition-colors rounded"
            >
              <div className="w-12 h-12 bg-brand-light flex items-center justify-center rounded-lg text-brand-yellow shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-brand-gray text-xs font-bold tracking-widest uppercase mb-1">Email</p>
                <p className="text-brand-dark text-lg font-bold">amie-reve@naver.com</p>
              </div>
            </a>
            {/* Kakao */}
            <div className="flex items-center gap-4 py-4">
              <div className="w-12 h-12 bg-brand-light flex items-center justify-center rounded-lg text-brand-yellow shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.477 3 2 6.477 2 10.909c0 2.758 1.518 5.197 3.845 6.71-.169.6-.544 1.93-.624 2.23-.097.362.133.357.279.26.115-.077 1.83-1.241 2.572-1.742.604.084 1.226.13 1.928.13 5.523 0 10-3.477 10-7.909S17.523 3 12 3z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-brand-gray text-xs font-bold tracking-widest uppercase mb-1">Kakao</p>
                <p className="text-brand-dark text-lg font-bold">카카오채널로 상담</p>
              </div>
            </div>
            {/* Phone */}
            <a
              href="tel:010-4334-9779"
              className="flex items-center gap-4 py-4 hover:bg-brand-light/40 transition-colors rounded"
            >
              <div className="w-12 h-12 bg-brand-light flex items-center justify-center rounded-lg text-brand-yellow shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-brand-gray text-xs font-bold tracking-widest uppercase mb-1">Phone</p>
                <p className="text-brand-dark text-lg font-bold">010-4334-9779</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <FaqSection />
    </main>
  )
}
