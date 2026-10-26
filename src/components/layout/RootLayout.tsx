import { MotionConfig, motion } from 'motion/react'
import { useEffect, useRef } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import { commonCopy } from '../../content/common.ts'
import { useLocale } from '../../i18n/useLocale.ts'
import { ease } from '../animations/motion.ts'
import { Header } from '../navigation/Header.tsx'
import { Footer } from './Footer.tsx'

export function RootLayout() {
  const { pathname } = useLocation()
  const locale = useLocale()
  const mainRef = useRef<HTMLElement>(null)
  const firstRender = useRef(true)

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  // Move focus to the new page so keyboard and screen-reader users start at the top.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only z-[60] rounded-[2px] bg-charcoal px-4 py-3 text-[0.875rem] text-ivory focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {commonCopy[locale].skipLink}
      </a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1} className="outline-none">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
      {/* Every fresh document load has key "default"; key those by path so a new URL starts at the top. */}
      <ScrollRestoration getKey={(location) => (location.key === 'default' ? location.pathname : location.key)} />
    </MotionConfig>
  )
}
