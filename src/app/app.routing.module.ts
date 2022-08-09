import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { RoutingComponentOneComponent } from './routing-component-one/routing-component-one.component';
import { RoutingComponentTwoComponent } from './routing-component-two/routing-component-two.component';
import { YourGuardGuard } from './your-guard.guard';

const routes: Routes = [{
    path: 'routing-component-one', component: RoutingComponentOneComponent,
    children: [
      {path: 'child-a', component: ChildAComponent},
      {path: 'child-b', component: ChildBComponent},
    ]
  },{
    path: 'routing-component-two', component: RoutingComponentTwoComponent, canActivate: [YourGuardGuard]
  },{
    path: '**', component: RoutingComponentOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
