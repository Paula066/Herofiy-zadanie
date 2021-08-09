import React, {FC} from "react";
import {UserList, ShowMore} from './styled';
import {useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
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
                         <React.Fragment key={index}>
                            <UserList onClick={() => handleUserDetails(id)} key={index}>
                                <div className="list">{name}</div>
                                <div className="list">{id}</div>
                                <div className="list">{username}</div>
                                <div className="list">{email}</div>
                                <div className="list">{phone}</div>
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
                        </React.Fragment>
                ))}
        </div>
    )
}

export default UserView;
