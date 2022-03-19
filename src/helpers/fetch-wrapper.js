// // helper functions

function handleResponse(response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);
        return data;
    });
}
function get(url, token) {
    const requestOptions = {
        method: 'GET',
        headers: {
            Authorization: token,
        },
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function post(url, body, token) {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        // credentials: "include",
        body: JSON.stringify(body),
    };
    return fetch(url, requestOptions).then(handleResponse);
}

function put(url, body, token) {
    console.log(token, 'Token from put fetch wrapper');
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },

        // headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    };
    return fetch(url, requestOptions).then(handleResponse);
}

// prefixed with underscored because delete is a reserved word in javascript
function remove(url, token) {
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
    };
    return fetch(url, requestOptions).then(handleResponse);
}

export const fetchWrapper = {
    get,
    post,
    put,
    remove,
};
export default {};
