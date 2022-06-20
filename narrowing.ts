

export function narrow() {
    
    const func = () => {
        const random = Math.random() > 0.5 ? 'Hello' : [12,21,33];

        if(typeof random === 'string'){
            random.toUpperCase();
            //this is narrowing
        }
       
    }

}