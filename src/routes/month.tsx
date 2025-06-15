import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Btn } from '@/components/Btn'

export const Route = createFileRoute('/month')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate({ from: '/month' })

  const monthHandler = (val: string) => {
    localStorage.setItem('month', val)
    navigate({ to: '/calendar' })
  }

  return (
    <>
      <img
        src="month-bg.jpg"
        alt="background"
        className="fixed top-0 left-0 -z-10 w-full h-full object-cover"
      />
      <h1 className="text-3xl font-extrabold">Select the month</h1>
      <div className="flex flex-col gap-8 items-center justify-center m-4 font-bold">
        <div className="grid grid-cols-3 grid-rows-4 gap-6">
          <Btn val={'January'} setVal={monthHandler} />
          <Btn val={'February'} setVal={monthHandler} />
          <Btn val={'March'} setVal={monthHandler} />
          <Btn val={'April'} setVal={monthHandler} />
          <Btn val={'May'} setVal={monthHandler} />
          <Btn val={'June'} setVal={monthHandler} />
          <Btn val={'July'} setVal={monthHandler} />
          <Btn val={'August'} setVal={monthHandler} />
          <Btn val={'September'} setVal={monthHandler} />
          <Btn val={'October'} setVal={monthHandler} />
          <Btn val={'November'} setVal={monthHandler} />
          <Btn val={'December'} setVal={monthHandler} />
        </div>
      </div>
    </>
  )
}
