import { createFileRoute, useNavigate } from '@tanstack/react-router'
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'
import { useState } from 'react'
import Calendar from '@/components/Calendar'
import { Sidebar } from '@/components/Sidebar'

export const Route = createFileRoute('/calendar')({
  component: RouteComponent,
})

function RouteComponent() {
  const year = localStorage.getItem('year')
  const month = localStorage.getItem('month')

  const navigate = useNavigate({ from: '/calendar' })

  // ✅ State to track emoji counts
  const [emojiCounts, setEmojiCounts] = useState({
    angry: 0,
    sad: 0,
    happy: 0,
    excited: 0,
    loved: 0,
    lonely: 0,
    tired: 0,
    confused: 0,
  })

  const dayHandler = (val: number) => {
    localStorage.setItem('day', String(val))
    navigate({ to: '/note' })
  }

  const handleDragStart = (
    e: React.DragEvent<HTMLImageElement>,
    id: string,
  ) => {
    e.dataTransfer.setData('text/plain', id)
  }

  const handleDragOver = (e: React.DragEvent<HTMLTableCellElement>) => {
    e.preventDefault() // Allow drop
  }

  const handleDrop = (e: React.DragEvent<HTMLTableCellElement>) => {
    e.preventDefault()
    const target = e.currentTarget

    if (target.tagName === 'TD') {
      const originalId = e.dataTransfer.getData('text/plain')
      const original = document.getElementById(originalId)

      // Prevent multiple drops into same cell
      if (!original || target.children.length !== 0) return

      const isClone = originalId.startsWith('clone-')

      let emojiKey = originalId.replace('.webp', '').toLowerCase()
      emojiKey = emojiKey.replace(/^clone-/, '').split('-')[0]

      if (emojiCounts.hasOwnProperty(emojiKey)) {
        setEmojiCounts((prev) => ({
          ...prev,
          [emojiKey]: prev[emojiKey as keyof typeof emojiCounts] + 1,
        }))
      }

      if (isClone) {
        target.appendChild(original)
      } else {
        const clone = original.cloneNode(true) as HTMLElement
        const uniqueId = `clone-${originalId}-${Date.now()}`

        clone.id = uniqueId
        clone.draggable = true
        clone.addEventListener('dragstart', (event) => {
          event.dataTransfer?.setData('text/plain', uniqueId)
        })

        target.appendChild(clone)
      }
    }
  }

  // ✅ Chart data formatting
  const chartData = Object.keys(emojiCounts).map((emotion) => ({
    emotion,
    count: emojiCounts[emotion as keyof typeof emojiCounts],
  }))

  return (
    <>
      <Sidebar handleDragStart={handleDragStart} />
      <div className="flex flex-col gap-6 my-10 max-w-2xl">
        <img
          src={`${month?.toLocaleLowerCase() || ''}.jpg`}
          alt={month || ''}
        />
        <h1 className="text-3xl font-extrabold text-center">
          {month}, {year}
        </h1>
        <Calendar
          year={year}
          month={month}
          setDay={dayHandler}
          handleDragOver={handleDragOver}
          handleDrop={handleDrop}
        />

        {/* ✅ Live Radar Chart below calendar */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-xl font-semibold text-center mb-2">
            Mood Tracker
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="emotion" />
              <Radar
                name="Mood"
                dataKey="count"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  )
}
