interface Person {
        name : string,
        age : number
}

// interface LoginFn {
//     (name:string, age:number):number
// }

type LoginFn = (name:string,age?:number) => number;
// ? here to declear that it is optional

//functions are more preferrable for type 

export function play(){
    console.log("Hello World")

    const name:string = 'Alapottra';
    const age:number = 23;

    const kosol:Person ={
        name : 'Kosol',
        age :35
    }


    //calling the function with a specific interface
    const login:LoginFn = (name:string,age:number = 0) => {
        const info = `Name : ${name} , Age : ${age}`;
        console.log(info);
        return 0;
        //it must return a number
        // = 0 specifiying that 0 is the default value
    }


    // function loginIngo(name:string,age:number){
    //     const info = `Name : ${name} , Age : ${age}`;
    //     console.log(info);
    //     return info;

    // }

    function loginInfoTwo(person:Person){
        const info = `Name : ${person.name} , Age : ${person.age}`;
        console.log(info);
        return info;

    }

    login(name,age);
    loginInfoTwo(kosol)
}