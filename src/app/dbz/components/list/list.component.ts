import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  //Propiedad para emitir valores
  @Output()
  public onDeleteID: EventEmitter<string> = new EventEmitter();

  //Propiedad para insertar valores
  @Input()
  public listCharacter: Character[] = [{
    name: 'Trunks',
    power: 10
  }];




  onDeleteCharacter(id?:string):void {

    if(!id) return;

    console.log("Este es el ID: ", id)

    this.onDeleteID.emit(id);
  }

}
