import type { Metadata } from 'next'
import { Mail, MessageCircle, Clock } from 'lucide-react'
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
            <div className="flex flex-col items-center gap-4 bg-[#1E1E2E] px-8 py-8 rounded-2xl hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(0,0,0,0.5)] active:scale-95 transition-all duration-300 cursor-default">
              <div className="w-12 h-12 bg-[#2A2A3E] flex items-center justify-center rounded-xl">
                <Mail size={22} className="text-brand-yellow" />
              </div>
              <div className="text-center">
                <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-1.5">Email</p>
                <p className="text-white text-sm font-bold leading-snug">amie-reve@naver.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 bg-[#1E1E2E] px-8 py-8 rounded-2xl hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(0,0,0,0.5)] active:scale-95 transition-all duration-300 cursor-default">
              <div className="w-12 h-12 bg-[#2A2A3E] flex items-center justify-center rounded-xl">
                <MessageCircle size={22} className="text-brand-yellow" />
              </div>
              <div className="text-center">
                <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-1.5">Kakao</p>
                <p className="text-white text-sm font-bold leading-snug">카카오 채널로 문의</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 bg-[#1E1E2E] px-8 py-8 rounded-2xl hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(0,0,0,0.5)] active:scale-95 transition-all duration-300 cursor-default">
              <div className="w-12 h-12 bg-[#2A2A3E] flex items-center justify-center rounded-xl">
                <Clock size={22} className="text-brand-yellow" />
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
