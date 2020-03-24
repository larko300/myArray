class myArray {
    constructor(){
        this.length = 0;
        for(let i = 0; i < arguments.length; i++){
            this.length++;
            this[i] = arguments[i];
        }
    }
    push(){
        for(let i = 0; i < arguments.length; i++){
            this[this.length] = arguments[i];
            this.length++;
        }
    }
    forEach(cb){
        for(let i = 0; i < this.length; i++){
            cb(this[i], i, this);
        }
    }
}