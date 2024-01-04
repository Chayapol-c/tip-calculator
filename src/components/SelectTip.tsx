import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useState,
} from "react"

type SelectTipProps = {
  selectTip: number
  setSelectTip: Dispatch<SetStateAction<number>>
}

const SelectTip = ({ selectTip, setSelectTip }: SelectTipProps) => {
  const [isError, setIsError] = useState(false)

  const tipsList = [5, 10, 15, 25, 50]
  const handleTips = (e: MouseEvent<HTMLButtonElement>, ele: number) => {
    const value = ele
    if (!value) return
    try {
      setSelectTip(value)
    } catch (Exception) {
      console.error(Exception)
    }
  }

  const handleCustomTip = (e: ChangeEvent<HTMLInputElement>) => {
    setIsError(false)
    const inputValue = e.target.value
    const tip = parseFloat(inputValue)
    if (Number.isNaN(tip) && inputValue.length > 0) {
      setIsError(true)
      return
    }
    setSelectTip(tip)
  }

  return (
    <div>
      <p className="label text-primary-400 mb-3">Select Tip %</p>
      <div className="grid md:grid-cols-3 grid-cols-2 md:grid-row-2 grid-row-3 md:gap-2 gap-4">
        {tipsList.map((ele, i) => {
          1
          return (
            <button
              className={`btn tip-btn ${
                ele === selectTip ? "bg-primary-500" : "bg-primary-600"
              } text-white`}
              key={i}
              onClick={(e) => handleTips(e, ele)}
              value={ele}
            >
              {ele}%
            </button>
          )
        })}
        <input
          className="input-value font-bold text-right relative max-w-10 placeholder:text-center placeholder:text-primary-400 md:text-base text-2xl"
          type="text"
          placeholder="Custom"
          onChange={handleCustomTip}
        />
      </div>
      {isError ? <p className="text-red-500">Error</p> : null}
    </div>
  )
}

export default SelectTip
