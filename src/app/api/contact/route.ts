import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { supabase } from '@/lib/supabase'

const schema = z.object({
  name: z.string().min(2),
  phone: z.string(),
  email: z.string().email(),
  service: z.array(z.string()),
  scheduledDate: z.string().optional(),
  scheduledTime: z.string().optional(),
  message: z.string().min(10),
  privacy: z.boolean(),
})

export async function POST(req: NextRequest) {
  const body = await req.json()
  const result = schema.safeParse(body)
  if (!result.success) return NextResponse.json({ error: result.error }, { status: 400 })

  if (supabase) {
    const { error } = await supabase.from('reservations').insert({
      name: result.data.name,
      phone: result.data.phone,
      email: result.data.email,
      service: result.data.service,
      scheduled_date: result.data.scheduledDate,
      scheduled_time: result.data.scheduledTime,
      message: result.data.message,
    })
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  } else {
    console.log('[Contact] 예약 데이터:', result.data)
  }

  return NextResponse.json({ success: true })
}

export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get('date')
  if (!date || !supabase) return NextResponse.json({ bookedTimes: [] })

  const { data } = await supabase
    .from('reservations')
    .select('scheduled_time')
    .eq('scheduled_date', date)
    .eq('status', 'confirmed')

  return NextResponse.json({ bookedTimes: data?.map((r: { scheduled_time: string }) => r.scheduled_time) ?? [] })
}
