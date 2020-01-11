import React from 'react'
 import { Switch,Route} from 'react-router-dom';
 import Accueil from './acceuil';
 import Cv from './cv';
 import Projets from './projets';
 import Contact from './contact';
 const Main= ()=>{
  return(
  
   <Switch>
    <Route exact path="/" component={Accueil}></Route>
    <Route   path="/cv" component={Cv}></Route>
    <Route   path="/projets" component={Projets}></Route>
    <Route   path="/contact" component={Contact}></Route>
    </Switch>);
  
 }


export default Main;