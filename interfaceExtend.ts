interface Person {
  name: string;
  age: number;
  kind: 'good' | 'bad';
}

type Car = {
    name : string,
}

//how to extend

interface Businessment extends Person {
  salary: number;
  kind: 'good';
}

interface Academic extends Person {
    grade: string;
    kind: 'bad';
  }

interface Student extends Person {
  courses: string[];
}

//extending with types

type RaceCar = {
    speed: number
} & Car


//narrowing with interfaces

type Human = Academic | Businessment ;



export function play() {
  const person: Person = {
    name: "John",
    age: 36,
    kind: 'good'
  };

  const student: Student = {
    name: "John",
    kind: 'bad',
    age: 36,
    courses: ['english', 'graphics']
  };

  const bmw: RaceCar = {
    name : 'BMW 12M',
    speed: 122
  }


  //narrowing
  
  const callHuman = (human: Human) => {

    if(human.kind === 'bad'){
        human.grade
    }else{
        human.salary
    }
  }



}



