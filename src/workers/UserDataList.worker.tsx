import React, {FC, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {IReduxState} from "../index";
import {UserActionTypes, UserDataList} from "../reducers/userDataList";
import {queryFetch} from "../services/Api";
import {IGETUsers} from "../interfaces";
import {usersData} from "../query";

const UserDataListWorker: FC = () => {
    const { update } = useSelector<IReduxState, UserDataList>((state) => state.userDataList);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!update) return;

        queryFetch<IGETUsers>(usersData).then((result) => {
            dispatch({type: UserActionTypes.GET_DATA, payload: result});
        });
    }, [update])
    return <></>
}

export default UserDataListWorker;
