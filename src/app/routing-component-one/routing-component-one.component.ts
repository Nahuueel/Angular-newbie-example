import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-routing-component-one',
  templateUrl: './routing-component-one.component.html',
  styleUrls: ['./routing-component-one.component.css']
})
export class RoutingComponentOneComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  /*  alert(this.route.snapshot.paramMap.get('id'));*/
  }

}
