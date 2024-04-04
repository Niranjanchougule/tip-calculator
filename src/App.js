import "./App.css";
import "./components/BillInput";
import BillInput from "./components/BillInput";
import SelectedPercentage from "./components/SelectedPercentage";
import Output from "./components/Output";
import Reset from "./components/Reset";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handelReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <div>
        <BillInput bill={bill} onSetBill={setBill} />
        <SelectedPercentage
          percentage={percentage1}
          onSelectedPercentage={setPercentage1}
        >
          How did you like the service?
        </SelectedPercentage>
        <SelectedPercentage
          percentage={percentage2}
          onSelectedPercentage={setPercentage2}
        >
          How did your friend like the service?
        </SelectedPercentage>
      </div>
      {bill > 0 && (
        <div>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handelReset} />{" "}
        </div>
      )}
    </div>
  );
}

export default App;
