import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: '상담 예약 | 아미레브 무료 상담',
  description: '아미레브 무료 상담을 예약하세요. 24시간 내 연락드립니다',
}

export default function ContactPage() {
  return (
    <main>
      <section className="py-16 md:py-24 text-center bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-white font-extrabold text-3xl md:text-5xl mb-4 tracking-tight">
            함께 성장할 준비가 되셨나요?
          </h1>
          <p className="mb-10 text-base text-white/70">
            아래 양식을 작성하시면 24시간 내 연락드립니다
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mx-auto">
            {/* Email */}
            <div className="flex flex-col items-center gap-4 bg-[#1E1E2E] px-8 py-8 rounded-2xl hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(0,0,0,0.5)] active:scale-95 transition-all duration-300 cursor-default">
              <div className="w-12 h-12 bg-[#2A2A3E] flex items-center justify-center rounded-xl text-brand-yellow">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-1.5">Email</p>
                <p className="text-white text-sm font-bold leading-snug">amie-reve@naver.com</p>
              </div>
            </div>
            {/* Kakao */}
            <div className="flex flex-col items-center gap-4 bg-[#1E1E2E] px-8 py-8 rounded-2xl hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(0,0,0,0.5)] active:scale-95 transition-all duration-300 cursor-default">
              <div className="w-12 h-12 bg-[#2A2A3E] flex items-center justify-center rounded-xl text-brand-yellow">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.477 3 2 6.477 2 10.909c0 2.758 1.518 5.197 3.845 6.71-.169.6-.544 1.93-.624 2.23-.097.362.133.357.279.26.115-.077 1.83-1.241 2.572-1.742.604.084 1.226.13 1.928.13 5.523 0 10-3.477 10-7.909S17.523 3 12 3z"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-1.5">Kakao</p>
                <p className="text-white text-sm font-bold leading-snug">카카오 채널로 문의</p>
              </div>
            </div>
            {/* Hours */}
            <div className="flex flex-col items-center gap-4 bg-[#1E1E2E] px-8 py-8 rounded-2xl hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(0,0,0,0.5)] active:scale-95 transition-all duration-300 cursor-default">
              <div className="w-12 h-12 bg-[#2A2A3E] flex items-center justify-center rounded-xl text-brand-yellow">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-1.5">Hours</p>
                <p className="text-white text-sm font-bold leading-snug">평일 09:00 ~ 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <ContactForm />
      </section>
    </main>
  )
}
