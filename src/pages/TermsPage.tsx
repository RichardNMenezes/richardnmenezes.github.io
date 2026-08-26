import { useLayoutEffect } from 'react'
import {
  Link,
  Navigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import type { ProjectSlug } from '../data/projects'
import {
  getTerms,
  getTermsLocaleIds,
  isValidTermsSlug,
  resolveTermsLocale,
} from '../data/terms'
import {
  langNavAriaForLocale,
  langNavLabelForLocale,
  lastUpdatedLabelForLocale,
  privacyLangButtonLabel,
} from '../data/privacy'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'

function ArrowBack () {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M19 12H5M12 19l-7-7 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function termsPath (slug: string, locale: string): string {
  if (locale === 'pt-BR') return `/terms/${slug}`
  return `/terms/${slug}?lang=${encodeURIComponent (locale)}`
}

export default function TermsPage () {
  const { slug } = useParams ()
  const [searchParams] = useSearchParams ()
  const rawLang = searchParams.get ('lang')

  const projectSlug =
    slug && isValidTermsSlug (slug) ? (slug as ProjectSlug) : null
  const allowed = projectSlug ? getTermsLocaleIds (projectSlug) : []
  const invalidLang = Boolean (
    rawLang && projectSlug && !allowed.includes (rawLang)
  )
  const locale =
    projectSlug && !invalidLang
      ? resolveTermsLocale (projectSlug, rawLang)
      : 'pt-BR'
  const doc =
    projectSlug && !invalidLang ? getTerms (projectSlug, locale) : undefined

  useLayoutEffect (() => {
    if (!doc) return
    document.documentElement.lang = doc.htmlLang
    document.title = `${doc.title} · ${doc.meta.split ('·')[0]?.trim () ?? slug}`
    return () => {
      document.documentElement.lang = 'pt-BR'
      document.title = 'Richard Menezes · Desenvolvedor Web e Mobile'
    }
  }, [doc, slug])

  if (!slug || !isValidTermsSlug (slug)) {
    return <Navigate to="/" replace />
  }

  if (invalidLang) {
    return <Navigate to={`/terms/${slug}`} replace />
  }

  if (!doc) {
    return <Navigate to="/" replace />
  }

  const langNavAria = langNavAriaForLocale (locale)
  const langNavPrefix = langNavLabelForLocale (locale)
  const lastLbl = lastUpdatedLabelForLocale (locale)

  return (
    <div className="shell">
      <ScrollReveal>
        <div className="nav-row">
          <Link to={`/project/${slug}`} className="back-link">
            <ArrowBack />
            Voltar ao app
          </Link>
          <Link to="/" className="back-link subtle">
            Portfólio
          </Link>
          <Link to={`/privacy/${slug}`} className="back-link">
            Política de privacidade
          </Link>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.04}>
        <nav className="lang-bar" aria-label={langNavAria}>
          <span className="lang-bar-label">{langNavPrefix}:</span>
          <div className="lang-buttons">
            {allowed.map ((id) => (
              <Link
                key={id}
                to={termsPath (slug, id)}
                className={id === locale ? 'lang-btn lang-btn-active' : 'lang-btn'}
                hrefLang={id}
                lang={id}
              >
                {privacyLangButtonLabel[id] ?? id}
              </Link>
            ))}
          </div>
        </nav>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <header className="terms-head">
          <h1 className="terms-title">{doc.title}</h1>
          <p className="terms-meta">{doc.meta}</p>
        </header>
      </ScrollReveal>

      <ScrollReveal delay={0.07}>
        <p className="terms-intro">{doc.intro}</p>
      </ScrollReveal>

      {doc.sections.map ((sec, i) => (
        <ScrollReveal key={`${locale}-${sec.heading}`} delay={0.08 + i * 0.02}>
          <section className="terms-section">
            <h2>{sec.heading}</h2>
            <p>{sec.body}</p>
          </section>
        </ScrollReveal>
      ))}

      <ScrollReveal delay={0.2}>
        <footer className="terms-foot">
          <p>
            <strong>{lastLbl}:</strong> {doc.lastUpdated}.
          </p>
        </footer>
      </ScrollReveal>

      <Footer />
      <style>{`
        .shell {
          max-width: 42rem;
          margin: 0 auto;
          padding: 1.5rem 1.25rem 0;
        }
        .nav-row {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem 1.5rem;
          margin-bottom: 1.25rem;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.9rem;
          color: var(--muted);
          transition: color 0.2s ease;
        }
        .back-link:hover {
          color: var(--heading);
        }
        .back-link.subtle {
          margin-left: auto;
        }
        .lang-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.65rem 1rem;
          margin-bottom: 1.75rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border);
        }
        .lang-bar-label {
          font-size: 0.875rem;
          color: var(--muted);
          flex-shrink: 0;
        }
        .lang-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .lang-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.45rem 0.9rem;
          font-size: 0.8125rem;
          font-weight: 600;
          border-radius: 10px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text);
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            opacity 0.15s ease,
            transform 0.15s ease;
        }
        .lang-btn:hover {
          border-color: rgba(96, 165, 250, 0.35);
          opacity: 0.95;
          transform: translateY(-1px);
        }
        .lang-btn-active {
          border-color: transparent;
          color: #fff;
          background: linear-gradient(
            135deg,
            var(--gradient-start),
            var(--gradient-end)
          );
          box-shadow: 0 6px 22px rgba(99, 102, 241, 0.32);
        }
        .terms-head {
          margin-bottom: 1rem;
        }
        .terms-title {
          margin: 0;
          font-size: 1.65rem;
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text);
        }
        .terms-meta {
          margin: 0.5rem 0 0;
          font-size: 0.9rem;
          color: var(--muted);
        }
        .terms-intro {
          margin: 0 0 1.5rem;
          color: var(--text);
          font-size: 0.98rem;
        }
        .terms-section h2 {
          margin: 1.5rem 0 0.5rem;
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--heading);
        }
        .terms-section p {
          margin: 0;
          color: var(--muted);
          font-size: 0.95rem;
        }
        .terms-foot {
          margin: 2.5rem 0 0;
          font-size: 0.875rem;
          color: var(--muted);
        }
        .terms-foot strong {
          color: var(--text);
        }
        @media (max-width: 520px) {
          .back-link.subtle {
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  )
}
