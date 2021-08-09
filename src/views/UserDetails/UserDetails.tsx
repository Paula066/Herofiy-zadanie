import React, {FC, useState} from "react";
import Checkbox from '@material-ui/core/Checkbox';
import {Link, useParams, useHistory} from 'react-router-dom';
import UserDetailsWrapper from './styled';
import {Routes} from "../../constants";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import AddTodoListModal from "../../components/AddTodoListModal/AddTodoListModal";
import {useSelector} from "react-redux";
import {IReduxState} from "../../index";
import {UserActionTypes, UserDataList} from "../../reducers/userDataList";
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from 'react-redux';
import {queryFetch} from "../../services/Api";

interface IGETList {
    data: {
        updateTodo: UpdateTodoListProps
    }
}

interface UpdateTodoListProps {
    completed: boolean,
    title: string
}

const UserDetails: FC = () => {

    const { dataUser } = useSelector<IReduxState, UserDataList>((state) => state.userDataList)
    const { id } = useParams<{id?: string}>();
    const history = useHistory();
    const [todoList, setTodoList] = useState<boolean>(false);
    const [isChecked, setIsChecked ] = useState<boolean>(false);
    const dispatch = useDispatch();

    const usersDetails = dataUser?.data.users.data.find(data => {
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

    const handleCompletedStatus = (e: React.FormEvent<HTMLInputElement>) => {
        const isCheckedInput =  e.currentTarget.checked;
        const id = parseInt(e.currentTarget.value, 10);

        queryFetch<IGETList>(`
            mutation {
                updateTodo(id: ${id}, input: {completed: ${isCheckedInput}}) {
                    completed,
                    title
              }
            }`)
            .then((response) => {
                setIsChecked(isCheckedInput)
                dispatch({type: UserActionTypes.UPDATE, payload: true});
            })
    }

    const handleDeleteList = (id: string) => {
        const idList = parseInt(id, 10);

        queryFetch<IGETList>(`
            mutation {
                deleteTodo(id: ${idList}) 
                }
            `)
            .then(() => {
                dispatch({type: UserActionTypes.UPDATE, payload: true});
            })
    }


    return !dataUser?.data.users.data.length ? (
        <></>
    ) : (
        <UserDetailsWrapper className="container">
            <div className="name"> Name: {usersDetails!.username}</div>
            {todoList ? <AddTodoListModal closeModal={handleCloseModal} /> : ''}
            <div className="todoList">
                {usersDetails?.todos.data.map((todo, index) => (
                    <div key={index} className="todoList__box">
                        <div className="todoList__titleBox" key={index}>
                            <span><strong>Title:</strong> {todo.title}</span>
                            <div>
                                <Checkbox
                                    value={todo.id}
                                    onChange={(e) => handleCompletedStatus(e)}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                    // checked={isChecked}
                                />
                                <DeleteIcon
                                    data-id={todo.id}
                                    onClick={() => handleDeleteList(todo.id)}
                                    className="todoList__delete" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link to={Routes.HOME} />
            <ArrowBackIcon className="arrowBack" onClick={redirectToHomePage}/>
            <Button className="addTodoList" variant="contained" color="secondary" onClick={handleOpenAddTodoListModal}>Add todolist</Button>
        </UserDetailsWrapper>
    )
}

export default UserDetails;
