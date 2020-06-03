const GIST_URI = "https://api.github.com/users/hising/gists";

export const withCallback = (callback) => {
    let req = new XMLHttpRequest();
    req.onload = (data) => {
        callback(JSON.parse(data.target.response));
    };
    req.open("GET", GIST_URI);
    req.send();
};

export const callbackPromise = () =>
    new Promise((resolve, reject) => {
        fetch(GIST_URI)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch(() => {
                reject("It smashed");
            });
    });

export const callbackAsync = async () => {
    try {
        let response = await fetch(GIST_URI);
        return await response.json();
    } catch (e) {
        console.error(e);
    }
    return {};
};

export const usePromiseAsAsync = async () => {
    return await callbackPromise();
};
