//El Scope global, nos permite acceder a una variable en un bloque de código o en una función y solamente en nuestra estructura y de esta forma nosotros vamos a poder ejecutar o llamar a este valor solamente en esta estructura.


const helloWorld = () => {
    const hello = 'Hello World';
    console.log(hello);
};

helloWorld();
console.log(hello);

var scope = "i am global";

const functionScope =  () => {
    var scope = "i am just a local"
    const func = () => {
        return scope
    }
    console.log(func());
};

functionScope();
console.log(scope);