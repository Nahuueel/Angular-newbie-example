import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingComponentOneComponent } from './routing-component-one.component';

describe('RoutingComponentOneComponent', () => {
  let component: RoutingComponentOneComponent;
  let fixture: ComponentFixture<RoutingComponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingComponentOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
