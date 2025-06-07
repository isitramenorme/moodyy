type Props = {
  val: string
  setVal: (val: string) => void
}

export function Btn({ val, setVal }: Props) {
  return (
    <button
      type="button"
      onClick={() => setVal(val)}
      className="bg-white/30 py-4 px-8 text-2xl rounded-lg cursor-pointer"
    >
      {val}
    </button>
  )
}
