import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';




@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 4000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name:'Vegeta',
    power: 8000
  }]


  addCharacter(character:Character):void {
    const NewCharacter: Character = { id: uuid(),...character
    };
    this.characters.push(NewCharacter);
  }

  deleteCharacterByID(id:string):void{
    this.characters = this.characters.filter(character => character.id !== id );
  }



}
