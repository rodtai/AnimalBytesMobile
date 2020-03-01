export function getDate(dt) {
    let monStr = dt.substring(4, 7);
    let month = getMonthAsInt(monStr);
    let day = dt.substring(8,10);
    if(day.indexOf(' ') >= 0){
        day = day.replace(" ", "0");
    }
    let time = dt.substring(11, 19);
    let year = dt.substring(20, 24);
    let dtStr = `${year}-${day}-${month}T${time}`;
    let dateObj = Date.parse(dtStr);
    var diff = Math.abs(dateObj - Date.now());
    if(diff < 3.6e+6){
        return (diff * 1.66667e-5).toFixed(0) + ' Minutes ago';
    }
    else if(diff < 8.64e+7){
        return (diff * 2.77778e-7).toFixed(0) + ' Hours ago';
    }
    else {
        return `${monStr} ${day}, ${year}`;
    }
}

function getMonthAsInt(mon) {
    let monthToIntDict = {
        'Jan': '01',
        'Feb': '02',
        'Mar': '03',
        'Apr': '04',
        'May': '05',
        'Jun': '06',
        'Jul': '07',
        'Aug': '08',
        'Sep': '09',
        'Oct': '10',
        'Nov': '11',
        'Dec': '12'
    };
    return monthToIntDict[mon];
}