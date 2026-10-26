import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router'
import { navigation } from '../../data/navigation.ts'
import { site } from '../../data/site.ts'
import { commonCopy } from '../../content/common.ts'
import { useLocale, useLocalize } from '../../i18n/useLocale.ts'
import { ease } from '../animations/motion.ts'

interface MobileMenuProps {
  open: boolean
  onNavigate: () => void
}

export function MobileMenu({ open, onNavigate }: MobileMenuProps) {
  const t = commonCopy[useLocale()]
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t.mobileNav}
          className="fixed inset-0 z-0 overflow-y-auto bg-ivory text-charcoal lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease }}
        >
          <MenuContent onNavigate={onNavigate} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function MenuContent({ onNavigate }: { onNavigate: () => void }) {
  const firstLink = useRef<HTMLAnchorElement>(null)
  const locale = useLocale()
  const localize = useLocalize()

  useEffect(() => {
    firstLink.current?.focus({ preventScroll: true })
  }, [])

  return (
    <div className="shell flex min-h-full flex-col pt-[calc(var(--header-h)+40px)] pb-10">
      <nav aria-label={commonCopy[locale].mobileNav}>
        <ol className="border-t border-line">
          {navigation.map((item, i) => (
            <motion.li
              key={item.to}
              className="border-b border-line"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.08 + i * 0.05 }}
            >
              <NavLink
                ref={i === 0 ? firstLink : undefined}
                to={localize(item.to)}
                end={item.to === '/'}
                onClick={onNavigate}
                className="group flex items-baseline gap-5 py-4 font-display text-[2.5rem] leading-[1.25] font-light aria-[current=page]:italic"
              >
                <span className="label-caps font-sans tabular-nums text-muted">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="nav-label">{item.label[locale]}</span>
              </NavLink>
            </motion.li>
          ))}
        </ol>
      </nav>

      <motion.div
        className="mt-auto pt-14 text-[0.9375rem] text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease, delay: 0.4 }}
      >
        <p className="font-display text-[1.375rem] italic text-charcoal">{site.tagline[locale]}</p>
        <p className="mt-2">{site.location[locale]}</p>
      </motion.div>
    </div>
  )
}
