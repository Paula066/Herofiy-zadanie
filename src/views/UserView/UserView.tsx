import React, {FC, useEffect, useState} from "react";
import {UserList, ShowMore} from './styled';
import {UsersData} from "../../interfaces";
import { useHistory } from 'react-router-dom';
import {Routes} from "../../constants";

interface UserViewProps {
    userData: UsersData[]
}

const UserView: FC<UserViewProps> = ({ userData }) => {

    const history = useHistory();
    const [showMoreData, setShowMoreData] = useState(false);

    const handleUserDetails = (id: string) : void => {
        history.push(`${Routes.USER_DETAILS}/${id}?`)
    }

    // const handleRollBox = (): void => {
    //     setShowMoreData(true)
    // }

    return (
        <div className="container">
            <UserList>
                <div>name</div>
                <div>username</div>
                <div>email</div>
                <div>website</div>
                <div>Address</div>
            </UserList>
            {userData.map(({todos,company, phone,name,id, email, username, website, address}, index) => (
                <>
                    <UserList onClick={() => handleUserDetails(id)} key={index}>
                        <div className="list">{name}</div>
                        <div className="list">{username}</div>
                        <div className="list">{email}</div>
                        <div className="list">{website}</div>
                        <div className="list">{address.city}</div>
                    </UserList>
                    {/*<ShowMore onClick={handleRollBox}>show more</ShowMore>*/}
                </>
            ))}
        </div>
    )
}

export default UserView;
