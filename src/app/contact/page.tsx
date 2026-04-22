import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: '상담 예약 | 아미레브 무료 상담',
  description: '아미레브 무료 상담을 예약하세요. 24시간 내 연락드립니다',
}

export default function ContactPage() {
  return (
    <main>
      {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
      <section
        className="py-24 text-center"
        style={{ backgroundColor: '#1A1A1A' }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <h1
            className="font-bold mb-4"
            style={{ color: '#ffffff', fontSize: '2.5rem' }}
          >
            함께 성장할 준비가 되셨나요?
          </h1>
          <p
            className="mb-10 text-base"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            아래 양식을 작성하시면 24시간 내 연락드립니다
          </p>

          {/* 연락 정보 3개 */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex items-center gap-2 text-white text-sm">
              <span className="text-lg">✉</span>
              <span>amie-reve@naver.com</span>
            </div>
            <div className="flex items-center gap-2 text-white text-sm">
              <span className="text-lg">💬</span>
              <span>카카오 채널로 문의</span>
            </div>
            <div className="flex items-center gap-2 text-white text-sm">
              <span className="text-lg">🕐</span>
              <span>평일 09:00 ~ 18:00</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 2: 3단계 스텝 폼 ─────────────────────────────────────── */}
      <section className="bg-white">
        <ContactForm />
      </section>

      {/* ── Section 3: 오시는 길 ──────────────────────────────────────────── */}
      <section className="bg-brand-light py-16">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-brand-dark mb-8 text-center">
            오시는 길
          </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202461.83512774595!2d126.72958684863281!3d37.19987490000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b4a4b8d6f9f1b%3A0x84cb5cc86e6f1c7!2z6rK96ri464yA7ZWZ7Iah!5e0!3m2!1sko!2skr!4v1700000000000!5m2!1sko!2skr"
            loading="lazy"
            className="w-full h-80 rounded-xl border-0"
            title="아미레브 오시는 길"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <p className="mt-4 text-center text-brand-gray text-sm">
            경기도 화성시 (주소 추후 업데이트 예정)
          </p>
        </div>
      </section>
    </main>
  )
}
