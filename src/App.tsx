import React, {FC } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Routes } from './constants'
import {UserDetails, UserList} from "./views";

const App: FC = () => {
  return (
     <>
       <Router>
         <Switch>
           <Route path={Routes.USER_DETAILS}>
             <UserDetails/>
           </Route>
           <Route exact path={Routes.HOME}>
             <UserList />
           </Route>
         </Switch>
       </Router>
     </>
  )
}
export default App;
