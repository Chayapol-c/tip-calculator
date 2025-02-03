import { useState } from "react"
import ResultForm from "./components/ResultForm"
import BillForm from "./components/BillForm"
import SelectTip from "./components/SelectTip"
import NumPeopleForm from "./components/NumPeopleForm"

const App = () => {
  const [bill, setBill] = useState<string>("")
  const [selectTip, setSelectTip] = useState<number>(0)
  const [numPeople, setNumPeople] = useState<string>("")

  const onReset = () => {
    setBill("")
    setNumPeople("")
    setSelectTip(0)
  }

  const getTotalAmount = () => {
    let isValidInput =
      !Number.isNaN(Number(bill)) &&
      !Number.isNaN(Number(numPeople)) &&
      selectTip > 0
    if (!isValidInput) {
      return "0"
    }
    let totalAmount =
      (Number.parseFloat(bill) / Number.parseInt(numPeople)) * (selectTip / 100)
    return totalAmount.toFixed(2)
  }

  const getTipAmount = () => {
    let isValidInput =
      !Number.isNaN(Number(bill)) &&
      !Number.isNaN(Number(numPeople)) &&
      selectTip > 0
    if (!isValidInput) {
      return "0"
    }
    let tipAmount =
      (Number.parseFloat(bill) / Number.parseInt(numPeople)) *
      (1 + selectTip / 100)
    return tipAmount.toFixed(2)
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-primary-200">
      <h1 className="uppercase text-primary-600 font-bold md:text-base text-2xl md:mt-32 md:mb-20 mt-10 mb-8">
        s p l i <br /> t t e r
      </h1>
      <main className="relative flex md:flex-row flex-col gap-x-6  bg-white md:rounded-xl rounded-t-3xl p-6 justify-between md:w-[40rem] md:h-[20rem] w-full md:flex-none flex-1">
        <div className="flex flex-1 flex-col justify-between p-3 md:m-0 mb-5">
          <BillForm bill={bill} setBill={setBill} />
          <SelectTip selectTip={selectTip} setSelectTip={setSelectTip} />
          <NumPeopleForm numPeople={numPeople} setNumPeople={setNumPeople} />
        </div>
        <ResultForm
          tipAmount={getTipAmount()}
          totalAmount={getTotalAmount()}
          onReset={onReset}
        />
      </main>
    </div>
  )
}

export default App
