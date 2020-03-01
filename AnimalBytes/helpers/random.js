function getRandomIndex() {
    var num = Math.random();
    if(num < 0.33) {
        return 0;
    }
    else if(num < 0.66) {
        return 1;
    }
    else {
        return 2;
    }
}

function getRandomArr() {
    return [Math.random(), Math.random(), Math.random()]
}

export function generateRandomData(animal) {
    var data = [];
    var i;
    for (i = 1; i < 20; i++){
        var moods = ["Angry", "Normal", "Upset"];
        var randomNums = getRandomArr();
        var randomIndex = getRandomIndex();
        data.push({
            key: i,
            animal: animal.toLowerCase(),
            ourprediction: {
                mood: moods[randomIndex],
                probability: randomNums[randomIndex]
            },
            probabilities: {
                Angry: randomNums[0],
                Normal: randomNums[1],
                Upset: randomNums[2]
            },
            time: "Sun Mar  1 03:24:12 2020"
        });
    }
    return data;
}