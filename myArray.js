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
    map(cb){
        const newArr = new myArray();
        for(let i = 0; i < this.length; i++){
            newArr.push(cb(this[i], i, this));
        }
        return newArr;
    }
    pop(){
        this.length--;
        const newArr = new myArray();
        for(let i = 0; i < this.length; i++){
            newArr.push(this[i]);
        }
        return newArr;
    }
    shift(){
        const newArr = new myArray();
        for(let i = 1; i < this.length; i++){
            newArr.push(this[i]);
        }
        this.length--;
        return newArr;
    }
    unshift(){
        if(arguments.length !== 0){
            const Arr = new myArray();
            for(let i = this.length + arguments.length - 1; i >= 0; i--){
                Arr.push(this[i]);
            }
            const newArr = new myArray();
            for(let i = 0; i < this.length + arguments.length; i++){
                if(Arr[i] == undefined){
                    newArr.push(arguments[i]);                    }
            }
            for(let i = this.length + arguments.length; i > 0; i--){
                if(Arr[i] !== undefined){
                    newArr.push(Arr[i]);
                }
            }
            return newArr;
        }
    }
}