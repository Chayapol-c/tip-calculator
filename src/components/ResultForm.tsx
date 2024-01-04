type ResultFormType = {
  tipAmount: String
  totalAmount: string
  onReset: () => void
}

const ResultForm = ({ tipAmount, totalAmount, onReset }: ResultFormType) => {
  return (
    <div className="bg-primary-600 rounded-xl box-border p-6 flex flex-col flex-1 items-center md:justify-between justify-around">
      <div className="w-full mb-8">
        <div className="result-container mb-6">
          <div className="flex flex-col">
            <p className="result-label">Tip Amount</p>
            <p className="text-xs text-primary-300">/ person</p>
          </div>
          <strong className="text-3xl text-primary-500">${tipAmount}</strong>
        </div>
        <div className="result-container">
          <div className="flex flex-col">
            <p className="result-label">Total</p>
            <p className="text-xs text-primary-300">/ person</p>
          </div>
          <strong className="text-3xl text-primary-500">${totalAmount}</strong>
        </div>
      </div>
      <button
        className="btn bg-primary-500 text-primary-600 font-bold hover:bg-cyan-200 md:text-base text-2xl uppercase"
        onClick={onReset}
      >
        reset
      </button>
    </div>
  )
}

export default ResultForm
