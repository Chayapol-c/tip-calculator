const SelectTip = ({ selectTip, setSelectTip }) => {
	const tipValue = [5, 10, 15, 25, 50];
	const handleTips = (e) => {
		const value = e.target.value
		if (!value) return
		try {
			setSelectTip(parseFloat(value))
		} catch (Exception) {
			console.error(Exception)
		}
	}

	return (
		<div>
			<p className="label text-primary-400 mb-3">Select Tip %</p>
			<div className="grid md:grid-cols-3 grid-cols-2 md:grid-row-2 grid-row-3 md:gap-2 gap-4">
				{tipValue.map((ele, i) => {
					1
					if (ele === selectTip) {
						return (
							<button
								className="btn tip-btn bg-primary-500 text-primary-600"
								key={i}
								onClick={(e) => handleTips(e)}
								value={parseInt(ele)}
							>{ele}%</button>
						)
					} else {
						return (
							<button
								className="btn tip-btn bg-primary-600"
								key={i}
								onClick={(e) => handleTips(e)}
								value={parseInt(ele)}
							>{ele}%</button>
						)
					}
				}
				)}
				<input className="input-value font-bold text-right relative max-w-10 placeholder:text-center placeholder:text-primary-400 md:text-base text-2xl"
					type="text"
					placeholder="Custom"
					onChange={(e) => handleTips(e)
					}
				/>
			</div>
		</div>
	)
}

export default SelectTip