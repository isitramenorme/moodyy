import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/jams/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      <h1 className="text-3xl font-extrabold text-center">
        d[^_^]b Pick a mood to match your vibe
      </h1>
      <div className="flex justify-center gap-6 w-full">
        <Link to="/jams/$jam" params={{ jam: 'happy' }}>
          <img src="happy.webp" alt="happy" className="size-16" />
        </Link>
        {/* change this rashmi */}
        <Link to="/jams/$jam" params={{ jam: 'sad' }}>
          {/* change this rashmi */}
          <img src="sad.webp" alt="sad" className="size-16" />
        </Link>
        <Link to="/jams/$jam" params={{ jam: 'excited' }}>
          <img src="excited.webp" alt="excited" className="size-16" />
        </Link>
        <Link to="/jams/$jam" params={{ jam: 'loved' }}>
          <img src="loved.webp" alt="loved" className="size-16" />
        </Link>
        <Link to="/jams/$jam" params={{ jam: 'tired' }}>
          <img src="tired.webp" alt="tired" className="size-16" />
        </Link>
        <Link to="/jams/$jam" params={{ jam: 'lonely' }}>
          <img src="lonely.webp" alt="lonely" className="size-16" />
        </Link>
        <Link to="/jams/$jam" params={{ jam: 'angry' }}>
          <img src="angry.webp" alt="angry" className="size-16" />
        </Link>
        <Link to="/jams/$jam" params={{ jam: 'confused' }}>
          <img src="confused.webp" alt="confused" className="size-16" />
        </Link>
      </div>
    </div>
  )
}
