//imperativa
const hola ="Paco";
const decirHola =()=>{
    console.log(`Hi ${hola}`)
    //return function(){asds}
}
//decirHola()

//const dHi=(n)=>`Hi ${n}`;

//console.log(dHi("Karla"));

const sum = (a,b)=> a + b;
const sum2 = (a,b) => a-b;
const suma = (a,b,sum) =>sum(a,b);


//console.log(suma(2,2,sum2));

var numbers=[1,5,10,15]

var users=[
    {id:0, age:10, name:"ta"},
    {id:2, age:15, name:"ta"},
    {id:3, age:18, name:"ta"},
]
//map mapea o 
var doubles = users.map((num)=>num.age*3);
//reduce el arreglo a lo que le digamos
const reducer= (previusValue,currentValue)=> previusValue+currentValue;
var reduce= numbers.reduce(reducer, 5);
let filter =numbers.filter((num)=>num>6);
let found =users.find((user)=>user.age>14)

nombre="pablo"
apellido="Gonzales"
edad="18"
var resultado="Pasado el tiempo, ";
resultado = resultado.concat(nombre);
resultado = resultado.concat(" ");
resultado = resultado.concat(apellido);
resultado = resultado.concat(" va a tener ");
resultado = resultado.concat(edad);


const fil = [1, 2, 3, 4];
console.log(fil.fill(1, 2, 4));


const every = (currentValue) => currentValue < 30;
const array1 = [1, 30, 39, 29, 10, 13];
//se supone que da false
console.log(array1.every(every));

var flat = [1, 2, [3, 4]];
console.log(flat);

const inclu = [1, 2, 3];
//da False
console.log(inclu.includes(4));



const pop = ['papitas', 'soda', 'galleta', 'dulce', 'cheto'];
//devuelve el ultimo que es cheto
console.log(pop.pop());

const carros = ['ford', 'chevrolet', 'nissan'];
const cuenta = carros.push('Tesla');
// devuelve la cuenta de carros 4
console.log(cuenta);
//agrega a tesla dentro del array
console.log(carros);

var datos = ['Jose', 'Ana', 'Sofia', 'Pancho', 'Jorge'];
var mujeres = datos.slice(1, 3);
//devuelve los nombres femeninos
console.log(mujeres);

var Juegos = ['Zelda', 'Smash', 'Mario'];
//Ordena los elementos
console.log(Juegos.sort());


const dias = ['lunes', 'martes', 'miercoles', 'viernes'];
dias.splice(3, 0, 'Jueves');
// agrega el viernes en la posición 3
console.log(dias);

dias.splice(4, 1, 'Domingo');
// agrega el domingo remplazando en viernes
console.log(dias);

