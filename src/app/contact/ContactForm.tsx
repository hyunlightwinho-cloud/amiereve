'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { DayPicker } from 'react-day-picker'
import { format } from 'date-fns'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2, Check, AlertCircle } from 'lucide-react'
import 'react-day-picker/dist/style.css'

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

// ─── Constants ────────────────────────────────────────────────────────────────
const SERVICE_LIST = [
  '인플루언서·유튜브 브랜딩',
  '소상공인 SNS 교육',
  '광고대행',
  'AI 마케팅 서비스',
  '유튜브 최적화',
  '기타 상담',
]

const TIME_SLOTS = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00']

const DISABLED_DAYS = [
  { before: new Date() },
  { dayOfWeek: [0] },
]

// ─── Step indicator ───────────────────────────────────────────────────────────
function StepIndicator({ current }: { current: number }) {
  const steps = ['서비스 선택', '일정 선택', '정보 입력']
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {steps.map((label, i) => {
        const idx = i + 1
        const done = idx < current
        const active = idx === current
        return (
          <div key={idx} className="flex items-center">
            <div className="flex flex-col items-center gap-1">
              <div
                className={[
                  'w-9 h-9 flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 rounded-lg',
                  done
                    ? 'bg-brand-yellow border-brand-yellow text-brand-dark'
                    : active
                    ? 'bg-white border-brand-yellow text-brand-dark'
                    : 'bg-white border-brand-border text-brand-gray',
                ].join(' ')}
              >
                {done ? <Check size={16} strokeWidth={3} /> : idx}
              </div>
              <span
                className={[
                  'text-xs font-medium',
                  active ? 'text-brand-dark' : 'text-brand-gray',
                ].join(' ')}
              >
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="w-10 sm:w-16 h-0.5 mb-5 mx-1 bg-brand-border relative overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-brand-yellow"
                  initial={{ width: 0 }}
                  animate={{ width: done ? '100%' : '0%' }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                />
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ContactForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    services: [] as string[],
    date: undefined as Date | undefined,
    time: '' as string,
  })
  const [bookedTimes, setBookedTimes] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [step2Error, setStep2Error] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onBlur',
  })

  // 날짜 선택 시 예약된 시간 조회
  useEffect(() => {
    if (!formData.date) return
    const dateStr = format(formData.date, 'yyyy-MM-dd')
    fetch(`/api/contact?date=${dateStr}`)
      .then((r) => r.json())
      .then((d: { bookedTimes: string[] }) => setBookedTimes(d.bookedTimes ?? []))
      .catch(() => setBookedTimes([]))
  }, [formData.date])

  // ── Step 1: 서비스 선택 ──────────────────────────────────────────────────
  const toggleService = (s: string) =>
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(s)
        ? prev.services.filter((x) => x !== s)
        : [...prev.services, s],
    }))

  // ── Step 2: 다음으로 진행 ─────────────────────────────────────────────────
  const handleStep2Next = () => {
    if (!formData.date) {
      setStep2Error('날짜를 선택해주세요')
      return
    }
    if (!formData.time) {
      setStep2Error('시간을 선택해주세요')
      return
    }
    setStep2Error(null)
    setStep(3)
  }

  // ── Step 3: 제출 ─────────────────────────────────────────────────────────
  const onSubmit = async (values: FormValues) => {
    setSubmitting(true)
    setSubmitError(null)
    try {
      const payload = {
        ...values,
        service_type: formData.services,
        date: formData.date ? format(formData.date, 'yyyy-MM-dd') : undefined,
        time: formData.time || undefined,
      }
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
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
          예약이 접수되었습니다
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
      <StepIndicator current={step} />

      <AnimatePresence mode="wait">
        {/* ── STEP 1 ── */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold text-brand-dark mb-6">
              어떤 서비스가 필요하신가요?
            </h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {SERVICE_LIST.map((s) => {
                const selected = formData.services.includes(s)
                return (
                  <motion.button
                    key={s}
                    type="button"
                    onClick={() => toggleService(s)}
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className={[
                      'px-4 py-3 text-sm font-medium border transition-colors duration-200 cursor-pointer rounded-full',
                      selected
                        ? 'bg-brand-dark text-white border-brand-dark shadow-lg'
                        : 'bg-white text-brand-dark border-brand-border hover:border-brand-dark hover:shadow-md',
                    ].join(' ')}
                  >
                    {s}
                  </motion.button>
                )
              })}
            </div>
            <motion.button
              type="button"
              disabled={formData.services.length === 0}
              onClick={() => setStep(2)}
              whileTap={formData.services.length > 0 ? { scale: 0.97 } : {}}
              whileHover={formData.services.length > 0 ? { y: -2 } : {}}
              transition={{ duration: 0.15 }}
              className={[
                'w-full py-4 font-semibold transition-all duration-200 rounded-full',
                formData.services.length > 0
                  ? 'bg-brand-dark text-white hover:bg-brand-yellow hover:text-brand-dark cursor-pointer'
                  : 'bg-brand-border text-brand-gray cursor-not-allowed',
              ].join(' ')}
            >
              다음
            </motion.button>
          </motion.div>
        )}

        {/* ── STEP 2 ── */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-xl font-bold text-brand-dark mb-6">
              상담 일정을 선택해주세요
            </h2>
            <div className="flex justify-center mb-6 overflow-x-auto">
              <DayPicker
                mode="single"
                selected={formData.date}
                onSelect={(d) => {
                  setFormData((prev) => ({ ...prev, date: d ?? undefined, time: '' }))
                  setStep2Error(null)
                }}
                disabled={DISABLED_DAYS}
                fromMonth={new Date()}
              />
            </div>

            {formData.date && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-sm font-semibold text-brand-dark mb-3">
                  시간 선택
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {TIME_SLOTS.map((t) => {
                    const booked = bookedTimes.includes(t)
                    const selected = formData.time === t
                    return (
                      <motion.button
                        key={t}
                        type="button"
                        disabled={booked}
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, time: t }))
                          setStep2Error(null)
                        }}
                        whileHover={booked ? {} : { y: -2, scale: 1.04 }}
                        whileTap={booked ? {} : { scale: 0.93 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className={[
                          'py-3 text-sm font-medium border transition-colors duration-200 rounded-xl',
                          booked
                            ? 'bg-brand-light text-brand-gray border-brand-border cursor-not-allowed line-through'
                            : selected
                            ? 'bg-brand-dark text-white border-brand-dark cursor-pointer shadow-lg'
                            : 'bg-white text-brand-dark border-brand-border hover:border-brand-dark hover:shadow-md cursor-pointer',
                        ].join(' ')}
                      >
                        {t}
                      </motion.button>
                    )
                  })}
                </div>
              </motion.div>
            )}

            {step2Error && (
              <p className="flex items-center gap-1.5 text-sm text-red-500 mb-4">
                <AlertCircle size={14} />
                {step2Error}
              </p>
            )}

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 py-4 border border-brand-border text-brand-dark font-semibold hover:bg-brand-light transition-all duration-200 cursor-pointer rounded-full"
              >
                이전
              </button>
              <button
                type="button"
                onClick={handleStep2Next}
                className="flex-1 py-4 bg-brand-dark text-white font-semibold hover:bg-brand-yellow hover:text-brand-dark transition-all duration-200 cursor-pointer rounded-full"
              >
                다음
              </button>
            </div>
          </motion.div>
        )}

        {/* ── STEP 3 ── */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
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

                <div className="flex gap-3 mt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 py-4 border border-brand-border text-brand-dark font-semibold hover:bg-brand-light transition-all duration-200 cursor-pointer rounded-full"
                  >
                    이전
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 py-4 bg-brand-dark text-white font-semibold hover:bg-brand-yellow hover:text-brand-dark transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2 rounded"
                  >
                    {submitting && <Loader2 size={18} className="animate-spin" />}
                    {submitting ? '전송 중...' : '상담 신청하기'}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
