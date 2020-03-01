export function sortByKey(a, b) {
    return parseInt(a.id) - parseInt(b.id);
}

export function sortByMood(a, b) {
    if(a.ourprediction.mood < b.ourprediction.mood) {
        return -1;
    }
    else if(a.ourprediction.mood > b.ourprediction.mood) {
        return 1;
    }
    else {
        return 0;
    }
}

export function sortByProb(a, b) {
    return a.ourprediction.probability - b.ourprediction.probability;
}


export function sortByDate(a, b) {
    var dateA = getDate(a.time);
    var dateB = getDate(b.time);
    if(dateA < dateB) {
        return -1;
    }
    else if(dateA > dateB) {
        return 1;
    }
    else {
        return 0;
    }
}