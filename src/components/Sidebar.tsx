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
          className="sticky border rounded-full size-16 hover:scale-110 transition-scale ease-in duration-200 active:opacity-30"
        >
          Jam box
        </button>
      </Link>
      <button
        type="button"
        className="sticky border rounded-full size-16 hover:scale-110 transition-scale ease-in duration-200 active:opacity-30"
        onClick={() => setIsOpen(!isOpen)}
      >
        Peelings
      </button>
      {isOpen && (
        <div
          className={
            'flex flex-col gap-4 border rounded-lg w-16 p-2 duration-400 ease-in transition-transform'
          }
        >
          <img
            src="https://placehold.co/64"
            alt="emotion"
            className="size-11.5 cursor-move"
            id="external-draggable"
            draggable
            onDragStart={(e) => handleDragStart(e, 'external-draggable')}
          />
          <img
            src="https://placehold.co/64"
            alt="emotion"
            className="size-11.5 cursor-move"
            id="external-draggable"
            draggable
            onDragStart={(e) => handleDragStart(e, 'external-draggable')}
          />
          <img
            src="https://placehold.co/64"
            alt="emotion"
            className="size-11.5 cursor-move"
            id="external-draggable"
            draggable
            onDragStart={(e) => handleDragStart(e, 'external-draggable')}
          />
          <img
            src="https://placehold.co/64"
            alt="emotion"
            className="size-11.5 cursor-move"
            id="external-draggable"
            draggable
            onDragStart={(e) => handleDragStart(e, 'external-draggable')}
          />
          <img
            src="https://placehold.co/64"
            alt="emotion"
            className="size-11.5 cursor-move"
            id="external-draggable"
            draggable
            onDragStart={(e) => handleDragStart(e, 'external-draggable')}
          />
          <img
            src="https://placehold.co/64"
            alt="emotion"
            className="size-11.5 cursor-move"
            id="external-draggable"
            draggable
            onDragStart={(e) => handleDragStart(e, 'external-draggable')}
          />
          <img
            src="https://placehold.co/64"
            alt="emotion"
            className="size-11.5 cursor-move"
            id="external-draggable"
            draggable
            onDragStart={(e) => handleDragStart(e, 'external-draggable')}
          />
          <img
            src="https://placehold.co/64"
            alt="emotion"
            className="size-11.5 cursor-move"
            id="external-draggable"
            draggable
            onDragStart={(e) => handleDragStart(e, 'external-draggable')}
          />
        </div>
      )}
    </div>
  )
}
