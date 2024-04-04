function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <lebel>How mush was the bill?</lebel>
      <input
        type="text"
        placeholder="Bill Value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

export default BillInput;
