class Fila {
    constructor(t = 10){
        this.capacidade;
        this.dados = [];
        this.inico = 1;
        this.fim = 1;
    }

    enqueue(newData){
        if (this.isFull()){
            throw new Error ("Overflow");
        } else {
            this.dados[this.fim] = newData;

            if(this.fim == this.capacidade){
                this.fim = 0
            } else {
                this.fim = this.fim + 1;
            }
        }    
    }

    dequeue(){
        if (this.isEmpty()){
            throw new Error("Underflow") 
        } else {
            let result = this.dados[this.inicio];
            if(this.inico === this.capacidade){
                this.inico = 0;
            } else {
                this.inico =  this.inico + 1;
            }
        }
          
    }

    front(){
       if(!this.isEmpty()){
           return this.dados[this.inico];
       }
    }


    isEmpty(){
        return this.inico === this.fim;
    }

    isFull(){
        return this.inico === this.fim + 1;
    }

    length(){
        if(this.isEmpty()){
            return 0;
        } else if (this.inico < this.fim){
            return this.fim - this.inico;
        } else {
            return this.capacidade - this.inico + this.fim + 1;
        }
    }

    clear(){
        this.inico = 1;
        this.fim = 1;
    }

    toString(){

    }
}


export default Fila_Circular;