import React, {FC, useEffect, useState} from 'react';
import {BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Routes } from './constants'
import { GlobalStyle }  from "./style";
import {UserDetails, UserList} from "./views";
import {queryFetch} from "./services/Api";
import {IGETUsers, UsersData} from "./interfaces";
import {usersData} from "./query";

const App: FC = () => {

    const [ userData, setUserData ] = useState<UsersData[]>([]);

    const getUserData = () => {
        queryFetch<IGETUsers>(usersData).then((result) => {
            setUserData(result.data.users.data)
        });
    }

    useEffect(() => {
        getUserData()
    }, [])

  return (
     <>
       <GlobalStyle />
       <Router>
         <Switch>
           <Route path={`${Routes.USER_DETAILS}/:id?`}>
             <UserDetails userData={userData}/>
           </Route>
           <Route exact path={Routes.HOME}>
             <UserList userData={userData} />
           </Route>
         </Switch>
       </Router>
     </>
  )
}
export default App;
