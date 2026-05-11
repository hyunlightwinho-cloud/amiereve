import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Amie Reve - 브랜드 마케팅 파트너'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1A1A1A',
          fontFamily: 'sans-serif',
          padding: '80px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '12px',
            height: '100%',
            background: '#FEE500',
          }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: 140,
            fontWeight: 900,
            color: '#FEE500',
            letterSpacing: '-4px',
            lineHeight: 1,
            marginBottom: 24,
          }}
        >
          Amie Reve
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 44,
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: 60,
          }}
        >
          아미레브 | 브랜드 마케팅 파트너
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 30,
            color: 'rgba(255,255,255,0.7)',
            fontWeight: 500,
          }}
        >
          광고대행 · AI 마케팅 · 인플루언서 브랜딩
        </div>
      </div>
    ),
    { ...size },
  )
}
