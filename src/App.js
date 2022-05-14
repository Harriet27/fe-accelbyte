import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import {
  Home,
  Items,
} from './pages';

function App() {
  return (
    <Switch>
      <Route exact path="/" element={<Home />}>
        <Home />
      </Route>
      <Route path="/items" element={<Items />}>
        <Items />
      </Route>
    </Switch>
  );
}

export default App;
