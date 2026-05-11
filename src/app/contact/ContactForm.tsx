'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Loader2, Check, AlertCircle } from 'lucide-react'

// ─── Zod schema ───────────────────────────────────────────────────────────────
const schema = z.object({
  name: z.string().min(2, '이름을 2자 이상 입력해주세요'),
  phone: z
    .string()
    .regex(/^01[0-9]-?\d{3,4}-?\d{4}$/, '올바른 연락처 형식을 입력해주세요 (예: 010-1234-5678)'),
  email: z.string().email('올바른 이메일 주소를 입력해주세요'),
  message: z.string().min(10, '최소 10자 이상 입력해주세요'),
  privacy: z.boolean().refine((v) => v === true, '개인정보 수집 및 이용에 동의해주세요'),
})
type FormValues = z.infer<typeof schema>

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  })

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true)
    setSubmitError(null)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        const data = await res.json().catch(() => ({}))
        setSubmitError(data?.error ?? '전송에 실패했습니다. 잠시 후 다시 시도해주세요.')
      }
    } catch {
      setSubmitError('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
    } finally {
      setSubmitting(false)
    }
  }

  // ── 제출 성공 화면 ────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center py-20 px-6"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-brand-yellow mb-6">
          <Check size={40} strokeWidth={3} className="text-brand-dark" />
        </div>
        <h2 className="text-2xl font-bold text-brand-dark mb-3">
          문의가 접수되었습니다
        </h2>
        <p className="text-brand-gray mb-8">24시간 내 연락드리겠습니다.</p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-brand-dark text-white font-semibold hover:bg-brand-yellow hover:text-brand-dark transition-all duration-250 rounded"
        >
          홈으로 돌아가기
        </a>
      </motion.div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-16 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-xl font-bold text-brand-dark mb-6">
          연락처를 입력해주세요
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="flex flex-col gap-5">
            {/* 이름 */}
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                {...register('name')}
                placeholder="홍길동"
                className={[
                  'w-full px-4 py-3 border text-sm outline-none transition-colors rounded',
                  errors.name
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-brand-border focus:border-brand-dark',
                ].join(' ')}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* 연락처 */}
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">
                연락처 <span className="text-red-500">*</span>
              </label>
              <input
                {...register('phone')}
                placeholder="010-1234-5678"
                className={[
                  'w-full px-4 py-3 border text-sm outline-none transition-colors rounded',
                  errors.phone
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-brand-border focus:border-brand-dark',
                ].join(' ')}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
              )}
            </div>

            {/* 이메일 */}
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">
                이메일 <span className="text-red-500">*</span>
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="example@email.com"
                className={[
                  'w-full px-4 py-3 border text-sm outline-none transition-colors rounded',
                  errors.email
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-brand-border focus:border-brand-dark',
                ].join(' ')}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* 문의 내용 */}
            <div>
              <label className="block text-sm font-medium text-brand-dark mb-1">
                문의 내용 <span className="text-red-500">*</span>
              </label>
              <textarea
                {...register('message')}
                rows={4}
                placeholder="궁금하신 내용을 자유롭게 작성해주세요 (최소 10자)"
                className={[
                  'w-full px-4 py-3 border text-sm outline-none transition-colors resize-none rounded',
                  errors.message
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-brand-border focus:border-brand-dark',
                ].join(' ')}
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>

            {/* 개인정보 동의 */}
            <div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  {...register('privacy')}
                  type="checkbox"
                  className="mt-0.5 accent-brand-dark"
                />
                <span className="text-sm text-brand-gray">
                  개인정보 수집 및 이용에 동의합니다.{' '}
                  <span className="text-red-500">*</span>
                </span>
              </label>
              {errors.privacy && (
                <p className="mt-1 text-xs text-red-500">{errors.privacy.message}</p>
              )}
            </div>

            {/* 제출 오류 메시지 */}
            {submitError && (
              <div className="flex items-center gap-2 px-4 py-3 bg-red-50 border border-red-200 rounded text-sm text-red-600">
                <AlertCircle size={16} className="shrink-0" />
                {submitError}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-4 bg-brand-dark text-white font-semibold hover:bg-brand-yellow hover:text-brand-dark transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2 rounded-full mt-2"
            >
              {submitting && <Loader2 size={18} className="animate-spin" />}
              {submitting ? '전송 중...' : '문의하기'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
