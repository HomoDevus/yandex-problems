const fs = require('fs')

function countLogDays(logs) {
    let counter = 1;

    for (let i = 1; i < logs.length; i++) {
        const currentLog = logs[i]
        const prevLog = logs[i - 1]

        if (currentLog === prevLog || compareTimes(prevLog, currentLog)) {
            counter++
        }
    }

    return counter
}

function compareTimes(timeA, timeB) { // If A > B Return TRUE
    const timeANumbers = timeToNumbers(timeA)
    const timeBNumbers = timeToNumbers(timeB)

    for (let i = 0; i < timeANumbers.length; i++) {
        if (timeANumbers[i] > timeBNumbers[i]) return true;
        else if (timeANumbers[i] < timeBNumbers[i]) break;
    }

    return false;
}

function timeToNumbers(time) {
    return time.split(":").map(item => Number(item))
}

let fileContent = fs.readFileSync('input.txt', 'utf8');

let times = fileContent.trim().split('\n').slice(1)

let result = countLogDays(times)

fs.writeFileSync('output.txt', result.toString())