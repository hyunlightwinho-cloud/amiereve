import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          backgroundColor: '#FEE500',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 22,
          fontWeight: 900,
          color: '#1A1A1A',
          fontFamily: 'sans-serif',
        }}
      >
        A
      </div>
    ),
    { width: 32, height: 32 }
  )
}
