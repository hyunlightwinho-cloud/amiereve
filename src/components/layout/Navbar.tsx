'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/cases', label: 'Cases' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const isHome = pathname === '/'
  const isTransparent = isHome && !scrolled

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isTransparent ? 'transparent' : 'rgba(255,255,255,0.97)',
          backdropFilter: isTransparent ? 'none' : 'blur(10px)',
          borderBottom: isTransparent ? 'none' : '1px solid rgba(224,224,224,0.8)',
          boxShadow: isTransparent ? 'none' : '0 1px 12px rgba(0,0,0,0.06)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none" style={{ color: isTransparent ? '#fff' : '#1A1A1A' }}>
            <span className="font-extrabold text-lg tracking-widest uppercase">Amie Reve</span>
            <span className="text-[10px] tracking-[0.2em] font-medium" style={{ color: isTransparent ? 'rgba(255,255,255,0.55)' : '#999' }}>아미레브</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium transition-colors duration-200 pb-1"
                style={{ color: isTransparent ? '#fff' : '#1A1A1A' }}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-yellow" />
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-brand-yellow text-brand-dark text-sm font-bold px-5 py-2 hover:bg-brand-yellow-dark transition-colors duration-200 rounded"
            >
              상담 예약
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2.5"
            onClick={() => setMenuOpen(true)}
            aria-label="메뉴 열기"
            style={{ color: isTransparent ? '#fff' : '#1A1A1A' }}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-72 bg-white z-50 flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-brand-border">
                <div className="flex flex-col leading-none">
                  <span className="font-extrabold text-lg tracking-widest uppercase text-brand-dark">Amie Reve</span>
                  <span className="text-[10px] tracking-[0.2em] text-brand-gray">아미레브</span>
                </div>
                <button onClick={() => setMenuOpen(false)} aria-label="메뉴 닫기" className="p-2.5">
                  <X size={24} className="text-brand-dark" />
                </button>
              </div>
              <nav className="flex flex-col p-5 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block py-4 px-4 text-brand-dark font-medium hover:bg-brand-light transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="p-5">
                <Link
                  href="/contact"
                  className="block text-center bg-brand-yellow text-brand-dark font-bold py-4 hover:bg-brand-yellow-dark transition-colors rounded"
                >
                  상담 예약
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
