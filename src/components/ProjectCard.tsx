import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

const PLAY_STORE_ICON = '/assets/icon-play-store.webp'

type Props = {
  project: Project
  index: number
}

/** Apenas visual — o card continua a levar à página do projeto */
function CardStoreIcons () {
  return (
    <div className="card-store-icons" aria-hidden>
      <span className="card-store-ic card-store-ic-play">
        <img
          src={PLAY_STORE_ICON}
          alt=""
          width={24}
          height={24}
          className="card-play-img"
          decoding="async"
        />
      </span>
      <span className="card-store-ic card-store-ic-apple">
        <svg viewBox="0 0 24 24" width={22} height={22}>
          <path
            fill="currentColor"
            d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
          />
        </svg>
      </span>
    </div>
  )
}

export default function ProjectCard ({ project, index }: Props) {
  return (
    <motion.article
      className="project-card-wrap"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/project/${project.slug}`} className="project-card">
        <div className="card-accent" aria-hidden />
        <div className="card-inner">
          <div className="card-top">
            <h3 className="card-title">{project.title}</h3>
            <CardStoreIcons />
          </div>
          <p className="card-desc">{project.shortDescription}</p>
          <span className="card-cta">
            Ver detalhes
            <span className="card-cta-arrow" aria-hidden>
              →
            </span>
          </span>
        </div>
      </Link>
      <style>{`
        .project-card-wrap {
          height: 100%;
          min-height: 280px;
        }
        .project-card {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          min-height: 280px;
          padding: 0;
          overflow: hidden;
          border-radius: 18px;
          border: 1px solid rgba(167, 139, 250, 0.28);
          background: linear-gradient(
            155deg,
            rgba(88, 28, 135, 0.55) 0%,
            rgba(49, 46, 129, 0.75) 28%,
            rgba(30, 27, 75, 0.92) 55%,
            rgba(15, 23, 42, 0.65) 100%
          );
          box-shadow:
            0 4px 24px rgba(0, 0, 0, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
          transition:
            border-color 0.28s ease,
            box-shadow 0.28s ease,
            transform 0.25s ease;
        }
        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: radial-gradient(
            ellipse 120% 80% at 100% 0%,
            rgba(99, 102, 241, 0.28) 0%,
            transparent 55%
          );
          pointer-events: none;
        }
        .project-card:hover {
          border-color: rgba(192, 132, 252, 0.55);
          box-shadow:
            0 0 0 1px rgba(139, 92, 246, 0.22),
            0 20px 56px rgba(0, 0, 0, 0.5),
            0 0 100px rgba(99, 102, 241, 0.18);
          transform: translateY(-4px);
        }
        .card-accent {
          position: relative;
          z-index: 1;
          height: 4px;
          width: 100%;
          flex-shrink: 0;
          background: linear-gradient(
            90deg,
            var(--gradient-start),
            #a78bfa,
            var(--gradient-end)
          );
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.45);
        }
        .card-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 0 0 0.25rem;
        }
        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.45rem 1.65rem 0;
        }
        .card-title {
          margin: 0;
          font-size: clamp(1.28rem, 2.5vw, 1.45rem);
          font-weight: 700;
          letter-spacing: -0.035em;
          color: #fafafa;
          text-shadow: 0 1px 18px rgba(99, 102, 241, 0.25);
        }
        .card-store-icons {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-shrink: 0;
          padding: 0.2rem 0.35rem;
          border-radius: 10px;
          background: rgba(15, 23, 42, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.1);
          pointer-events: none;
          transition:
            background 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }
        .project-card:hover .card-store-icons {
          background: rgba(15, 23, 42, 0.65);
          border-color: rgba(196, 181, 253, 0.35);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
        }
        .card-store-ic {
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 0;
        }
        .card-store-ic-apple {
          color: #f5f5f5;
          opacity: 0.95;
          padding-bottom: 0.25rem;
        }
        .card-store-ic-play .card-play-img {
          display: block;
          width: 24px;
          height: 24px;
          object-fit: contain;
        }
        .card-desc {
          margin: 0;
          padding: 1.05rem 1.65rem 1.25rem;
          font-size: 1.02rem;
          color: rgba(226, 232, 240, 0.88);
          flex-grow: 1;
          line-height: 1.62;
        }
        .card-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-top: auto;
          padding: 0.95rem 1.65rem 1.45rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #c4b5fd;
          letter-spacing: 0.03em;
        }
        .project-card:hover .card-cta {
          color: #e9d5ff;
        }
        .card-cta-arrow {
          transition: transform 0.22s ease;
        }
        .project-card:hover .card-cta-arrow {
          transform: translateX(6px);
        }
      `}</style>
    </motion.article>
  )
}
