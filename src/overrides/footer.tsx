import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

const FOOTER_LINKS = [
  { label: 'Home',        href: '/' },
  { label: 'Latest News', href: '/updates' },
  { label: 'About Us',    href: '/about' },
  { label: 'Contact',     href: '/contact' },
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy',   href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
]

const CATEGORIES = [
  { name: 'Business',      slug: 'business' },
  { name: 'Technology',    slug: 'technology' },
  { name: 'Science',       slug: 'science' },
  { name: 'Entertainment', slug: 'entertainment' },
  { name: 'Industry',      slug: 'industry' },
]

export function FooterOverride() {
  return (
    <footer className="border-t border-slate-200 bg-[#0d3d56] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        {/* ── Top grid ──────────────────────────────────────────────────────── */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-sm leading-relaxed text-slate-300">
              {SITE_CONFIG.description || 'Modern release media distribution built for brands, agencies, and PR teams who need real reach — fast.'}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#5dd6f5]">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#5dd6f5]">
              Categories
            </h3>
            <ul className="space-y-2.5">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/updates?category=${cat.slug}`}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + CTA */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#5dd6f5]">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-[#f05a28] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#d44a1e] transition-colors shadow-md"
              >
                Submit Release →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────────────────────── */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
