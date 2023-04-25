import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-Character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  //instrucción que permite emitir todo tipo de valores
  //Y la instrucción con el decorador ya se tiene el poder de emitir caracteres
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 300
  }

  emitCharacter():void{
    console.log(this.character);

    if (this.character.name.length === 0)
      return;
    else
    //codigo que emite 
    this.onNewCharacter.emit(this.character);

    
    //reiniciar los valores
    this.character = {name :'', power:0
    };
  } 

}
