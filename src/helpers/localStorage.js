
export const getLocal = () => {

    return JSON.parse(localStorage.getItem("answers")) || [];
}


export const setLocal = (data) => {
    return localStorage.setItem("answers", JSON.stringify(data));
}

export const getVisitedLocal = () => {

    return JSON.parse(localStorage.getItem("visited")) || {
        politicsVisited: false,
        droughtVisited: false,
        contaminationVisited: false,
        score: 0
    };

}



export const setVisitedLocal = (data) => {
    return localStorage.setItem("visited", JSON.stringify(data));
}



export const getScoreLocal = () => {

    return JSON.parse(localStorage.getItem("score")) || {}
}


export const setScoreLocal = (data) => {
    return localStorage.setItem("score", JSON.stringify(data));
}