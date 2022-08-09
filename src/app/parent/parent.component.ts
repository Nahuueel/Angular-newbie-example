import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild(ChildComponent) child: any;

  constructor() { }

  ngOnInit(): void {
  }

  receiveMessage(msg: any){ //función que alerta un mensaje el cual recive como parametro
    alert(msg);
  }

  ngAfterViewInit(){ //life cycle hook que ejecuta un codigo el momento despues que la vista de haya inicializado
    alert(this.child.message); //alerta utilizando ViewChild para poder acceder a los atributos del componente hijo desde la logica del componente padre
  }

}
