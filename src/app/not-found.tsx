import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-4">404</p>
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="text-white/60 text-base mb-10">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-yellow text-brand-dark font-bold hover:bg-brand-yellow-dark transition-colors duration-200"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  )
}
