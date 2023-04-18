import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  public nombre: string = 'Ironman';
  public edad:  number =  45;

  //un getter es una propiedad: que se ve como propiedad PERO es un método
  get nombreCapitalizado():string{
    return this.nombre.toUpperCase();
  }

  //metodo
  getDescripcionHeroe():string{
    return `${this.nombre} - ${this.edad}`;
  }

  //metodo para cambiar el nombre del Heroe a 'Miles Morales'
  cambiarNombreHeroe():void{
    this.nombre = 'Miles Morales';
  }

  //metodo para cambiar la edad del heroe a '21'
  cambiarEdadHeroe():void{
    this.edad = 21;
  }

  //metodo para resetear el formulario
  resetFormulario():void{
    this.nombre = 'Ironman';
    this.edad = 45;
  }
}
