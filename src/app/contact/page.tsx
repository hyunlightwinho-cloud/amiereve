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
      <section className="py-24 text-center bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-white font-extrabold text-4xl md:text-5xl mb-4 tracking-tight">
            함께 성장할 준비가 되셨나요?
          </h1>
          <p className="mb-10 text-base text-white/70">
            아래 양식을 작성하시면 24시간 내 연락드립니다
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-3 bg-white/8 border border-white/12 rounded-2xl px-6 py-4 shadow-lg shadow-black/20 backdrop-blur-sm">
              <div className="w-9 h-9 rounded-xl bg-brand-yellow/15 flex items-center justify-center shrink-0">
                <Mail size={17} className="text-brand-yellow" />
              </div>
              <div className="text-left">
                <p className="text-white/50 text-[11px] font-semibold tracking-widest uppercase mb-0.5">Email</p>
                <p className="text-white text-sm font-semibold">amie-reve@naver.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/8 border border-white/12 rounded-2xl px-6 py-4 shadow-lg shadow-black/20 backdrop-blur-sm">
              <div className="w-9 h-9 rounded-xl bg-brand-yellow/15 flex items-center justify-center shrink-0">
                <MessageCircle size={17} className="text-brand-yellow" />
              </div>
              <div className="text-left">
                <p className="text-white/50 text-[11px] font-semibold tracking-widest uppercase mb-0.5">Kakao</p>
                <p className="text-white text-sm font-semibold">카카오 채널로 문의</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/8 border border-white/12 rounded-2xl px-6 py-4 shadow-lg shadow-black/20 backdrop-blur-sm">
              <div className="w-9 h-9 rounded-xl bg-brand-yellow/15 flex items-center justify-center shrink-0">
                <Clock size={17} className="text-brand-yellow" />
              </div>
              <div className="text-left">
                <p className="text-white/50 text-[11px] font-semibold tracking-widest uppercase mb-0.5">Hours</p>
                <p className="text-white text-sm font-semibold">평일 09:00 ~ 18:00</p>
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
