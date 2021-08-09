import React, {FC} from "react";
import {UserList} from './styled';
import {useSelector} from "react-redux";
import { useHistory } from 'react-router-dom';
import {Routes} from "../../constants";
import {IReduxState} from '../../';
import {UserDataList} from "../../reducers/userDataList";

const UserView: FC = () => {

    const history = useHistory();
    const { dataUser } = useSelector<IReduxState, UserDataList>((state) => state.userDataList)

    const handleUserDetails = (id: string) : void => {
        history.push(`${Routes.USER_DETAILS}/${id}?`)
    }

    return (
        <div className="container">
            <UserList>
                <div>name</div>
                <div>username</div>
                <div>email</div>
                <div>website</div>
                <div>Address</div>
            </UserList>
            {dataUser?.data.users.data.map(
                ({
                     todos,
                     company,
                     phone,
                     name,
                     id,
                     email,
                     username,
                     website,
                     address}, index) => (
                <UserList onClick={() => handleUserDetails(id)} key={index}>
                    <div className="list">{name}</div>
                    <div className="list">{username}</div>
                    <div className="list">{email}</div>
                    <div className="list">{website}</div>
                    <div className="list">{address.city}</div>
                </UserList>
            ))}
        </div>
    )
}

export default UserView;
