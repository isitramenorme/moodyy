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
          <img src="https://placehold.co/64" alt="happy" className="size-16" />
        </Link>
        <Link to="/jams/$jam" params={{ jam: 'happy' }}>
          <img src="https://placehold.co/64" alt="happy" className="size-16" />
        </Link>
        <Link to="/jams/$jam" params={{ jam: 'happy' }}>
          <img src="https://placehold.co/64" alt="happy" className="size-16" />
        </Link>
        <Link to="/jams/$jam" params={{ jam: 'happy' }}>
          <img src="https://placehold.co/64" alt="happy" className="size-16" />
        </Link>
        <Link to="/jams/$jam" params={{ jam: 'happy' }}>
          <img src="https://placehold.co/64" alt="happy" className="size-16" />
        </Link>
        <Link to="/jams/$jam" params={{ jam: 'happy' }}>
          <img src="https://placehold.co/64" alt="happy" className="size-16" />
        </Link>
        <Link to="/jams/$jam" params={{ jam: 'happy' }}>
          <img src="https://placehold.co/64" alt="happy" className="size-16" />
        </Link>
        <Link to="/jams/$jam" params={{ jam: 'happy' }}>
          <img src="https://placehold.co/64" alt="happy" className="size-16" />
        </Link>
      </div>
    </div>
  )
}
