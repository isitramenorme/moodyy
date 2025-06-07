import { createFileRoute } from '@tanstack/react-router'
import Calendar from '@/components/Calendar'

export const Route = createFileRoute('/calendar')({
  component: RouteComponent,
})

function RouteComponent() {
  const year = localStorage.getItem('year')
  const month = localStorage.getItem('month')

  return (
    <div className="flex flex-col gap-6 my-10 max-w-2xl">
      <img src={`${month?.toLocaleLowerCase() || ''}.jpg`} alt={month || ''} />
      <h1 className="text-3xl font-extrabold text-center">
        {month}, {year}
      </h1>
      <Calendar year={year} month={month} />
    </div>
  )
}
