import React, {FC} from "react";
import {UserList, ShowMore} from './styled';
import {useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import {Routes} from "../../constants";
import {IReduxState} from '../../';
import {UserDataList} from "../../reducers/userDataList";
import { Container } from '@material-ui/core';

const UserView: FC = () => {

    const history = useHistory();
    const { dataUser } = useSelector<IReduxState, UserDataList>((state) => state.userDataList)

    const handleUserDetails = (id: string) : void => {
        history.push(`${Routes.USER_DETAILS}/${id}?`)
    }

    return (
        <Container maxWidth="md">
            <UserList>
                <div>name</div>
                <div>id</div>
                <div>username</div>
                <div>email</div>
                <div>phone</div>
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
                         <>
                            <UserList onClick={() => handleUserDetails(id)} key={index}>
                                <div className="list"><span>Name:</span>{name}</div>
                                <div className="list"><span>Id:</span>{id}</div>
                                <div className="list"><span>Username:</span>{username}</div>
                                <div className="list"><span>Email:</span>{email}</div>
                                <div className="list"><span>Phone:</span>{phone}</div>
                            </UserList>
                             <ShowMore key={index + 1}>
                                 <div className="box">
                                     <strong>Address:</strong>
                                     <div>{address.city}</div>
                                     <div>{address.street}</div>
                                 </div>
                                 <div className="box">
                                     <strong>Company:</strong>
                                     <div>{company.name}</div>
                                 </div>
                                 <div className="box"><strong>Website</strong>{website}</div>
                             </ShowMore>
                        </>
                ))}
        </Container>
    )
}

export default UserView;
