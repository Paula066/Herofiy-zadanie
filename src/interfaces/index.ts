export interface IGETUsers {
    data: {
        users: {
            data: UsersData[]
        }
    }
}


export interface UsersData {
    email: string,
    id: string,
    name: string,
    username: string,
    website: string,
    phone: string,
    address: Address
    company: Company,
    todos: Todos

}

export interface Address {
    street: string,
    city: string
}

export interface Company {
    name: string
}

export interface Todos {
    data: Todo[]
}

export interface Todo {
    id: string,
    title: string,
    completed: Boolean,
    user: UsersData
}

