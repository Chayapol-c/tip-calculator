import SelectTip from "./SelectTip";
import BillForm from "./BillForm";
import NumPeopleForm from "./NumPeopleForm";

const TipForm = ({ bill, setBill, selectTip, setSelectTip, numPeople, setNumPeople }) => {

  return (
    <div className="flex flex-1 flex-col justify-between p-3 md:m-0 mb-5">
      <BillForm bill={bill} setBill={setBill} />
      <SelectTip selectTip={selectTip} setSelectTip={setSelectTip} />
      <NumPeopleForm numPeople={numPeople} setNumPeople={setNumPeople} />
    </div>
  );
};

export default TipForm;
