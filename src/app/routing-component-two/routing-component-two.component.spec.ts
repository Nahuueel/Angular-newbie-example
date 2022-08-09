import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingComponentTwoComponent } from './routing-component-two.component';

describe('RoutingComponentTwoComponent', () => {
  let component: RoutingComponentTwoComponent;
  let fixture: ComponentFixture<RoutingComponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingComponentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingComponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
