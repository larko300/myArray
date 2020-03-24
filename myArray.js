class myArray {
    constructor(){
        this.length = 0;
        for(let i = 0; i < arguments.length; i++){
            this.length++;
            this[i] = arguments[i];
        }
    }
}