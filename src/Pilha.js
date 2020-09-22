class Pilha{

    constructor(tamanho = 10){
        //Define o tamanho da pilha
        this.tamanhoMax = this.tamanho;
        //Inicializa o vetor como dados 
        this.dados = [];
        //Inicia a pilha com o topo como -1 ~sem nenhum item informado~
        this.topo = -1;                  
    }

    push(value){
        //Se a pilha estiver cheia lança uma exceção
        if (this.isFull()) {
			throw new Error ("Overflow");    
        } else {
            // valor é atribuido ao dado na posição do topo e retorna
            // posteriormente incrementa o valor do topo atualizando-o
            return this.dados[this.topo++]=this.value; 
        }                                       
    }

    pop(){
        //Se a pilha estiver vazia lança uma exceção
        if(this.isEmpty()){
            throw new Error ("Pilha Vazia!!!");               
        } else {
            //retorna o valor do topo e posteriormente decrementa ele
            return this.dados[this.topo--];     
        }
    }

    top(){
        //Se a pilha estiver vazia lança uma exceção
        if (this.isEmpty()){
            throw new Error("A pilha está vazia!!!");
        } else {
            //retorna o valor do topo da pilha
            return this.dados[this.top];
        }
    }

    clean(){
        this.topo = - 1;
    }

    size(){
        return this.topo + 1;
    }

    isEmpty(){
        //se o tamanho da pilha for igual a 0 significa que esta vazia
        return this.tamanho === 0;              
    }

    isFull(){
        //se o tamanho for igual ao tamanho maximo inicial, a pilha está lotada
        return this.tamanho === this.tamanhoMax; 
    }
}
export default Pilha;