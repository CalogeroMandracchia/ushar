const HTTP = method => async (url, headers, body) => {
    try {
        const params = { method, headers, body };
        const rawResponse = await fetch(url, params);
        const res = await rawResponse.json();
        return res;
    } catch(error) {
        console.log(error);
    }
}

const GET = HTTP("GET");

export { 
    GET 
};