import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GreetingsPipesPipe } from './greetings-pipes.pipe';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { AppSizerComponent } from './app-sizer/app-sizer.component';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { LogService } from './log.service';
import { RoutingComponentOneComponent } from './routing-component-one/routing-component-one.component';
import { RoutingComponentTwoComponent } from './routing-component-two/routing-component-two.component';
import { FormGroup,FormControl } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParentComponent,
    ChildComponent,
    GreetingsPipesPipe,
    ItemDetailsComponent,
    AppSizerComponent,
    HighlightDirective,
    RoutingComponentOneComponent,
    RoutingComponentTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
