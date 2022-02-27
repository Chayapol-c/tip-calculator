const BillForm = ({ bill, setBill }) => {

	const handleBill = (e) => {
		const value = e.target.value
		if (!value) return
		try {
			setBill(value)
		} catch (Exception) {
			console.error(Exception)
			return
		}
	}

	return (
		<div>
			<p className="label text-primary-400 mb-2">Bill</p>
			<input
				type="text"
				className={`input-value input-icon bg-[url(/src/images/icon-dollar.svg)]`}
				onChange={(e) => handleBill(e)}
				value={bill}
			/>
		</div>
	)
}

export default BillForm