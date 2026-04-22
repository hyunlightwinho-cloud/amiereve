import Link from 'next/link'

const pages = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/cases', label: 'Cases' },
  { href: '/media', label: 'Media' },
]

const services = [
  { href: '/services#ad', label: '광고대행 & 미디어 운영' },
  { href: '/services#branding', label: '인플루언서·유튜버 브랜딩' },
  { href: '/services#education', label: '소상공인 교육·컨설팅' },
  { href: '/services#ai', label: 'AI 마케팅 서비스' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white" style={{ borderTop: '4px solid #FEE500' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Logo & Tagline */}
          <div>
            <div className="mb-3">
              <div className="font-bold text-2xl tracking-widest uppercase">Amie Reve</div>
              <div className="text-[10px] tracking-[0.2em] text-white/40 uppercase mt-0.5">아미레브</div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              브랜드의 이야기를<br />함께 써내려갑니다.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-11 h-11 bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-11 h-11 bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href={process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL || '#'} aria-label="KakaoTalk" className="w-11 h-11 bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-dark transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.599 1.467 4.875 3.698 6.299L4.8 20.1a.375.375 0 00.553.41l4.187-2.793C10.145 17.9 11.06 18 12 18c5.523 0 10-3.477 10-7.5S17.523 3 12 3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-bold text-sm tracking-widest text-white/40 uppercase mb-4">Pages</h4>
            <ul className="space-y-3">
              {pages.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-white/70 hover:text-brand-yellow transition-colors text-sm">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services & Contact */}
          <div>
            <h4 className="font-bold text-sm tracking-widest text-white/40 uppercase mb-4">Services</h4>
            <ul className="space-y-3 mb-8">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-white/70 hover:text-brand-yellow transition-colors text-sm">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-bold text-sm tracking-widest text-white/40 uppercase mb-3">Contact</h4>
            <p className="text-white/70 text-sm">amie-reve@naver.com</p>
            <p className="text-white/70 text-sm">010-4334-9779</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-white/40 text-[11px] leading-relaxed space-y-1">
            <p>상호: 아미레브(Amie Reve) | 대표자: 반경화 | 사업자등록번호: 869-74-00415</p>
            <p>업종: 서비스업(광고대행) · 정보통신업(미디어콘텐츠창작업)</p>
          </div>
          <p className="text-white/30 text-xs">© 2026 Amie Reve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
