interface Person {
  name: string;
  age: number;
}

type Car = {
    name : string,
}

//how to extend

interface Businessment extends Person {
  salary: number;
}

interface Student extends Person {
  courses: string[];
}

//extending with types

type RaceCar = {
    speed: number
} & Car




export function play() {
  const person: Person = {
    name: "John",
    age: 36,
  };

  const student: Student = {
    name: "John",
    age: 36,
    courses: ['english', 'graphics']
  };

  const bmw: RaceCar = {
    name : 'BMW 12M',
    speed: 122
  }



}



