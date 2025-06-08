import { createFileRoute, useNavigate } from '@tanstack/react-router'
import Calendar from '@/components/Calendar'
import { Sidebar } from '@/components/Sidebar'

export const Route = createFileRoute('/calendar')({
  component: RouteComponent,
})

function RouteComponent() {
  const year = localStorage.getItem('year')
  const month = localStorage.getItem('month')

  const navigate = useNavigate({ from: '/calendar' })

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

      if (isClone) {
        target.appendChild(original)
      } else {
        // Clone original (if not already a clone)
        const clone = original.cloneNode(true) as HTMLElement
        const uniqueId = `clone-${originalId}-${Date.now()}`

        clone.id = uniqueId
        clone.draggable = true

        // Optional: keep drag-and-drop behavior on clones
        clone.addEventListener('dragstart', (event) => {
          event.dataTransfer?.setData('text/plain', uniqueId)
        })

        target.appendChild(clone)
      }
    }
  }

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
      </div>
    </>
  )
}
