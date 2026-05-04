import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

type Props = {
  project: Project
  index: number
}

function ExternalGlyph () {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
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
        <div className="card-top">
          <h3 className="card-title">{project.title}</h3>
          <span className="card-icon" aria-hidden>
            <ExternalGlyph />
          </span>
        </div>
        <p className="card-desc">{project.shortDescription}</p>
        <ul className="card-tags">
          {project.tags.map ((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Link>
      <style>{`
        .project-card-wrap {
          height: 100%;
        }
        .project-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          padding: 1.25rem 1.35rem;
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            transform 0.2s ease;
        }
        .project-card:hover {
          border-color: rgba(96, 165, 250, 0.45);
          box-shadow: 0 0 0 1px rgba(96, 165, 250, 0.2),
            0 12px 40px rgba(0, 0, 0, 0.35);
          transform: translateY(-2px);
        }
        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 0.75rem;
        }
        .card-title {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text);
        }
        .card-icon {
          color: var(--muted);
          flex-shrink: 0;
          opacity: 0.85;
        }
        .card-desc {
          margin: 0.75rem 0 1rem;
          font-size: 0.9rem;
          color: var(--muted);
          flex-grow: 1;
          line-height: 1.5;
        }
        .card-tags {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .card-tags li {
          font-size: 0.75rem;
          padding: 0.28rem 0.65rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          color: var(--text);
          border: 1px solid var(--border);
        }
      `}</style>
    </motion.article>
  )
}
