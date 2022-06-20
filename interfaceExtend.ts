interface Person {
  name: string;
  age: number;
}

//how to extend

interface Businessment extends Person {
  salary: number;
}

interface Student extends Person {
  courses: string[];
}

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


  
}
