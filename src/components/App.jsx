import React from "react";
import Nav from './Nav';
import Welcome from './Welcome';
import MarketSchedule from "./MarketSchedule";
import ProduceList from "./ProduceList";

function App(){

  return (
    <div>
			<Nav/>
			<Welcome/>
			<MarketSchedule/>
			<ProduceList/>
    </div>
  );
}

export default App;