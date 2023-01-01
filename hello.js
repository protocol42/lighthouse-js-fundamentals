{
  const sayHello = function (name) {
    console.log('hello ' + name);

  }

  sayHello('Caliban');
  sayHello('Miranda');
  sayHello('Ferdinand');
}

{
  const sayHelloToConsole = function (name) {
    console.log(name);
  }

  sayHelloToConsole('john');
}

{
  const sayHelloToConsole = function (name) {
    return name;
  }

  const greeting = sayHelloToConsole('john1');

  console.log(greeting);
}


{
  const returnSayHello = function (name) {
    return 'Hello ' + name;
  }

  const greeting = returnSayHello('John');
  console.log(greeting);
}






