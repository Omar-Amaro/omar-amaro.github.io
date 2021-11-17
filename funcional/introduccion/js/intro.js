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


console.log(suma(2,2,sum2));