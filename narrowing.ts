

export function narrow() {
    
    const func = () => {
        const random = Math.random() > 0.5 ? 'Hello' : [12,21,33];

        if(typeof random === 'string'){
            random.toUpperCase();
            //this is narrowing
        }
       
    }


    // array generics 
    function iterate (item : Array<string>) {

        item.forEach(item => console.log(item));



    }

    iterate(['a', 'b', 'c'])





}