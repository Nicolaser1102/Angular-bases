import { NgModule } from "@angular/core";

//Importación del módulo
import { contadorComponent } from "./components/contador/contador.component";




@NgModule({
    declarations:[
        contadorComponent //declaracion del componente contador
    ],
    exports:[ //los exports informan que el recurso está disponible si se quiere ser usado
        contadorComponent
    ]

})

//un module.ts es simplemente una clase con un decorador que permite agrupar las funcionalidades del componente
//y nos permite elegir si queremos que lo vea el "mundo exterior"
export class CounterModule{}