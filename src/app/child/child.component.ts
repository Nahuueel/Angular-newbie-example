import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>(); //se inicializa un evento emizor de tipo String

  @Input() childMessage: string | undefined; // se crea un atributo tipo input, el cual el otro componente puede establecer su valor.

  message = 'message from child!'; // Atributo "Message" al cual el componente padre accederá luego

  constructor() { }

  ngOnInit(): void {
  }

  //Funcion con un evetno el cual emite un string corto, esa funcion es llamada luego desde el template
  sendMessage(){
    this.messageEvent.emit('Hello from child');
  }

}
