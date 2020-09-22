class Node{
    constructor(dado){
        this.dado = dado;
        this.proximo = null;
    }
}

class Lista{
    constructor(){
        this.head = new Node();
    }

    add(dado){

        let novo_no = new Node(dado);

        novo_no.proximo = this.head.proximo;
        this.head.proximo = novo_no;
    }

    append(dado){
        let novo_no = new Node(dado);
        
        if (this.isEmpty()){
            this.head.proximo = novo_no;
        } else {
            let aux = this.head.proximo;
            while(aux.proximo !== null){
                aux = aux.proximo;
            }

            aux.proximo = novo_no;
        }
    }

    removeBeggining(){

    }

    removeEnd() {

    }

    last(){

    }

    isEmpty(){
        return this.head.proximo === null;
    }

    toString(){
        let aux = this.head.proximo;
        let result = "";

        while (aux !== null){
            result += aux.dado + (aux.proximo ? "->" : "");
            aux = aux.proximo;
        }
        return result;
    }


}