import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const [year, setYear] = useState<undefined | number>()

  const yearHandler = (val: number) => {
    setYear(val)
  }

  return (
    <section className="min-h-dvh flex flex-col items-center justify-center">
      {year ? (
        <h1>Select the month</h1>
      ) : (
        <>
          <h1 className="text-2xl">Select the year</h1>
          <div className="flex flex-col gap-8 items-center justify-center m-4 font-bold">
            <div className="flex gap-8">
              <Year year={2025} setYear={yearHandler} />
              <Year year={2026} setYear={yearHandler} />
              <Year year={2027} setYear={yearHandler} />
              <Year year={2028} setYear={yearHandler} />
            </div>
            <div className="flex gap-8">
              <Year year={2029} setYear={yearHandler} />
              <Year year={2030} setYear={yearHandler} />
              <Year year={2031} setYear={yearHandler} />
            </div>
            <div className="flex gap-8">
              <Year year={2032} setYear={yearHandler} />
              <Year year={2033} setYear={yearHandler} />
              <Year year={2034} setYear={yearHandler} />
              <Year year={2035} setYear={yearHandler} />
            </div>
          </div>
        </>
      )}
    </section>
  )
}

type Props = {
  year: number
  setYear: (val: number) => void
}

function Year({ year, setYear }: Props) {
  return (
    <button
      type="button"
      onClick={() => setYear(year)}
      className="bg-white/30 py-4 px-8 text-2xl rounded-lg cursor-pointer"
    >
      {year}
    </button>
  )
}
