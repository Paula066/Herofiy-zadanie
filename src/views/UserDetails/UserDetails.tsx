import React, {FC, useEffect, useState} from "react";
import {UsersData} from "../../interfaces";
import {Link, useParams, useHistory} from 'react-router-dom';
import UserDetailsWrapper from './styled';
import {Routes} from "../../constants";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import AddTodoListModal from "../../components/AddTodoListModal/AddTodoListModal";

interface UserViewProps {
    userData: UsersData[]
}

const UserDetails: FC<UserViewProps> = ({ userData }) => {

    const { id } = useParams<{id?: string}>();
    const history = useHistory();
    const [todoList, setTodoList] = useState(false);

    const usersDetails = userData.find(data => {
        return data.id === id;
    })

    const handleOpenAddTodoListModal = () => {
        setTodoList(true);
    }

    const handleCloseModal = () => {
        setTodoList(false)
    }

    const redirectToHomePage = () => {
        history.push(Routes.HOME);
    }


    return !userData.length ? (
        <></>
    ) : (
        <UserDetailsWrapper>
            <div className="name"> Name: {usersDetails!.username}</div>
            <Link to={Routes.HOME} />
            <ArrowBackIcon onClick={redirectToHomePage}/>
            <Button variant="contained" color="secondary" onClick={handleOpenAddTodoListModal}>Add todolist</Button>
            {todoList ? <AddTodoListModal closeModal={handleCloseModal} /> : ''}
        </UserDetailsWrapper>
    )
}

export default UserDetails;
