'use client'

export default function KakaoFloat() {
  const kakaoUrl = process.env.NEXT_PUBLIC_KAKAO_CHANNEL_URL || '#'

  return (
    <a
      href={kakaoUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="카카오톡 채널 문의"
      className="fixed bottom-6 right-6 md:bottom-6 md:right-6 bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-brand-yellow flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 animate-pulse-ring"
    >
      {/* 카카오 말풍선 아이콘 */}
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#1A1A1A">
        <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.599 1.467 4.875 3.698 6.299L4.8 20.1a.375.375 0 00.553.41l4.187-2.793C10.145 17.9 11.06 18 12 18c5.523 0 10-3.477 10-7.5S17.523 3 12 3z" />
      </svg>
    </a>
  )
}
