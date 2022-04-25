// El scope global me permite acceder a esas variables que fueron definidas en ese scope global y me permite acceder a cada uno de esos valores.

var hello = 'Hello';
var hello = "Hello +";
let world = "World";
const helloWorld = "Hello World!";

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();


const helloWorld1 = () => {
    globalVar = 'im global'
}

helloWorld1();
console.log(globalVar)


const anotherFunction1 = () => {
    var localVar = globalVar = 'Im global';
}

anotherFunction1();
console.log(globalVar);





