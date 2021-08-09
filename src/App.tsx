import React, {FC} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {Routes} from './constants'
import {GlobalStyle} from "./style";
import {UserDetails, UserList} from "./views";
import {useSelector} from "react-redux";
import {IReduxState} from "./index";
import {UserDataList} from "./reducers/userDataList";
import {UserDataListWorker} from './workers'


const App: FC = () => {
    const { dataUser } = useSelector<IReduxState, UserDataList>((state) => state.userDataList);

    return (
        <>
            <GlobalStyle/>
            <UserDataListWorker />
            {!dataUser ? (
                <div>Loading...</div>
            ) : (
                <Router>
                    <Switch>
                        <Route path={`${Routes.USER_DETAILS}/:id?`}>
                            <UserDetails />
                        </Route>
                        <Route exact path={Routes.HOME}>
                            <UserList />
                        </Route>
                    </Switch>
                </Router>
            )}
        </>
    )
}
export default App;
