import React, {FC, useState} from "react";
import {AddTodoListModalWrapperOverlay, AddTodoListModalWrapper} from './styled'
import CloseButton from '../CloseButton/CloseButton'
import {queryFetch} from "../../services/Api";

interface AddTodoListModalProps {
    closeModal: () => void;
}

interface IGETList {
    data: {
        createTodo: ToDoListProps
    }
}

interface ToDoListProps {
    completed: boolean,
    id: string,
    title: string
}

const AddTodoListModal: FC<AddTodoListModalProps> = ({closeModal}) => {

    const [titleTodo, setTitleTodo] = useState('');
    const [todoLists, setTodoList] = useState<ToDoListProps>();

    const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTitleTodo(value)
    }

    const handleCreateToDoList = () => {
        if (!titleTodo) return;
        queryFetch<IGETList>(`
            mutation {
                createTodo(input: {title: "${titleTodo}", completed: false}) {
                    completed,
                    title,
                    id
                }
            }`)
            .then(response => {
                console.log(response)
                setTodoList(response.data.createTodo)
                // closeModal()
            })
    }

    console.log(todoLists);

    return (
        <>
            <AddTodoListModalWrapperOverlay />
            <AddTodoListModalWrapper>
                <p>Todolist name</p>
                <div>
                    {todoLists?.title}
                </div>
                <input onChange={handleInputValue} placeholder="New list ..." type="text"/>
                <button onClick={handleCreateToDoList}>create</button>
                <CloseButton onClick={closeModal} />
            </AddTodoListModalWrapper>
        </>

    )
}

export default AddTodoListModal;
