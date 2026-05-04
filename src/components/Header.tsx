import ScrollReveal from './ScrollReveal'

export default function Header () {
  return (
    <header className="site-header">
      <ScrollReveal>
        <div className="brand">
          <div className="brand-icon" aria-hidden>
            <span className="brand-code">&lt;/&gt;</span>
          </div>
          <div className="brand-text">
            <h1 className="brand-name">Richard Menezes</h1>
            <p className="brand-tag">
              Desenvolvedor Web e Mobile independente
            </p>
          </div>
        </div>
      </ScrollReveal>
      <style>{`
        .site-header {
          padding: 2.5rem 0 1rem;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .brand-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(
            135deg,
            var(--gradient-start),
            var(--gradient-end)
          );
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 28px rgba(99, 102, 241, 0.35);
        }
        .brand-code {
          color: #fff;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: -0.04em;
        }
        .brand-name {
          margin: 0;
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--text);
        }
        .brand-tag {
          margin: 0.2rem 0 0;
          font-size: 0.95rem;
          color: var(--muted);
        }
      `}</style>
    </header>
  )
}
