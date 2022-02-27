import React, { useState } from "react";
import ResultForm from "./components/ResultForm";
import TipForm from "./components/TipForm";

const App = () => {
  const [bill, setBill] = useState("")
  const [selectTip, setSelectTip] = useState(0)
  const [numPeople, setNumPeople] = useState("")

  return (
    <div className="flex flex-col items-center min-h-screen bg-primary-200">
      <h1 className="uppercase text-primary-600 font-bold md:text-base text-2xl md:mt-32 md:mb-20 mt-10 mb-8">s p l i <br /> t t e r</h1>
      <div className='relative flex md:flex-row flex-col gap-x-6  bg-white md:rounded-xl rounded-t-3xl p-6 justify-between md:w-[40rem] md:h-[20rem] w-full md:flex-none flex-1'>
        <TipForm bill={bill} setBill={setBill} selectTip={selectTip} setSelectTip={setSelectTip} numPeople={numPeople} setNumPeople={setNumPeople} />
        <ResultForm bill={bill} setBill={setBill} selectTip={selectTip} setSelectTip={setSelectTip} numPeople={numPeople} setNumPeople={setNumPeople} />
      </div>
    </div>
  );
};

export default App;
