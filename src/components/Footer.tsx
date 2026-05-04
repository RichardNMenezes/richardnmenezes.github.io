export default function Footer () {
  return (
    <footer className="site-footer">
      <p>© {new Date ().getFullYear ()} Richard Menezes. Todos os direitos reservados.</p>
      <style>{`
        .site-footer {
          margin-top: 4rem;
          padding: 2rem 0 3rem;
          border-top: 1px solid var(--border);
          font-size: 0.8125rem;
          color: var(--muted);
          text-align: center;
        }
        .site-footer p {
          margin: 0;
        }
      `}</style>
    </footer>
  )
}
