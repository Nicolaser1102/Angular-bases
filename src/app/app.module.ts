//importaciones de Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';




//se importó los modulos
import { CounterModule } from './contador/contador.module';
import { heroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

//se importó el componente para usar en el módulo (componente principal)
import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent, 
     //añadir nueva clase (borrar ultima letra y despues importarla (es la que tiene detalles))
  
  ],
  imports: [
    BrowserModule, 
    CounterModule,
    heroesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
