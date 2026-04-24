import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { supabase } from '@/lib/supabase'

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^01[0-9]-?\d{3,4}-?\d{4}$/),
  email: z.string().email(),
  service_type: z.array(z.string()),
  date: z.string().optional(),
  time: z.string().optional(),
  message: z.string().min(10),
  privacy: z.boolean(),
})

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: '잘못된 요청입니다' }, { status: 400 })
  }

  const result = schema.safeParse(body)
  if (!result.success) {
    return NextResponse.json({ error: '입력값을 확인해주세요', details: result.error.flatten() }, { status: 400 })
  }

  if (supabase) {
    const { error } = await supabase.from('reservations').insert({
      service_type: result.data.service_type,
      date: result.data.date ?? null,
      time: result.data.time ?? null,
      name: result.data.name,
      phone: result.data.phone,
      email: result.data.email,
      message: result.data.message,
      created_at: new Date().toISOString(),
    })
    if (error) {
      console.error('[Contact] Supabase 오류:', error.message)
      return NextResponse.json({ error: '예약 저장 중 오류가 발생했습니다' }, { status: 500 })
    }
  } else {
    console.log('[Contact] 예약 데이터 (Supabase 미설정):', result.data)
  }

  return NextResponse.json({ success: true })
}

export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get('date')
  if (!date) {
    return NextResponse.json({ bookedTimes: [] })
  }

  if (!supabase) {
    return NextResponse.json({ bookedTimes: [] })
  }

  try {
    const { data, error } = await supabase
      .from('reservations')
      .select('time')
      .eq('date', date)

    if (error) {
      console.error('[Contact] GET 오류:', error.message)
      return NextResponse.json({ bookedTimes: [] })
    }

    const bookedTimes = (data ?? [])
      .map((r: { time: string | null }) => r.time)
      .filter((t): t is string => t !== null)

    return NextResponse.json({ bookedTimes })
  } catch {
    return NextResponse.json({ bookedTimes: [] })
  }
}
