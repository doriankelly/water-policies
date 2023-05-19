
export const getLocal = () => {

    return JSON.parse(localStorage.getItem("answers")) || [];
}


export const setLocal = (data) => {
    return localStorage.setItem("answers", JSON.stringify(data));
}