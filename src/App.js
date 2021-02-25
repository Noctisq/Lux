import "./index.css";
import Header from "./components/Header.js";

import Card from "./components/Card.js";
import { useState, useEffect } from "react";

const data = [

  { id: 1, planType: "Standard", price: 9, features: ["Unlimited Search", "Advanced", "Enterprise"] },
  { id: 3, planType: "Advanced", price: 15, features: ["Advanced admin controls", "Domain verification", "Message exports"] },
  { id: 2, planType: "Enterprise", price: 0, features: ["Unlimited workspaces", "Data loss prevention", "Network ccontrol"] },
  
];

export default function App() {
  const [monthly, setMonthly] = useState(false);


  const onChangeValue = (e) => {
    setMonthly(!monthly);
  }

  if (monthly) {
    const filteredData = data.find((data) => data.planType === "Enterprise");

    return (

      <div className="App">
        <Header />
        <div className='radios' onChange={onChangeValue}>
          <input type="radio" value="Monthly" name="gender" /> Billed Monthly
          <input type="radio" value="Yearly" name="gender" /> Billed Yearly
        </div>
        <div className="container py-5">
          <Card  {...filteredData} />
        </div>

      </div>
    );
  }

  return (
    <div className="App">
      <Header />

      <div onChange={onChangeValue}>
        <input type="radio" readOnly checked value="Monthly" name="gender" /> Billed Monthly
        <input type="radio" value="Yearly" name="gender" /> Billed Yearly

      </div>
      <section>
        <div className = "container py-5">
          <div className="row text-center align-items-end">
            {data.map(card => {
              return <Card key={card.id} {...card} />
            })}
          </div>

        </div>
      </section>
    </div>
  );
}

