'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Chip {
  label: string;
  bg: string;
  color: string;
  border: string;
}

interface ServiceItem {
  num: string;
  cat: string;
  title: string;
  desc: string;
  chips: Chip[];
  linkColor: string;
  floatDuration: number;
  phoneMockup: React.ReactNode;
  badge?: React.ReactNode;
}

function PhoneFrame({
  title,
  duration,
  children,
}: {
  title: string;
  duration: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'relative', width: 280, filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.22))' }}
    >
      {/* Volume buttons (left) */}
      <div style={{ position: 'absolute', left: -4, top: 96, width: 4, height: 28, background: 'linear-gradient(to right, #1a1a1a, #3a3a3a)', borderRadius: '4px 0 0 4px' }} />
      <div style={{ position: 'absolute', left: -4, top: 136, width: 4, height: 28, background: 'linear-gradient(to right, #1a1a1a, #3a3a3a)', borderRadius: '4px 0 0 4px' }} />
      {/* Power button (right) */}
      <div style={{ position: 'absolute', right: -4, top: 116, width: 4, height: 44, background: 'linear-gradient(to left, #1a1a1a, #3a3a3a)', borderRadius: '0 4px 4px 0' }} />

      {/* Phone shell */}
      <div style={{
        background: 'linear-gradient(160deg, #2c2c2e, #1c1c1e)',
        borderRadius: 52,
        padding: 4,
        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.14)',
      }}>
        {/* Inner bezel */}
        <div style={{ background: '#000', borderRadius: 48, padding: 2 }}>
          {/* Screen */}
          <div style={{ background: 'white', borderRadius: 46, overflow: 'hidden', position: 'relative' }}>

            {/* Status bar */}
            <div style={{
              background: '#F8F9FD',
              height: 48,
              position: 'relative',
            }}>
              {/* Dynamic Island */}
              <div style={{
                position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)',
                width: 104, height: 27, background: '#000', borderRadius: 26, zIndex: 2,
              }} />
              {/* Time — far left */}
              <span style={{
                position: 'absolute', left: 18, bottom: 7,
                fontSize: 11.5, fontWeight: 700, color: '#111',
                fontFamily: '-apple-system, system-ui, sans-serif', zIndex: 3,
              }}>9:41</span>
              {/* Status icons — far right */}
              <div style={{
                position: 'absolute', right: 14, bottom: 7,
                display: 'flex', gap: 5, alignItems: 'center', zIndex: 3,
              }}>
                <svg width="16" height="11" viewBox="0 0 16 11">
                  <rect x="0" y="7" width="2.8" height="4" rx="0.6" fill="#111"/>
                  <rect x="4" y="4.5" width="2.8" height="6.5" rx="0.6" fill="#111"/>
                  <rect x="8" y="2" width="2.8" height="9" rx="0.6" fill="#111"/>
                  <rect x="12" y="0" width="2.8" height="11" rx="0.6" fill="#111"/>
                </svg>
                <svg width="15" height="11" viewBox="0 0 15 11">
                  <circle cx="7.5" cy="9.5" r="1" fill="#111"/>
                  <path d="M4 7Q7.5 4 11 7" fill="none" stroke="#111" strokeWidth="1.2" strokeLinecap="round"/>
                  <path d="M1 4.5Q7.5 -0.5 14 4.5" fill="none" stroke="#111" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                <div style={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <div style={{ width: 22, height: 11, border: '1.5px solid #111', borderRadius: 3, padding: '1.5px' }}>
                    <div style={{ width: '78%', height: '100%', background: '#111', borderRadius: 1.5 }} />
                  </div>
                  <div style={{ width: 2, height: 6, background: '#111', borderRadius: 1, opacity: 0.6 }} />
                </div>
              </div>
            </div>

            {/* App title bar */}
            <div style={{
              background: '#F8F9FD',
              borderBottom: '1px solid #EEF0F8',
              padding: '5px 16px 9px',
              textAlign: 'center',
            }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#374151' }}>{title}</span>
            </div>

            {/* Content */}
            <div style={{ padding: 15 }}>{children}</div>

            {/* Home indicator */}
            <div style={{ display: 'flex', justifyContent: 'center', padding: '5px 0 11px' }}>
              <div style={{ width: 118, height: 4.5, background: '#000', borderRadius: 3, opacity: 0.17 }} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AdPhone() {
  const platforms = [
    { label: 'N', bg: '#03C75A', color: '#fff' },
    { label: 'K', bg: '#FEE500', color: '#111' },
    { label: 'M', bg: '#1877F2', color: '#fff' },
    { label: 'YT', bg: '#FF0000', color: '#fff' },
  ];
  const kpis = [
    { label: '노출수', value: '12.4만', delta: '▲ 23%', good: true },
    { label: '클릭률', value: '3.2%', delta: '▲ 0.8%p', good: true },
    { label: '전환수', value: '847', delta: '▲ 18%', good: true },
    { label: 'ROAS', value: '385%', delta: '▲ 42%p', good: true },
  ];
  const barHeights = [28, 40, 34, 52, 60, 70, 82];
  const days = ['월', '화', '수', '목', '금', '토', '일'];

  return (
    <PhoneFrame title="캠페인 성과" duration={4}>
      {/* Platform pills */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
        {platforms.map((p) => (
          <div key={p.label} style={{
            flex: 1, background: p.bg, color: p.color,
            borderRadius: 8, padding: '6px 0',
            textAlign: 'center', fontSize: 10, fontWeight: 800,
          }}>{p.label}</div>
        ))}
      </div>
      {/* KPI grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 7, marginBottom: 12 }}>
        {kpis.map((k) => (
          <div key={k.label} style={{ background: '#0D0D1F', borderRadius: 11, padding: '10px 11px' }}>
            <div style={{ fontSize: 9, color: '#6B6B9A', marginBottom: 3 }}>{k.label}</div>
            <div style={{ fontSize: 17, fontWeight: 800, color: '#FEE500', lineHeight: 1.1 }}>{k.value}</div>
            <div style={{ fontSize: 9, color: '#34D399', marginTop: 2 }}>{k.delta}</div>
          </div>
        ))}
      </div>
      {/* Bar chart */}
      <div style={{ background: '#F3F4F6', borderRadius: 11, padding: '10px 11px' }}>
        <div style={{ fontSize: 9, color: '#9CA3AF', marginBottom: 8, fontWeight: 600 }}>주간 클릭 추이</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 58 }}>
          {barHeights.map((h, i) => (
            <div key={i} style={{
              flex: 1, height: h,
              background: i === 6 ? '#4F46E5' : i >= 4 ? '#818CF8' : '#C7D2FE',
              borderRadius: '3px 3px 0 0',
              transition: 'height 0.3s',
            }} />
          ))}
        </div>
        <div style={{ display: 'flex', marginTop: 5 }}>
          {days.map((d) => (
            <span key={d} style={{ flex: 1, fontSize: 8, color: '#9CA3AF', textAlign: 'center' }}>{d}</span>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

function BrandPhone() {
  const swatches = [
    { flex: 2, bg: '#111827' },
    { flex: 1.5, bg: '#EC4899' },
    { flex: 1.5, bg: '#8B5CF6' },
    { flex: 1, bg: '#F9FAFB', border: '1px solid #E5E7EB' },
  ];
  const thumbnails = ['#FCE7F3', '#EDE9FE', '#D1FAE5', '#FEF3C7', '#DBEAFE', '#FCE7F3'];

  return (
    <PhoneFrame title="브랜드 가이드" duration={5}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 13 }}>
        <div style={{
          width: 52, height: 52, background: '#111827', borderRadius: 13,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <span style={{ color: 'white', fontSize: 22, fontWeight: 800, fontStyle: 'italic', letterSpacing: -1 }}>A</span>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>아미레브 브랜드</div>
          <div style={{ fontSize: 9, color: '#9CA3AF', marginTop: 2 }}>Brand Identity System</div>
        </div>
      </div>
      <div style={{ fontSize: 9, color: '#9CA3AF', marginBottom: 5, fontWeight: 600 }}>컬러 팔레트</div>
      <div style={{ display: 'flex', gap: 5, marginBottom: 12, height: 22 }}>
        {swatches.map((s, i) => (
          <div key={i} style={{ flex: s.flex, background: s.bg, borderRadius: 5, border: s.border }} />
        ))}
      </div>
      <div style={{ background: '#F8F9FD', borderRadius: 9, padding: '9px 11px', marginBottom: 8 }}>
        <div style={{ fontSize: 13.5, fontWeight: 700, color: '#111827' }}>Brand Aa 브랜드</div>
        <div style={{ fontSize: 8.5, color: '#9CA3AF', marginTop: 2 }}>Pretendard ExtraBold 800</div>
      </div>
      <div style={{ background: '#F8F9FD', borderRadius: 9, padding: '9px 11px', marginBottom: 11 }}>
        <div style={{ fontSize: 12, fontWeight: 400, color: '#374151' }}>Brand body text 본문 텍스트</div>
        <div style={{ fontSize: 8.5, color: '#9CA3AF', marginTop: 2 }}>Pretendard Regular 400</div>
      </div>
      <div style={{ fontSize: 9, color: '#9CA3AF', marginBottom: 6, fontWeight: 600 }}>최근 콘텐츠</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4 }}>
        {thumbnails.map((bg, i) => (
          <div key={i} style={{ background: bg, borderRadius: 7, height: 36 }} />
        ))}
      </div>
    </PhoneFrame>
  );
}

function SmbPhone() {
  const postImages = [
    { bg: '#BFDBFE', inner: { w: 22, h: 22, bg: '#60A5FA', radius: 5 } },
    { bg: '#FDE8D8', inner: { w: 18, h: 18, bg: '#FB923C', radius: '50%' } },
    { bg: '#D1FAE5', inner: { w: 20, h: 20, bg: '#34D399', radius: 4 } },
    { bg: '#FEF9C3', inner: { w: 18, h: 22, bg: '#FBBF24', radius: 4 } },
  ];
  const scheduleColors = ['#D1FAE5', '#F3F4F6', '#D1FAE5', '#F3F4F6', '#10B981', '#F3F4F6', '#D1FAE5'];

  return (
    <PhoneFrame title="SNS 운영현황" duration={4.5}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 11 }}>
        <div style={{
          width: 34, height: 34, borderRadius: '50%',
          background: 'linear-gradient(135deg, #EC4899, #8B5CF6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13, fontWeight: 800, color: 'white', flexShrink: 0,
        }}>A</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#111827' }}>아미레브 고객사</div>
          <div style={{ fontSize: 9, color: '#9CA3AF', marginTop: 1 }}>@amiereve_client</div>
        </div>
        <div style={{ marginLeft: 'auto', fontSize: 9.5, color: '#EC4899', fontWeight: 700, background: '#FDF2F8', padding: '3px 9px', borderRadius: 100 }}>팔로우 중</div>
      </div>
      <div style={{
        height: 110, borderRadius: 10, marginBottom: 11,
        display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 2, overflow: 'hidden',
      }}>
        {postImages.map((p, i) => (
          <div key={i} style={{ background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: p.inner.w, height: p.inner.h, background: p.inner.bg, borderRadius: p.inner.radius }} />
          </div>
        ))}
      </div>
      <div style={{ fontSize: 10, color: '#374151', marginBottom: 8, lineHeight: 1.6 }}>
        오늘의 메뉴 소개 🍽️<br />
        <span style={{ color: '#9CA3AF', fontSize: 9 }}>#소상공인 #맛집 #인스타맛집</span>
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        {[['❤️', '1,284'], ['💬', '38'], ['↗️', '12']].map(([icon, val]) => (
          <div key={val} style={{ fontSize: 9.5, color: '#6B7280', display: 'flex', alignItems: 'center', gap: 3 }}>
            <span>{icon}</span>{val}
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10, background: '#F3F4F6', borderRadius: 4, overflow: 'hidden', height: 5 }}>
        <div style={{ width: '72%', height: '100%', background: 'linear-gradient(to right, #10B981, #34D399)', borderRadius: 4 }} />
      </div>
      <div style={{ fontSize: 8.5, color: '#9CA3AF', marginTop: 4 }}>이번주 도달률 72% · 전주 대비 ▲18%</div>
      <div style={{ fontSize: 9, color: '#9CA3AF', marginTop: 11, marginBottom: 5, fontWeight: 600 }}>이번달 포스팅 일정</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 3 }}>
        {scheduleColors.map((bg, i) => (
          <div key={i} style={{ height: 18, borderRadius: 4, background: bg }} />
        ))}
      </div>
    </PhoneFrame>
  );
}

function AiPhone() {
  const progresses = [
    { label: '콘텐츠 최적화', pct: 92, color: '#4F46E5' },
    { label: '키워드 매칭', pct: 87, color: '#8B5CF6' },
    { label: '트렌드 반응', pct: 96, color: '#4F46E5' },
  ];
  const tags = [
    { text: '#마케팅', bg: '#EDE9FE', color: '#5B21B6' },
    { text: '#광고대행', bg: '#EDE9FE', color: '#5B21B6' },
    { text: '#SNS', bg: '#F3E8FF', color: '#7C3AED' },
    { text: '#브랜딩', bg: '#EDE9FE', color: '#5B21B6' },
    { text: '#AI', bg: '#FDF4FF', color: '#9333EA' },
  ];

  return (
    <PhoneFrame title="AI 분석 리포트" duration={3.8}>
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <div style={{
          width: 80, height: 80, borderRadius: '50%', border: '6px solid #4F46E5',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 7px',
          background: 'linear-gradient(135deg, #F5F3FF, #EEF2FF)',
          boxShadow: '0 0 0 4px rgba(79,70,229,0.12)',
        }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: '#4F46E5', lineHeight: 1 }}>94</div>
          <div style={{ fontSize: 9, color: '#9CA3AF', marginTop: 2 }}>점수</div>
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#111827' }}>브랜드 AI 최적화 지수</div>
        <div style={{ fontSize: 9, color: '#9CA3AF', marginTop: 2 }}>상위 3% 수준</div>
      </div>
      <div style={{ fontSize: 9.5, color: '#9CA3AF', marginBottom: 7, fontWeight: 600 }}>AI 분석 진행률</div>
      {progresses.map((p) => (
        <div key={p.label} style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 7 }}>
          <div style={{ fontSize: 9, color: '#6B7280', width: 64, flexShrink: 0 }}>{p.label}</div>
          <div style={{ flex: 1, background: '#F3F4F6', borderRadius: 4, height: 6, overflow: 'hidden' }}>
            <div style={{ width: `${p.pct}%`, height: '100%', background: p.color, borderRadius: 4 }} />
          </div>
          <div style={{ fontSize: 9, color: '#FEE500', fontWeight: 700, width: 28, textAlign: 'right', background: '#12122A', borderRadius: 4, padding: '1.5px 3px' }}>{p.pct}%</div>
        </div>
      ))}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 10, marginBottom: 10 }}>
        {tags.map((t) => (
          <span key={t.text} style={{ fontSize: 9, padding: '3px 8px', borderRadius: 4, fontWeight: 600, background: t.bg, color: t.color }}>
            {t.text}
          </span>
        ))}
      </div>
      <div style={{ background: '#F8F9FD', borderRadius: 10, padding: 11 }}>
        <div style={{ fontSize: 9.5, color: '#9CA3AF', marginBottom: 7, fontWeight: 600 }}>검색 트렌드 (최근 7일)</div>
        <svg viewBox="0 0 160 52" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 52, display: 'block' }}>
          <polyline points="0,48 22,43 45,35 70,26 98,16 128,8 160,3" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="0,48 22,43 45,35 70,26 98,16 128,8 160,3 160,52 0,52" fill="#EEF2FF" stroke="none" />
          <circle cx="160" cy="3" r="3.5" fill="#4F46E5" />
          <circle cx="0" cy="48" r="2.5" fill="#A5B4FC" />
        </svg>
      </div>
    </PhoneFrame>
  );
}

const services: ServiceItem[] = [
  {
    num: '01',
    cat: 'Ad Management',
    title: '데이터 기반\n통합 광고 운영',
    desc: '네이버·카카오·메타·유튜브 광고를 하나의 전략으로 통합 관리합니다. 실시간 최적화와 정밀 타겟팅으로 ROAS를 극대화합니다.',
    chips: [
      { label: '네이버 광고', bg: '#EEF2FF', color: '#4F46E5', border: '#C7D2FE' },
      { label: '카카오 광고', bg: '#EEF2FF', color: '#4F46E5', border: '#C7D2FE' },
      { label: '메타 광고', bg: '#EEF2FF', color: '#4F46E5', border: '#C7D2FE' },
      { label: '유튜브', bg: '#EEF2FF', color: '#4F46E5', border: '#C7D2FE' },
    ],
    linkColor: '#4F46E5',
    floatDuration: 4,
    phoneMockup: <AdPhone />,
  },
  {
    num: '02',
    cat: 'Branding & Content',
    title: '브랜드 아이덴티티\n& 콘텐츠 전략',
    desc: '로고·컬러·타이포 가이드라인 설계부터 SNS 콘텐츠·영상 전략까지. 일관된 크리에이티브로 브랜드 인지도를 쌓아갑니다.',
    chips: [
      { label: '로고 디자인', bg: '#FDF2F8', color: '#9D174D', border: '#FBCFE8' },
      { label: 'SNS 콘텐츠', bg: '#FDF2F8', color: '#9D174D', border: '#FBCFE8' },
      { label: '영상 편집', bg: '#FDF2F8', color: '#9D174D', border: '#FBCFE8' },
      { label: '브랜드 가이드', bg: '#FDF2F8', color: '#9D174D', border: '#FBCFE8' },
    ],
    linkColor: '#9D174D',
    floatDuration: 5,
    phoneMockup: <BrandPhone />,
  },
  {
    num: '03',
    cat: 'Small Biz Package',
    title: 'SNS 운영 대행\n올스톱 패키지',
    desc: '촬영·편집·포스팅·댓글 관리까지 통째로 맡기세요. 시즌별 최적화 콘텐츠로 팔로워와 매장 방문객을 동시에 늘립니다.',
    chips: [
      { label: '사진·영상 촬영', bg: '#ECFDF5', color: '#065F46', border: '#A7F3D0' },
      { label: 'SNS 운영대행', bg: '#ECFDF5', color: '#065F46', border: '#A7F3D0' },
      { label: '리뷰 관리', bg: '#ECFDF5', color: '#065F46', border: '#A7F3D0' },
    ],
    linkColor: '#065F46',
    floatDuration: 4.5,
    phoneMockup: <SmbPhone />,
  },
  {
    num: '04',
    cat: 'AI Marketing',
    title: 'AI로 앞서가는\n스마트 마케팅',
    desc: 'AI 카피라이팅·이미지 생성·키워드 분석을 통해 콘텐츠 제작 시간을 줄이고, 트렌드 선점 속도를 높여드립니다.',
    chips: [
      { label: 'AI 카피라이팅', bg: '#F5F3FF', color: '#5B21B6', border: '#DDD6FE' },
      { label: '키워드 분석', bg: '#F5F3FF', color: '#5B21B6', border: '#DDD6FE' },
      { label: '자동화', bg: '#F5F3FF', color: '#5B21B6', border: '#DDD6FE' },
      { label: '트렌드 감지', bg: '#F5F3FF', color: '#5B21B6', border: '#DDD6FE' },
    ],
    linkColor: '#5B21B6',
    floatDuration: 3.8,
    phoneMockup: <AiPhone />,
    badge: (
      <span style={{
        display: 'inline-block', marginLeft: 8,
        background: '#6C3FC5', color: 'white',
        fontSize: 10, fontWeight: 700, padding: '2px 10px',
        borderRadius: 100, verticalAlign: 'middle',
        animation: 'pulse 2s ease-in-out infinite',
      }}>
        NEW 2026
      </span>
    ),
  },
];

const TOTAL_PAGES = 2;
const TOTAL_SLIDES = services.length;

const slideVariants = {
  enter: (d: number) => ({ x: d > 0 ? '55%' : '-55%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? '-55%' : '55%', opacity: 0 }),
};

/* ─── Helper components ─── */

function NavArrow({
  direction, onClick, disabled, small,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
  small?: boolean;
}) {
  const size = small ? 38 : 46;
  const iconSize = small ? 16 : 19;
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.08, backgroundColor: '#0D1117', color: '#fff' } : {}}
      whileTap={!disabled ? { scale: 0.94 } : {}}
      transition={{ duration: 0.15 }}
      onClick={onClick}
      disabled={disabled}
      style={{
        width: size, height: size, borderRadius: '50%',
        border: `2px solid ${disabled ? '#E4E6F5' : '#0D1117'}`,
        background: 'transparent',
        cursor: disabled ? 'default' : 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: disabled ? '#C8CCDA' : '#0D1117',
        flexShrink: 0, outline: 'none',
        transition: 'border-color 0.2s, background 0.2s, color 0.2s',
      }}
    >
      {direction === 'left'
        ? <ChevronLeft size={iconSize} strokeWidth={2.5} />
        : <ChevronRight size={iconSize} strokeWidth={2.5} />}
    </motion.button>
  );
}

function Dots({ total, current, onClick }: {
  total: number;
  current: number;
  onClick: (i: number) => void;
}) {
  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {Array.from({ length: total }).map((_, i) => (
        <motion.button
          key={i}
          onClick={() => onClick(i)}
          animate={{ width: i === current ? 28 : 8, background: i === current ? '#0D1117' : '#D1D5E0' }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          style={{
            height: 8, borderRadius: 4,
            border: 'none', cursor: 'pointer', padding: 0,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Main export ─── */

export default function ServiceZigzag() {
  const [page, setPage] = useState(0);
  const [mSlide, setMSlide] = useState(0);
  const [dir, setDir] = useState(1);

  const goPage = (next: number) => {
    if (next < 0 || next >= TOTAL_PAGES) return;
    setDir(next > page ? 1 : -1);
    setPage(next);
  };

  const goSlide = (next: number) => {
    if (next < 0 || next >= TOTAL_SLIDES) return;
    setDir(next > mSlide ? 1 : -1);
    setMSlide(next);
  };

  const pageItems = services.slice(page * 2, page * 2 + 2);
  const curSvc = services[mSlide];

  return (
    <section style={{ background: '#F7F8FD', padding: '20px 0 114px', overflow: 'hidden', position: 'relative' }}>

      {/* Dot pattern overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, #d4d4d4 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        opacity: 0.4,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* ── Header ── */}
      <div style={{ textAlign: 'center', marginBottom: 12, padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.28em',
            color: '#A0A8C0', textTransform: 'uppercase', marginBottom: 10,
          }}>
            What We Do
          </div>
          <h2 style={{
            fontSize: 'clamp(1.85rem, 3.2vw, 2.35rem)', fontWeight: 900,
            color: '#0D1117', margin: 0, letterSpacing: '-0.035em', lineHeight: 1.15,
          }}>
            아미레브가 하는 일
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#64748B', marginTop: 10, fontWeight: 400 }}>
            4대 핵심 서비스로 브랜드 성장을 도와드립니다
          </p>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════
          PC SLIDER  ·  md and above
      ══════════════════════════════════════════════ */}
      <div className="hidden md:block" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 920, margin: '0 auto', padding: '0 28px', position: 'relative' }}>

          {/* Slide area */}
          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={`pc-${page}`}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.52, ease: [0.4, 0, 0.2, 1] }}
              >
                {pageItems.map((svc, idx) => {
                  const isReverse = idx % 2 === 1;
                  return (
                    <div
                      key={svc.num}
                      style={{
                        display: 'flex',
                        flexDirection: isReverse ? 'row-reverse' : 'row',
                        alignItems: 'center',
                        gap: 32,
                        padding: '10px 0',
                        borderBottom: idx < pageItems.length - 1 ? '1px solid #EBEBF3' : 'none',
                      }}
                    >
                      {/* Text */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <span style={{
                          display: 'block', fontSize: 56, fontWeight: 900,
                          color: '#E4E6F5', lineHeight: 0.9, marginBottom: 0,
                          letterSpacing: '-0.04em',
                        }}>{svc.num}</span>
                        <div style={{
                          fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
                          color: '#A0A8C0', textTransform: 'uppercase',
                          marginBottom: 5, marginTop: 4,
                        }}>{svc.cat}</div>
                        <h3 style={{
                          fontSize: 'clamp(1.3rem, 2.1vw, 1.55rem)', fontWeight: 800,
                          color: '#0D1117', marginBottom: 8, lineHeight: 1.25,
                          whiteSpace: 'pre-line', letterSpacing: '-0.03em',
                        }}>
                          {svc.title}{svc.badge}
                        </h3>
                        <p style={{
                          fontSize: '0.87rem', color: '#64748B', lineHeight: 1.75,
                          marginBottom: 10,
                        }}>{svc.desc}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 10 }}>
                          {svc.chips.map((c) => (
                            <span key={c.label} style={{
                              padding: '3px 10px', borderRadius: 100, fontSize: 11,
                              fontWeight: 600, background: c.bg, color: c.color,
                              border: `1px solid ${c.border}`,
                            }}>{c.label}</span>
                          ))}
                        </div>
                        <Link href="/services" style={{
                          fontSize: '0.84rem', fontWeight: 700, color: svc.linkColor,
                          textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4,
                        }}>
                          자세히 보기 →
                        </Link>
                      </div>

                      {/* Phone — zoom 0.62 */}
                      <div style={{ flex: 1.05, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ zoom: 0.62 }}>
                          {svc.phoneMockup}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* PC Navigation bar */}
          <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            gap: 20, marginTop: 18,
          }}>
            <NavArrow direction="left" onClick={() => goPage(page - 1)} disabled={page === 0} />
            <Dots total={TOTAL_PAGES} current={page} onClick={goPage} />
            <NavArrow direction="right" onClick={() => goPage(page + 1)} disabled={page >= TOTAL_PAGES - 1} />
          </div>

          {/* Counter */}
          <p style={{
            textAlign: 'center', marginTop: 8,
            color: '#B0B6C8', fontSize: 11, fontWeight: 700, letterSpacing: '0.18em',
          }}>
            {String(page * 2 + 1).padStart(2, '0')} – {String(page * 2 + 2).padStart(2, '0')} &nbsp;/&nbsp; 04
          </p>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          MOBILE SLIDER  ·  below md
      ══════════════════════════════════════════════ */}
      <div className="md:hidden" style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={`mob-${mSlide}`}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={(_, info) => {
              const threshold = 60;
              if (info.offset.x < -threshold) goSlide(mSlide + 1);
              else if (info.offset.x > threshold) goSlide(mSlide - 1);
            }}
            style={{ cursor: 'grab', userSelect: 'none', WebkitUserSelect: 'none' }}
          >
            {/* Phone left + Info right */}
            <div style={{ display: 'flex', gap: 14, padding: '4px 14px 8px', alignItems: 'center' }}>

              {/* Phone — zoom 0.52, left column */}
              <div style={{ flexShrink: 0, pointerEvents: 'none' }}>
                <div style={{ zoom: 0.52 }}>
                  {curSvc.phoneMockup}
                </div>
              </div>

              {/* Info — right column */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 6 }}>
                  <span style={{
                    fontSize: 28, fontWeight: 900, color: '#E4E6F5', lineHeight: 1,
                    letterSpacing: '-0.04em',
                  }}>{curSvc.num}</span>
                  <div style={{
                    fontSize: 9.5, fontWeight: 700, letterSpacing: '0.18em',
                    color: '#A0A8C0', textTransform: 'uppercase',
                  }}>{curSvc.cat}</div>
                </div>

                <h3 style={{
                  fontSize: '1.05rem', fontWeight: 800, color: '#0D1117',
                  marginBottom: 6, lineHeight: 1.3, whiteSpace: 'pre-line',
                  letterSpacing: '-0.025em',
                }}>
                  {curSvc.title}{curSvc.badge}
                </h3>

                <p style={{
                  fontSize: '0.77rem', color: '#64748B', lineHeight: 1.6, marginBottom: 8,
                  display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                } as React.CSSProperties}>{curSvc.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 8 }}>
                  {curSvc.chips.slice(0, 3).map((c) => (
                    <span key={c.label} style={{
                      padding: '2px 8px', borderRadius: 100, fontSize: 10,
                      fontWeight: 600, background: c.bg, color: c.color,
                      border: `1px solid ${c.border}`,
                    }}>{c.label}</span>
                  ))}
                </div>

                <Link href="/services" style={{
                  fontSize: '0.8rem', fontWeight: 700, color: curSvc.linkColor,
                  textDecoration: 'none',
                }}>
                  자세히 보기 →
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile navigation */}
        <div style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: 14, marginTop: 14, padding: '0 20px',
        }}>
          <NavArrow direction="left" onClick={() => goSlide(mSlide - 1)} disabled={mSlide === 0} small />
          <Dots total={TOTAL_SLIDES} current={mSlide} onClick={goSlide} />
          <NavArrow direction="right" onClick={() => goSlide(mSlide + 1)} disabled={mSlide >= TOTAL_SLIDES - 1} small />
        </div>

        {/* Swipe hint */}
        <p style={{
          textAlign: 'center', marginTop: 8,
          color: '#C8CCDA', fontSize: 11, fontWeight: 500, letterSpacing: '0.05em',
        }}>
          ← 스와이프로 넘기기 →
        </p>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>

      {/* Wave divider — ServiceZigzag → GallerySection (#FEF9E7) */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, overflow: 'hidden', lineHeight: 0, zIndex: 5 }}>
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 100 }}>
          <path d="M0,50 C300,100 900,0 1200,50 L1200,100 L0,100 Z" fill="#FEF9E7"/>
        </svg>
      </div>
    </section>
  );
}
