import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //nombre del componente
  templateUrl: './app.component.html', //ruta de la hoja con html
  styleUrls: ['./app.component.css'] //ruta con la hoja de estilos a utilizar
})
export class AppComponent { // es una clase llamada Componente
  public title:string = 'Contador App'; //propieda de la clase llamada 'titulo'
  // public numero:number = 10;//propiedad de clase llamada numero de tipo número
  
  // //metodo de clase
  // increaseBy():void {
  //   this.numero += 1;
  //   }

  // decreaseBy():void {
  //   this.numero -= 1;
  //   }

  // resetNumber():void{
  //   this.numero = 10;
  //   }
}
