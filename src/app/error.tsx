'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-brand-yellow text-sm font-semibold tracking-widest uppercase mb-4">Error</p>
        <h2 className="text-white text-4xl font-bold mb-4">
          오류가 발생했습니다
        </h2>
        <p className="text-white/60 text-base mb-10">
          일시적인 오류입니다. 잠시 후 다시 시도해주세요.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center px-8 py-4 bg-brand-yellow text-brand-dark font-bold hover:bg-brand-yellow-dark transition-colors duration-200"
        >
          다시 시도
        </button>
      </div>
    </div>
  )
}
