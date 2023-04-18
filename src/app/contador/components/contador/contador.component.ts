import { Component } from '@angular/core';

@Component({
    //como yo quiero utilizar en el html
    //componentes personalizados tengan un prefijo (app)
    selector: 'app-contador',
    template: `
    
    <button (click)="increaseBy()"> +1 </button>
    <span> {{numero}} </span>
    <button (click)="decreaseBy()"> -1 </button>
    <div><button (click)="resetNumber()">Reset</button></div>
    
    
    `
})

export class contadorComponent{
     // es una clase llamada 'contadorComponente'
  public numero:number = 10;//propiedad de clase llamada numero de tipo número
  
  //metodo de clase
  increaseBy():void {
    this.numero += 1;
    }

  decreaseBy():void {
    this.numero -= 1;
    }

  resetNumber():void{
    this.numero = 10;
    }
}

