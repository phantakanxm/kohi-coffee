import { Menu, X } from 'lucide-react'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { navigation } from '../../data/navigation.ts'
import { commonCopy } from '../../content/common.ts'
import { useMediaQuery } from '../../hooks/useMediaQuery.ts'
import { useScrollLock } from '../../hooks/useScrollLock.ts'
import { useScrolled } from '../../hooks/useScrolled.ts'
import { stripLocale } from '../../i18n/locale.ts'
import { useLocale, useLocalize } from '../../i18n/useLocale.ts'
import { cx } from '../../utils/cx.ts'
import { ease } from '../animations/motion.ts'
import { LanguageSwitch } from './LanguageSwitch.tsx'
import { MobileMenu } from './MobileMenu.tsx'
import { Wordmark } from './Wordmark.tsx'

/** Pages whose first section is a full-bleed photograph the header can sit over. */
const overlayRoutes = new Set(['/'])

export function Header() {
  const { pathname } = useLocation()
  const locale = useLocale()
  const localize = useLocalize()
  const t = commonCopy[locale]
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(40)
  const desktop = useMediaQuery('(min-width: 1024px)')
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const overlay = overlayRoutes.has(stripLocale(pathname)) && !scrolled && !open

  useScrollLock(open)

  useEffect(() => {
    setOpen(false)
  }, [pathname, desktop])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (event.key !== 'Tab' || !headerRef.current) return
      // Keep focus inside the header and open menu panel.
      const focusable = Array.from(
        headerRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ).filter((el) => el.offsetParent !== null)
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      ref={headerRef}
      className={cx(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-calm',
        overlay ? 'text-ivory' : 'text-charcoal',
      )}
    >
      <div
        aria-hidden
        className={cx(
          'absolute inset-0 border-b border-line/70 bg-ivory/90 backdrop-blur-md transition-opacity duration-500 ease-calm',
          overlay || open ? 'opacity-0' : 'opacity-100',
        )}
      />

      <div className="shell relative z-10 flex h-(--header-h) items-center justify-between gap-8">
        <Wordmark />

        <nav aria-label={t.mainNav} className="hidden lg:block">
          <ul className="flex items-center gap-9 xl:gap-11">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={localize(item.to)}
                  end={item.to === '/'}
                  className="relative inline-flex min-h-11 items-center text-[0.875rem] tracking-[0.01em] transition-opacity duration-300 hover:opacity-100 aria-[current=page]:opacity-100 opacity-75"
                >
                  {({ isActive }) => (
                    <>
                      {item.label[locale]}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          aria-hidden
                          className="absolute inset-x-0 bottom-2 h-px bg-current"
                          transition={{ duration: 0.5, ease }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <p className="hidden text-[0.8125rem] tracking-[0.02em] opacity-75 xl:block">{t.headerLocation}</p>
          <span aria-hidden className="hidden h-4 w-px bg-current opacity-25 xl:block" />
          <LanguageSwitch />

          <button
            ref={toggleRef}
            type="button"
            className="-mr-2 inline-flex size-11 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
          {open ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
          </button>
        </div>
      </div>

      <MobileMenu open={open} onNavigate={() => setOpen(false)} />
    </header>
  )
}
