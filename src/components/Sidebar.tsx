import { Link } from '@tanstack/react-router'
import { useState } from 'react'

type Props = {
  handleDragStart: (e: React.DragEvent<HTMLImageElement>, id: string) => void
}

export function Sidebar({ handleDragStart }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="fixed top-4 left-4 flex flex-col gap-4">
      <Link to="/jams">
        <button
          type="button"
          className="sticky border rounded-full size-16 hover:scale-110 transition-scale ease-in duration-200 active:opacity-30 overflow-hidden flex items-center justify-center"
        >
          <img src="jams.jpg" alt="jam box" className="size-18" />
        </button>
      </Link>
      <button
        type="button"
        className="sticky border rounded-full size-16 hover:scale-110 transition-scale ease-in duration-200 active:opacity-30 overflow-hidden flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="emotions.jpg" alt="peelings" className="size-18" />
      </button>
      {isOpen && (
        <div
          className={
            'flex flex-col gap-4 border rounded-lg w-16 p-2 duration-400 ease-in transition-transform'
          }
        >
          <img
            src="happy.webp"
            alt="happy"
            className="size-11.5 cursor-move"
            id="happy"
            draggable
            onDragStart={(e) => handleDragStart(e, 'happy')}
          />
          <img
            src="sad.webp"
            alt="sad"
            className="size-11.5 cursor-move"
            id="sad"
            draggable
            onDragStart={(e) => handleDragStart(e, 'sad')}
          />
          <img
            src="excited.webp"
            alt="excited"
            className="size-11.5 cursor-move"
            id="excited"
            draggable
            onDragStart={(e) => handleDragStart(e, 'excited')}
          />
          <img
            src="loved.webp"
            alt="loved"
            className="size-11.5 cursor-move"
            id="loved"
            draggable
            onDragStart={(e) => handleDragStart(e, 'loved')}
          />
          <img
            src="lonely.webp"
            alt="lonely"
            className="size-11.5 cursor-move"
            id="lonely"
            draggable
            onDragStart={(e) => handleDragStart(e, 'lonely')}
          />
          <img
            src="tired.webp"
            alt="tired"
            className="size-11.5 cursor-move"
            id="tired"
            draggable
            onDragStart={(e) => handleDragStart(e, 'tired')}
          />
          <img
            src="confused.webp"
            alt="confused"
            className="size-11.5 cursor-move"
            id="confused"
            draggable
            onDragStart={(e) => handleDragStart(e, 'confused')}
          />
          <img
            src="angry.webp"
            alt="angry"
            className="size-11.5 cursor-move"
            id="angry"
            draggable
            onDragStart={(e) => handleDragStart(e, 'angry')}
          />
        </div>
      )}
    </div>
  )
}
