const URL_BASE = "https://todo-para-isa.zeabur.app"

export const getTodos = async () => {
    const result = await fetch(`${URL_BASE}/v1/todos`)
    return result.json()
}

export const deleteTodoById = async id => {
    const result = await fetch(`${URL_BASE}/v1/todos/${id}`, {
        method: 'DELETE'
    })

    return result
}

export const updateTodo = async (id, body) => {
    const result = await fetch(`${URL_BASE}/v1/todos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Loqueseme-ocurra': 'algosecreto'
        },
        body: JSON.stringify(body)
    })

    return result.json()
}

export const create = async (body) => {
    const result = await fetch(`${URL_BASE}/v1/todos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
}
