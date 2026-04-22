import { type Review } from '@/data/reviews'

interface KakaoReviewCardProps {
  review: Review
}

export default function KakaoReviewCard({ review }: KakaoReviewCardProps) {
  return (
    <div
      className="overflow-hidden shadow-md"
      style={{ background: '#EFEFE4' }}
    >
      {/* Header */}
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{ background: '#CDCDCD' }}
      >
        <div className="w-7 h-7 rounded-full bg-brand-yellow flex items-center justify-center text-brand-dark text-xs font-bold">
          A
        </div>
        <span className="text-brand-dark text-sm font-semibold">아미레브</span>
      </div>

      {/* Chat Bubbles */}
      <div className="p-4 space-y-3">
        {/* Customer message (left) */}
        <div className="flex items-end gap-2">
          <div
            className="max-w-[80%] bg-white text-brand-dark text-sm px-4 py-3 leading-relaxed shadow-sm"
            style={{ borderRadius: '18px 18px 18px 4px' }}
          >
            {review.question}
          </div>
        </div>

        {/* Reply (right) */}
        <div className="flex items-end justify-end gap-2">
          <div
            className="max-w-[80%] text-brand-dark text-sm px-4 py-3 leading-relaxed shadow-sm"
            style={{ background: '#FEE500', borderRadius: '18px 18px 4px 18px' }}
          >
            {review.answer}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 pt-1 border-t border-black/5">
        <p className="text-brand-dark font-semibold text-sm">{review.customerName}</p>
        <p className="text-brand-gray text-xs">{review.occupation}</p>
      </div>
    </div>
  )
}
