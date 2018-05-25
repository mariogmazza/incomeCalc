import React from "react";
import "./AppContainer.css";
import Calc from '../calc/Calculator'

function AppContainer() {
  return (
    <div className="wrapper">
      <div className="title">
        <h1>Welcome to the Income Calculator</h1>
      </div>

      <div className="calc-Container">
        <h1>Yearly Income Calculator</h1>
        {/* here I have to import the full calculator */}
        <Calc />
        
      </div>
    </div>
  );
}

export default AppContainer;
