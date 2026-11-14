import { useEffect, useMemo, useState } from 'react'
import { projects, type ProjectCategory } from '../data/content'

type Filter = 'all' | ProjectCategory

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all')

  const visible = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((project) => project.category === filter)
  }, [filter])

  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('#projects .project-card.reveal')
    cards.forEach((card) => card.classList.add('is-in'))
  }, [visible])

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-head reveal">
          <div>
            <p className="eyebrow">Портфолио</p>
            <h2 className="section-title">Проекты</h2>
          </div>
          <div className="filters" role="tablist" aria-label="Фильтр проектов">
            {(
              [
                ['all', 'Все'],
                ['residential', 'Жилые'],
                ['commercial', 'Коммерческие'],
              ] as const
            ).map(([value, label]) => (
              <button
                key={value}
                type="button"
                className={`filter-btn${filter === value ? ' is-active' : ''}`}
                onClick={() => setFilter(value)}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {visible.map((project) => (
            <article key={project.id} className="project-card reveal">
              <div className="project-media">
                <img src={project.image} alt={project.alt} loading="lazy" />
              </div>
              <div className="project-meta">
                <h3>{project.title}</h3>
                <span>{project.type}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
