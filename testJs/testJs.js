//? Crear un algoritmo que muestre los números impares entre el 0 y el 100.

const unevenNumbers = () => {
  let uneven = [];
  for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
      uneven.push(i);
    }
  }
  return uneven;
};

console.log(unevenNumbers());

//? Plantear una clase llamada Alumno y definir como atributos su nombre y su edad. En el constructor realizar el ingreso de datos. Definir otros dos métodos para imprimir los datos ingresados y un mensaje si es mayor o no de edad (edad >= 18)

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  print() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
    if (this.age < 18) {
      console.log(`${this.name} is underage!🐣`);
    } else {
      console.log(`${this.name} is an adult👴`);
    }
  }
}

const student1 = new Student("Gamaliel", 16);
const student2 = new Student("Sol", 28);
student1.print();
student2.print();

//? JavaScript ES6: Dados los siguientes array, imprimir por consola los elementos del array “y” que no se encuentran en el array “x” utilizando para tal fin una única línea de código. const x = ["n", "bro", "c", "|"]; const y = ["d", "n", "l", "bro", "g"];

const x = ["n", "bro", "c", "|"];
const y = ["d", "n", "l", "bro", "g"];

const z = y.filter((e) => !x.includes(e));

console.log(z);
