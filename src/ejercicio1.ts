interface Figura {
    calcularArea():number;
    calcularPerimetro():number;
}

class Cuadrados implements Figura {
   lado:number;

   constructor(public l1:number){
       this.lado = l1
   }

   calcularArea():number{
     return this.lado*this.lado
   };

   calcularPerimetro():number{
    return this.lado * 4
   }

}

class Circulo implements Figura {
    radio : number;
    pi: any = 3.14

    constructor(r:number){
        this.radio=r;
    }
  
    calcularArea():number{
      return this.pi * this.radio * this.radio;
    }

    calcularPerimetro():number{
        return this.pi * (this.radio*2)
    }
}

const AreaCirculo = new Circulo(6);
console.log('el area del circulo es : ', AreaCirculo.calcularArea());
console.log('el perimetro del circulo es: ', AreaCirculo.calcularPerimetro());
