// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function appendDriver(name) {
    let newDrivers = [...drivers, name];
    return newDrivers;
}

function prependDriver(name) {
    let newerDrivers = [name, ...drivers];
    return newerDrivers;
}

function removeLastDriver() {
    let noLastDriver = drivers.slice(0, drivers.length - 1);
    return noLastDriver;
}

function removeFirstDriver() {
    let noFirstDriver = drivers.slice(1, drivers.length);
    return noFirstDriver
}