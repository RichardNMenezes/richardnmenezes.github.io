import { Link, Navigate, useParams } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects'
import Footer from '../components/Footer'
import ScrollReveal from '../components/ScrollReveal'
import StoreBadges from '../components/StoreBadges'

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

export default function ProjectPage () {
  const { slug } = useParams ()
  const project = slug ? getProjectBySlug (slug) : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="shell">
      <ScrollReveal>
        <Link to="/" className="back-link">
          <ArrowBack />
          Voltar ao portfólio
        </Link>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <h1 className="project-hero-title">{project.title}</h1>
      </ScrollReveal>

      <ScrollReveal delay={0.08}>
        <section className="block" aria-labelledby="desc-heading">
          <h2 id="desc-heading" className="block-title">
            Descrição
          </h2>
          <p className="block-p">{project.description}</p>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.1}>
        <section className="block" aria-labelledby="features-heading">
          <h2 id="features-heading" className="block-title">
            Funcionalidades
          </h2>
          <ul className="feature-list">
            {project.features.map ((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={0.11}>
        <StoreBadges
          appName={project.title}
          appStoreUrl={project.appStoreUrl}
          playStoreUrl={project.playStoreUrl}
        />
      </ScrollReveal>

      <ScrollReveal delay={0.12}>
        <div className="privacy-cta-wrap">
          <Link to={`/privacy/${project.slug}`} className="btn-privacy">
            Ver política de privacidade
          </Link>
        </div>
      </ScrollReveal>

      <Footer />
      <style>{`
        .shell {
          max-width: 720px;
          margin: 0 auto;
          padding: 1.5rem 1.25rem 0;
        }
        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.9rem;
          color: var(--muted);
          margin-bottom: 2rem;
          transition: color 0.2s ease;
        }
        .back-link:hover {
          color: var(--heading);
        }
        .project-hero-title {
          margin: 0 0 2rem;
          font-size: clamp(2rem, 5vw, 2.75rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.1;
          background: linear-gradient(
            135deg,
            #60a5fa,
            var(--gradient-start),
            var(--gradient-end)
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .block {
          margin-bottom: 2.25rem;
        }
        .block-title {
          margin: 0 0 0.85rem;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text);
        }
        .block-p {
          margin: 0;
          color: var(--text);
          font-size: 0.98rem;
        }
        .feature-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .feature-list li {
          position: relative;
          padding-left: 1.35rem;
          margin-bottom: 0.65rem;
          color: var(--muted);
          font-size: 0.95rem;
        }
        .feature-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.5rem;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            var(--gradient-start),
            var(--gradient-end)
          );
        }
        .privacy-cta-wrap {
          margin: 2rem 0 1rem;
        }
        .btn-privacy {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.35rem;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(
            135deg,
            var(--gradient-start),
            var(--gradient-end)
          );
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 28px rgba(99, 102, 241, 0.3);
          transition:
            opacity 0.2s ease,
            transform 0.15s ease;
        }
        .btn-privacy:hover {
          opacity: 0.95;
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  )
}
