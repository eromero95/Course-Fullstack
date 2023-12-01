class PilaLIFO <T>{
    public elementos: T[];
    
    constructor(){
        this.elementos = [];
    }

    push(elemento:T):void{
        this.elementos.push(elemento);
    }

    pop():T | undefined{
       return this.elementos.pop();
    }

    size():number{
        return this.elementos.length
    }

  
}

const pila = new PilaLIFO<number>();
pila.push(1);
pila.push(2);
pila.push(3);

console.log('Tamaño de la pila: ',pila.size());






