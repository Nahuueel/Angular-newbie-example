import { Component, OnInit, OnDestroy, Renderer2, ElementRef} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogService } from './log.service';
import { pet } from './pet.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Angular-newbie';

  /*
  Life Cycle Hooks
  Los Life Cycle Hooks son una funcionalidad de angular que sirven para crear comportamientos en un componente
  de acuerdo a los tiempos de vida. Por ejemplo, se pueden para hacer un "fetch" para recivir información en el momento
  que la aplicación se ejecute.
  */

  intervalSub: any;

  ngOnInit(){ // Este Life Cycle Hook se ejecuta cuando la aplicación de inicializa
    this.intervalSub = setInterval(() =>{
      console.log('Hello from ngOnInit');
    }, 1000);

    this.setCurrentClasses();
    this.setCurrentStyles();

    this.logservice.logMessage('Hello'); //Dependency Injection related line
    this.renderer.setStyle(this.host.nativeElement,'color','white'); //Dependency Injection
  }

  ngOnDestroy(){ // Este Life Cycle Hook se utiliza cuando una directiva, linea o servicio se haya cerrado para asi realizar una limpieza de alguna instancia.
    if(this.intervalSub){
      clearInterval(this.intervalSub);
    }
  }

  /*
  Text Interpoletion
  Es una funcionalidad de Angular la cual se emplea para mostrar información de la clase de typescript en el "HTML tamplate"
  La interpolación se utiliza empleando una doble llave para mostrar la logica de la clase en el template.
  Esta funcion se utiliza para agregarle dinamisidad a la pagina, aunque se ve limitada con ciertas cosas. Dentro de las llaves no se pueden emplear ciertos operadores
  como lo son +=, -=, =, etc. Aun asi, con esta funcionalidad se pueden mostrar variables, cuentas simples y llamar a metodos.
  */

  getMin(a: number,b: number){
    if(a<b){
      return a;
    } return b;
  }

  /*
  Template statements
  */

  showText = false;

  toggleText(event: any): void{
    this.showText = !this.showText;
    console.log(event);
  }

  timeDate = new Date;

  itemImageUrl = '../assets/phone.jpg';

  onSave(){
    console.log('Click on save');
  }

  deleteItem(item: any){
    console.log(item);
  }

  fontSizepx = 16;

  callPhone(phone: string){
    console.log(phone);
  }

/*  */

  isSpecial = true;
  currentClasses = {};
  currentStyle = {};
  directivesName = 'bob';

  setCurrentClasses(){
    this.currentClasses = {
      saveable: true,
      modified: false,
      special: true
    }
  }

  setCurrentStyles(){
    this.currentStyle ={
      'font-style': 'italic',
      'font-weight': 'bold'
    }
  }

  isactive = true;
  items = [
    {name: 'bob'},
    {name: 'john'},
    {name: 'monika'}
  ]

  constructor(private logservice: LogService,
    private renderer: Renderer2,
    private host: ElementRef){}

/* template driven forms */

  species = ['fish', 'cat', 'dog'];
  model = new pet(1,'goldie',this.species[0]);
  submited = false;

  onSubmit(){
    this.submited = true;
  }

/* reactive forms */

nameReactiveForms = new FormControl('');

updateName(){
  this.nameReactiveForms.setValue('Nancy');
}

profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
})

onSubmitTwo(){
  console.warn(this.profileForm.value)
}

/*Form Validation*/

nameInput = '';

validationForm = new FormGroup({
  name: new FormControl(this.nameInput, [
    Validators.required,
    Validators.minLength(4)
  ])
});

get name() {
  return this.validationForm.get('name');
}

}
