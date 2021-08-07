const headers = {
    "Content-Type": "application/json"
}

class Api {
    static post(endpoint: string, body: any) {
        return fetch(endpoint, {
            method: 'POST',
            headers: {
                ...headers,
            },
            body: JSON.stringify(body),
            mode: 'cors'
        })
            .then(response => response.json())
    }
}

export default Api;
