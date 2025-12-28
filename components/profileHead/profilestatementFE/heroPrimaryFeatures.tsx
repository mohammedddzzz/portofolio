'use client'

type SkillCardProps = {
  title: string
  description: string
  tags: string[]
}

const skillCards: SkillCardProps[] = [
  {
    title: 'basic web programming',
    description: 'a basic web programming skills using the three basic web programming languages',
    tags: ['HTML', 'CSS', 'javascript'],
  },
  {
    title: 'programming with react and next.js frameworks',
    description: 'developing with react.js inside next.js framework',
    tags: ['react','next.js'],
  },
  {
    title: 'developing with cssTailwind',
    description: 'I use cssTailwind to style my web pages and components, in professional way',
    tags: ['cssTailwind' ],
  },
  {
    title: 'back-end development ',
    description: 'I can do a lot of backend development like database management, API development, application of libraries and more',
    tags: ['mongodb','API development','libraries application' ],
  },
  {
    title: 'I develop with Figma , cssTailwind official library for styling',
    description: 'has the ability to design figma projects and use the official cssTailwind library for styling',
    tags: ['official cssTailwind','Figma'],
  },
  {
    title: 'Backend & APIs',
    description: 'connect to the database and the API to the frontend using multiple database implementations',
    tags: ['prisma', 'axios', 'the application of custom libraries documentation'],
  },
  {
    title: ' fair knowledge of AI and automation',
    description: 'I know a proper knowledge of prompt engineering , agentic use , installing mcp servers inside the the AI agent application. For automation I can design an n8n AI model that is connected to slack channels and cursor IDE' ,
    tags: ['GPTs', 'n8n+Slack+Cursor','MCP'],
  },
]

function SkillCard({ title, description, tags }: SkillCardProps) {
  return (
    <div className="group flex h-full flex-col justify-between rounded-2xl bg-white/90 p-5 shadow-lg ring-1 ring-white/60 backdrop-blur transition hover:-translate-y-1 hover:shadow-xl">
      <div>
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <span className="rounded-full bg-blue-600/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
            Skills
          </span>
        </div>
        <p className="mt-2 text-sm text-slate-600">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

function PrimaryFeatures() {
  return (
   <>
     
    <div className=" max-w-9xl max-h-7xl px-4 pb-12 sm:px-6 lg:px-8">
         <div className="rounded-lg bg-gradient-to-br from-sky-100 via-indigo-100 to-emerald-100 px-5 py-6 shadow-50/500 sm:px-6">
            <section
              id="features"
              aria-label="Profile highlight"
              className="relative overflow-hidden pb-14 pt-10 sm:py-16"
              >
                    <div className="flex flex-col gap-10 max-h-7xl w-full px-4 sm:px-6">
                      <div className="rounded-3xl border border-emerald-50 bg-gradient-to-br from-slate-50 via-white to-emerald-50/80 p-6 shadow-lg ring-1 ring-emerald-100/60 backdrop-blur sm:p-8">
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                          {skillCards.map((card) => (
                            <SkillCard key={card.title} {...card} />
                          ))}
                        </div>
                      </div>
                  </div>
               </section>
          </div>
        </div>
        </>  
  )
}
export default PrimaryFeatures