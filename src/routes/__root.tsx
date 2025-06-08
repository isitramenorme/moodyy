import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { useEffect, useRef, useState } from 'react'
import TanStackQueryLayout from '../integrations/tanstack-query/layout.tsx'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const togglePlayback = () => {
      const audio = audioRef.current
      if (!audio) return

      if (isPlaying) {
        audio.pause()
      } else {
        audio.play().catch(console.error)
      }
      setIsPlaying(!isPlaying)
    }

    return (
      <>
        <figure className="fixed top-4 right-4 flex flex-col gap-4">
          <button
            onClick={togglePlayback}
            className="bg-white rounded-full size-10 shadow border"
          >
            {isPlaying ? '♫' : '♪×'}
          </button>
          <audio ref={audioRef} loop preload="auto" src="bg-music.mp3"></audio>
        </figure>
        <section className="min-h-dvh flex flex-col items-center justify-center">
          <Outlet />
          <TanStackRouterDevtools />

          <TanStackQueryLayout />
        </section>
      </>
    )
  },
})
