import Pilha from "../Pilha"

export default class Questao2{
    constructor(size = 10){
        this.p1 = new Pilha(size);
        this.p2 = new Pilha(size);

    }

    enqueue(newData){
        this.p2.push(newData);
        this.p1.push(this.p2.pop())
    }

    dequeue(){
    while(this.p1.topo != 0) {
        this.p2.push(this.p1.pop())
    }

    const resposta = this.p1.pop()

    while(!this.p2.isEmpty()){
        this.p1.push(this.p2.pop())
    }

    return resposta
    }

    size() {
        return this.p1.size()
    }

    front() {
        return this.pilha1.dados[0]
    }
}