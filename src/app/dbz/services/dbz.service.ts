import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'; //paquete que genera ids

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

        public characters: Character[] =[
            {
            id: uuid(), //genera ids según el paquete uuid
            name:'Krillin',
            power:1000}
            ,
            {
            id: uuid(),    
            name: 'Goku',
            power:9500}
            ,
            {
            id: uuid(),
            name: 'Vegeta',
            power: 8000
            }
        
        ];
        
        addCharacter (character: Character):void{
                                              //pone dentro del objeto la propiedad 'id'  
            const newCharacter : Character = {id: uuid(),...character}
            
            this.characters.push(newCharacter);
        }
        
        deleteCharacterById(id:string){
            
            //this.characters.splice(index,1); //(codigo para eliminar según el indice)
            this.characters = this.characters.filter(character => character.id !== id);
        } 
    
}