import React from 'react';
import './css/App.css'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Inicio from './pages/inicio/Inicio';
import Administracion from './pages/administration/Administration';
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
    <div id="div">
      <Router>
        <Switch>
          <Route path="/administracion/:id" component={Administracion} exact />
          <Route path="/" component={Inicio} exact />
          <Route component={PageNotFound} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
