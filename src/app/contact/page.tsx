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

          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-white text-sm">
              <Mail size={16} className="text-brand-yellow shrink-0" />
              <span>amie-reve@naver.com</span>
            </div>
            <div className="flex items-center gap-2 text-white text-sm">
              <MessageCircle size={16} className="text-brand-yellow shrink-0" />
              <span>카카오 채널로 문의</span>
            </div>
            <div className="flex items-center gap-2 text-white text-sm">
              <Clock size={16} className="text-brand-yellow shrink-0" />
              <span>평일 09:00 ~ 18:00</span>
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
