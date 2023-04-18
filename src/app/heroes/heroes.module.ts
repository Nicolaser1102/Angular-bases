import { NgModule } from '@angular/core';
//cuando se hacen nuevos modulos que incluyan directivas (en este caso *ngIf ,se debe importar el modulo de 
//Common Module en la parte de los imports para que funcione la lógica 
import {CommonModule} from '@angular/common';




//importar los componentes del modulo heroes
import { HeroeComponent } from './heroe/heroe.component';
import { ListaComponent } from './lista/lista.component';


@NgModule({

    declarations :[
        HeroeComponent,
        ListaComponent
    ],
    exports:[
        HeroeComponent,
        ListaComponent
    ],
    imports:[
        CommonModule
    ]
})

export class heroesModule{}