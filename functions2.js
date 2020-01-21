function greeter(name, greetFunc=sayHi) {
    greetFunc(name);
}

function sayHi(name) {
    console.log(`Hi there ${name}`);
}

function sayYo(name) {
    console.log(`Yo ${name}`);
}

greeter("Anna", sayHi);
greeter("Bob", sayYo);
greeter("Sara");