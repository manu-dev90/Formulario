import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaInicioComponent } from './fecha-inicio.component';

describe('FechaInicioComponent', () => {
  let component: FechaInicioComponent;
  let fixture: ComponentFixture<FechaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechaInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
