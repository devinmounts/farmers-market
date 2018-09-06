import React from 'react';
import Nav from './Nav';
import Welcome from './Welcome';
import MarketSchedule from './MarketSchedule';
import ProduceList from './ProduceList';
import NewMarketControl from './NewMarketControl';
import { Switch, Route } from 'react-router-dom';


function App(){

    return (
        <div>
            <Nav/>
            <Switch>

              <Route exact path='/' component={Welcome} />
              <Route path='/schedule' component={MarketSchedule} />
              <Route path='/produce' component={ProduceList} />
              <Route exact path='/new' component={NewMarketControl}/>
            </Switch>
        </div>
    );
}

export default App;
