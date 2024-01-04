import { ChangeEvent } from "react"

type NumPeopleFormProps = {
  numPeople: string
  setNumPeople: (p1: string) => any
}

const NumPeopleForm = ({ numPeople, setNumPeople }: NumPeopleFormProps) => {
  const handlePeople = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (!value) return
    try {
      setNumPeople(value)
    } catch (Exception) {
      console.error(Exception)
    }
  }

  const warning = parseInt(numPeople) === 0 ? "focus:outline-orange-400" : ""

  return (
    <div>
      <div className="flex justify-between mb-2">
        <p className="label text-primary-400">Number of People</p>
        <div className={`${!warning ? "hidden" : ""}`}>
          <p className="text-orange-400 text-xs">Can't be Zero</p>
        </div>
      </div>
      <input
        type="text"
        className={`input-value input-icon bg-[url(/src/images/icon-person.svg)] ${warning}`}
        onChange={(e) => handlePeople(e)}
        value={numPeople}
      />
    </div>
  )
}

export default NumPeopleForm
