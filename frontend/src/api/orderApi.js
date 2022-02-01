

export const addOrder = (orderObj) => {
    let DEV_URL = '';

    if (process.env.NODE_ENV === 'development') {
        DEV_URL = 'http://localhost:3000';
    }

    const requestOptionsPost = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderObj)
    };

    fetch(`${DEV_URL}/orders/add`, requestOptionsPost)
        .then(response => response.json())
        .then(data => console.log("Order added: " +data));
}

export const allOrder = async () => {
    let DEV_URL = '';

    if (process.env.NODE_ENV === 'development') {
        DEV_URL = 'http://localhost:3000';
    }

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    const res = await fetch(`${DEV_URL}/orders/all`, requestOptions)
    return await res.json();
}

export const removeOrder = (id) => {
    let DEV_URL = '';

    if (process.env.NODE_ENV === 'development') {
        DEV_URL = 'http://localhost:3000';
    }

    const requestOptionsPost = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({id: id})
    };

    fetch(`${DEV_URL}/orders/remove`, requestOptionsPost)
        .then(response => response.json())
        .then(data => console.log("Order removed: " +data));
}



export const getAllOrdersOfLastWeek = async () => {
    let DEV_URL = '';

    if (process.env.NODE_ENV === 'development') {
        DEV_URL = 'http://localhost:3000';
    }

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    const res = await fetch(`${DEV_URL}/orders/weekly`, requestOptions)
    return await res.json();
}