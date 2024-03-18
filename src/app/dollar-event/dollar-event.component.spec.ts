import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollarEventComponent } from './dollar-event.component';

describe('DollarEventComponent', () => {
  let component: DollarEventComponent;
  let fixture: ComponentFixture<DollarEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DollarEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DollarEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
