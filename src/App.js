import React from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom'
import './App.css';
import StartPage from './Panels/StartPage';
import FoodPage from './Panels/FoodPage';
import DurationPage from './Panels/DurationPage';
import MapPage from './Panels/MapPage';
import Card from './Panels/Card';

function App() {
  return (
    <HashRouter>
         <Switch>
          <Route exact path='/' component={StartPage}/>
          <Route path='/meals' component={FoodPage}/>
          <Route path='/meals/:params' component={FoodPage}/>
          <Route path='/duration' component={DurationPage}/>
          <Route path='/map' component={MapPage}/>
          <Route path='/tinder' component={Card}/>
        </Switch>
    </HashRouter>
  );
}

export default App;
