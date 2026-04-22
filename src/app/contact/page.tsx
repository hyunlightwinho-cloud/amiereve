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
            <div className="flex flex-col items-center gap-3 bg-white px-6 py-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)] border-t-4 border-brand-yellow">
              <div className="w-11 h-11 bg-brand-yellow/15 flex items-center justify-center">
                <Mail size={20} className="text-brand-dark" />
              </div>
              <div className="text-center">
                <p className="text-brand-gray text-[10px] font-bold tracking-widest uppercase mb-1">Email</p>
                <p className="text-brand-dark text-sm font-bold leading-snug">amie-reve@naver.com</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 bg-white px-6 py-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)] border-t-4 border-brand-yellow">
              <div className="w-11 h-11 bg-brand-yellow/15 flex items-center justify-center">
                <MessageCircle size={20} className="text-brand-dark" />
              </div>
              <div className="text-center">
                <p className="text-brand-gray text-[10px] font-bold tracking-widest uppercase mb-1">Kakao</p>
                <p className="text-brand-dark text-sm font-bold leading-snug">카카오 채널 문의</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3 bg-white px-6 py-6 shadow-[0_8px_32px_rgba(0,0,0,0.35)] border-t-4 border-brand-yellow">
              <div className="w-11 h-11 bg-brand-yellow/15 flex items-center justify-center">
                <Clock size={20} className="text-brand-dark" />
              </div>
              <div className="text-center">
                <p className="text-brand-gray text-[10px] font-bold tracking-widest uppercase mb-1">Hours</p>
                <p className="text-brand-dark text-sm font-bold leading-snug">평일 09:00 ~ 18:00</p>
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
