type CalendarProps = {
  year: string | null
  month: string | null
  setDay: (val: number) => void
  handleDragOver: (e: React.DragEvent<HTMLTableCellElement>) => void
  handleDrop: (e: React.DragEvent<HTMLTableCellElement>) => void
}

function getMonthFromName(monthName: string | null): number | null {
  const parsedDate = Date.parse(monthName + ' 1, 2000')
  if (!isNaN(parsedDate)) {
    console.log(new Date(parsedDate).getMonth())
    return new Date(parsedDate).getMonth()
  }
  return null
}

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const Calendar = ({
  year,
  month,
  setDay,
  handleDragOver,
  handleDrop,
}: CalendarProps) => {
  const yearNum = Number(year)
  if (isNaN(yearNum)) {
    return
  }
  const monthNum = getMonthFromName(month)
  if (monthNum === null) {
    return
  }
  const firstDayOfMonth = new Date(yearNum, monthNum, 1)
  const lastDayOfMonth = new Date(yearNum, monthNum + 1, 0)
  const daysInMonth = lastDayOfMonth.getDate()

  const startDay = firstDayOfMonth.getDay() // 0 (Sun) to 6 (Sat)

  // Create an array for calendar cells (including padding before the 1st)
  const calendarCells = Array.from(
    { length: startDay + daysInMonth },
    (_, i) => {
      if (i < startDay) return null
      return i - startDay + 1
    },
  )

  const totalCells = calendarCells.length
  const paddedLength = Math.ceil(totalCells / 7) * 7
  const paddedCells = [
    ...calendarCells,
    ...Array(paddedLength - totalCells).fill(null),
  ]

  const weeks: Array<Array<number | null>> = []

  for (let i = 0; i < paddedCells.length; i += 7) {
    weeks.push(paddedCells.slice(i, i + 7))
  }

  return (
    <table className="max-w-2xl mx-auto p-4 bg-white table-fixed border-collapse">
      <thead>
        <tr className="text-center font-medium text-gray-700">
          {daysOfWeek.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((week, idx) => (
          <tr key={idx} className="mt-4 text-center">
            {week.map((day, index) =>
              day ? (
                <td
                  key={index}
                  onClick={() => setDay(day)}
                  className="size-24 border hover:bg-blue-100 cursor-pointer px-6"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  {day}
                </td>
              ) : (
                <td key={index} className="size-24 border" />
              ),
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Calendar
