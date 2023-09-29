import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {

  //proepiedades de clase
  public heroeNombres: string [] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  //propiedad opcional que recogerá los datos del método
  public heroeBorrado?:string;

  //método que quita el último valor del arreglo 'heroeNombres'
  removerUltimoHeroe():void{
    this.heroeBorrado = this.heroeNombres.pop();
  }
}
