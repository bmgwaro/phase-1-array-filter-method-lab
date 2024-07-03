// Code your solution here
function findMatching(drivers, name){
    const matching=drivers.filter(drivers=>drivers.toLowerCase()===name.toLowerCase())
    return matching;
}
debugger;

function fuzzyMatch(drivers, firstletter){
    const letterMatch=drivers.filter(drivers=>drivers.startsWith(firstletter))
    return letterMatch;
}
debugger;

function matchName(drivers, name){
    return drivers.filter(drivers=>drivers.name===name)
}
debugger;