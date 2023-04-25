import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  //decorador que permite recibir datos del padre o que se comunique con el padre
  @Input()
  public listCharacter:Character [] = [ 
                                  //la cual ahora hace que el componente pueda recibir una propiedad
                                        //de tipo character list
    // {name:'Trunks',
    // power:10        //estos datos ahora serán los valores por defecto si no se pasa nada
    // }
  ]; //por lo general se lo deja vacío

  //se crea una propiedad llamada onDelete que pueda emitir valores según lo genérico (en este caso 'number')
  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter();
  
  onDeleteCharacter(id?:string):void{
  //se llama a la propiedad y que su valor cambie y emita
  if (!id)  return; //SI NO ENCUENTRA LA PROPIEDAD ID NO LLAMA A LA FUNCIÓN DE EMITIR


  this.onDelete.emit(id);
  }

}
