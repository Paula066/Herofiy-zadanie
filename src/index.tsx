import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import userDataList, {UserDataList} from './reducers/userDataList'

export interface IReduxState {
    userDataList: UserDataList
}

export const store = createStore(
    combineReducers({
        userDataList: userDataList,
    }),
);


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

