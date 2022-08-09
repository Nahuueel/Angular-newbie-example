import { Component } from "@angular/core";
import { bufferToggle } from "rxjs";

/*
Componentes en angular:
Los componentes en Angular son los bloques fundamentales con los cuales
construimos un aplicación.
-El componente contiene un selector CSS, que define como se usa el componente en un "template".
-Un "HTML Template" que es el que le dara la estructura HTML a la hora de renderizar.
-Una clase de "Typescript" que define su comportamiento.
-Y finalmente su stilo en CSS que aplican al componente.
*/

@Component({
  selector: 'app-hello-world',
  template: '<h1>{{title}}</h1>',
  styles: [`
  h1{
    color: blue;
  }`]
})

export class HelloWorldComponent{
  title = 'Hello World!';
}
