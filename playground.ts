type Person = {
        name : string,
        age : number
}

export function play(){
    console.log("Hello World")

    const name:string = 'Alapottra';
    const age:number = 23;

    const kosol:Person ={
        name : 'Kosol',
        age :35
    }

    function loginIngo(name:string,age:number){
        const info = `Name : ${name} , Age : ${age}`;
        console.log(info);
        return info;

    }

    function loginInfoTwo(person:Person){
        const info = `Name : ${person.name} , Age : ${person.age}`;
        console.log(info);
        return info;

    }

    loginIngo(name,age);
    loginInfoTwo(kosol)
}