Aquí se crea un nuevo componente por lo cual se llama al decorador componente y 
1. Se le asigna al parámetro selector un nuevo nombre con prefijo (p.e app-contador)
2. Se crea una clase esta vez llamado 'contadorComponent'
3. Se le asigna al parámetro template código html dentro de tildes al reves "``" (donde se escribe) lo que queremos que aparezca en forma de html
4. Dentro de la clase va la lógica escrita en typescript
5. (IMPORTANTE) Se le importa en app.module.ts en la sección declarations y se lo declara
6. Finalmente se lo pone en el app.component.html (template principal) en forma de etiqueta el nombre del selector para implementar el componente