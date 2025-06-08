import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/note')({
  component: RouteComponent,
})

function RouteComponent() {
  const year = localStorage.getItem('year')
  const month = localStorage.getItem('month')
  const day = localStorage.getItem('day')

  return (
    <div className="w-2xl mx-auto relative">
      <img
        src="note.jpg"
        alt="note-background"
        className="w-2xl h-auto object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full px-16 py-8 flex flex-col gap-8">
        <h1 className="text-3xl font-extrabold">
          {day} {month}, {year}
        </h1>
        <label htmlFor="title" className="sr-only">
          title
        </label>
        <input
          id="title"
          type="text"
          className="border-4 border-dashed border-yellow-800 h-12 text-2xl p-2 font-extrabold outline-none resize-none"
          placeholder="title"
        />
        <label htmlFor="body" className="sr-only">
          body
        </label>
        <textarea
          id="body"
          className="w-full h-[calc(100%-360px)] border-4 border-dashed border-yellow-800 text-2xl p-2 font-extrabold outline-none resize-none"
          placeholder="write something nice here ..."
        />
      </div>
    </div>
  )
}
