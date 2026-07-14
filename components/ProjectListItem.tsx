import Link from 'next/link'
import type { Project } from '@/lib/projects'
import { Badge } from './ui'

export function ProjectListItem({ project }: { project: Project }) {
  return (
    <Link
      className="group block px-6 py-5 transition hover:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-signal"
      href={`/projects/${project.slug}`}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between">
        <div className="max-w-2xl">
          <h3 className="font-heading text-lg font-semibold text-white transition group-hover:text-signal">{project.title}</h3>
          <p className="mt-1 text-sm leading-6 text-slate-400">{project.summary}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </div>
    </Link>
  )
}
