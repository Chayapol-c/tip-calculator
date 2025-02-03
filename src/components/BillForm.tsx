import React from "react"
import { ChangeEvent, DetailedHTMLProps } from "react"

type BillFormProps = {
  bill: string
  setBill: (p1: string) => any
}

const BillForm = ({ bill, setBill }: BillFormProps) => {
  const handleBill = (e: ChangeEvent<HTMLInputElement>) => {
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
        aria-label="bill"
        type="text"
        className={`input-value input-icon bg-[url(/src/images/icon-dollar.svg)]`}
        onChange={(e) => handleBill(e)}
        value={bill}
      />
    </div>
  )
}

export default BillForm
