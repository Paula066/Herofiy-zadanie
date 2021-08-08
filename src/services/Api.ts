const headers = {
    "Content-Type": "application/json"
}

export function queryFetch<T>(query: Object): Promise<T> {
    return fetch('https://graphqlzero.almansi.me/api', {
        method: 'POST',
        headers: {
            ...headers,
        },
        body: JSON.stringify({
            query: query
        }),
        mode: 'cors'
    })
        .then(response => response.json())
}

