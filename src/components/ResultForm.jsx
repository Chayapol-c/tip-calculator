const ResultForm = ({ bill, setBill, selectTip, setSelectTip, numPeople, setNumPeople }) => {

  const handleReset = () => {
    setBill("")
    setNumPeople("")
    setSelectTip("")
  }

  const tipAmount = bill && numPeople && selectTip ? (bill / numPeople) * (selectTip / 100) : 0
  const total = bill && numPeople && selectTip ? (bill / numPeople) * (1 + (selectTip / 100)) : 0

  return (
    <div className="bg-primary-600 rounded-xl box-border p-6 flex flex-col flex-1 items-center md:justify-between justify-around">
      <div className="w-full mb-8">
        <div className="result-container mb-6">
          <div className="flex flex-col">
            <p className="result-label">Tip Amount</p>
            <p className="text-xs text-primary-300">/ person</p>
          </div>
          <strong className="text-3xl text-primary-500">${Number.parseFloat(tipAmount).toFixed(2)}</strong>
        </div>
        <div className="result-container">
          <div className="flex flex-col">
            <p className="result-label">Total</p>
            <p className="text-xs text-primary-300">/ person</p>
          </div>
          <strong className="text-3xl text-primary-500">${Number.parseFloat(total).toFixed(2)}</strong>
        </div>
      </div>
      <button className="btn bg-primary-500 text-primary-600 font-bold hover:bg-cyan-200 md:text-base text-2xl"
        onClick={handleReset}>
        RESET
      </button>
    </div>
  );
};

export default ResultForm;
