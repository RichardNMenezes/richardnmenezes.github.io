const PLAY_STORE_ICON = '/assets/icon-play-store.webp'

function IconPlayStoreImg () {
  return (
    <img
      src={PLAY_STORE_ICON}
      alt=""
      width={22}
      height={22}
      className="store-ic store-play-img"
      decoding="async"
    />
  )
}

type Props = {
  appStoreUrl: string | null
  playStoreUrl: string | null
  appName: string
}

function IconAppStore () {
  return (
    <svg className="store-ic" viewBox="0 0 24 24" aria-hidden width={22} height={22}>
      <path
        fill="currentColor"
        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
      />
    </svg>
  )
}

export default function StoreBadges ({
  appStoreUrl,
  playStoreUrl,
  appName,
}: Props) {
  const playDisabled = playStoreUrl == null
  const appDisabled = appStoreUrl == null

  return (
    <div className="store-badges">
      <p className="store-badges-title">Baixar</p>
      <div className="store-badges-row">
        {appDisabled ? (
          <span
            className="store-badge store-badge-disabled"
            title="Em breve na App Store"
            aria-label={`${appName}: App Store em breve`}
          >
            <IconAppStore />
            <span className="store-badge-text">
              <span className="store-badge-small">Download na</span>
              <span className="store-badge-strong">App Store</span>
            </span>
          </span>
        ) : (
          <a
            className="store-badge"
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${appName} na App Store — abre em novo separador`}
          >
            <IconAppStore />
            <span className="store-badge-text">
              <span className="store-badge-small">Download na</span>
              <span className="store-badge-strong">App Store</span>
            </span>
          </a>
        )}

        {playDisabled ? (
          <span
            className="store-badge store-badge-disabled"
            title="Em breve na Google Play"
            aria-label={`${appName}: Google Play em breve`}
          >
            <IconPlayStoreImg />
            <span className="store-badge-text">
              <span className="store-badge-small">Disponível no</span>
              <span className="store-badge-strong">Google Play</span>
            </span>
          </span>
        ) : (
          <a
            className="store-badge"
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${appName} na Google Play — abre em novo separador`}
          >
            <IconPlayStoreImg />
            <span className="store-badge-text">
              <span className="store-badge-small">Disponível no</span>
              <span className="store-badge-strong">Google Play</span>
            </span>
          </a>
        )}
      </div>
      {(appDisabled || playDisabled) && (
        <p className="store-badges-hint">
          Lojas desativadas abrem quando o lançamento estiver disponível.
        </p>
      )}
      <style>{`
        .store-badges {
          margin-bottom: 2rem;
        }
        .store-badges-title {
          margin: 0 0 0.85rem;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text);
        }
        .store-badges-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          align-items: stretch;
        }
        .store-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.55rem 1rem;
          min-height: 48px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--bg-card);
          color: #fff;
          text-decoration: none;
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            transform 0.15s ease;
        }
        .store-badge:not(.store-badge-disabled):hover {
          border-color: rgba(96, 165, 250, 0.45);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
          transform: translateY(-1px);
        }
        .store-badge-disabled {
          opacity: 0.42;
          cursor: not-allowed;
        }
        .store-ic {
          flex-shrink: 0;
        }
        .store-play-img {
          display: block;
          object-fit: contain;
        }
        .store-badge-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.15;
          text-align: left;
        }
        .store-badge-small {
          font-size: 0.65rem;
          font-weight: 500;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .store-badge-strong {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text);
        }
        .store-badges-hint {
          margin: 0.65rem 0 0;
          font-size: 0.8rem;
          color: var(--muted);
        }
      `}</style>
    </div>
  )
}
