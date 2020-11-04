function newFunction(name, age ,country) {
    var name = name || 'alejandro';
    var age = age || 26;
    var country = country || 'Santiago';
    console.log(name, age , country);
}

// es6

function newFunction2(name = 'alejandro', age = 26, country = "CL") {
    console.log(name, age, country);
}

//************************************ */

newFunction();
newFunction2();

let hello = "Hello";
let world = "World";

let epicFrase = hello + ' ' + world;
console.log(epicFrase);

// es6

let epicFrase2 = `${hello} ${world}!`;
console.log(epicFrase2);
