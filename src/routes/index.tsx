import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Btn } from '@/components/Btn'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const navigate = useNavigate({ from: '/' })

  const yearHandler = (val: string) => {
    localStorage.setItem('year', val)
    navigate({ to: '/month' })
  }

  return (
    <>
      <img
        src="years-bg.jpg"
        alt="background"
        className="fixed top-0 left-0 -z-10 w-full h-full object-cover"
      />
      <h1 className="text-3xl font-extrabold">Select the year</h1>
      <div className="flex flex-col gap-8 items-center justify-center m-4 font-bold">
        <div className="flex gap-8">
          <Btn val={'2025'} setVal={yearHandler} />
          <Btn val={'2026'} setVal={yearHandler} />
          <Btn val={'2027'} setVal={yearHandler} />
          <Btn val={'2028'} setVal={yearHandler} />
        </div>
        <div className="flex gap-8">
          <Btn val={'2029'} setVal={yearHandler} />
          <Btn val={'2030'} setVal={yearHandler} />
          <Btn val={'2031'} setVal={yearHandler} />
        </div>
        <div className="flex gap-8">
          <Btn val={'2032'} setVal={yearHandler} />
          <Btn val={'2033'} setVal={yearHandler} />
          <Btn val={'2034'} setVal={yearHandler} />
          <Btn val={'2035'} setVal={yearHandler} />
        </div>
      </div>
    </>
  )
}
