import Fila from '../Fila'

export default class Questao1{
    
    constructor(size = 10){
        this.f1 = new Fila(size);
        this.f2 = new Fila(size);
    }
    
    push(newData){
        this.f2.enqueue(newData);
        this.f1.enqueue(this.f2.dequeue());
    }

    pop(){
        while(this.f1.inicio + 1 != this.f1.fim){
            this.f2.enqueue(this.f1.dequeue());
        }

        const retorno = this.f1.dequeue();

        while(!this.f2.isEmpty()){
            this.f1.enqueue(this.f2.dequeue());
        }
        return retorno;
    }

    size(){
        return this.f1.size();
    }

    toString(){
        return this.f1.toString()
    }
}
