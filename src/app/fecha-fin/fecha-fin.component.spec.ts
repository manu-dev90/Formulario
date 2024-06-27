import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FechaFinComponent } from './fecha-fin.component';

describe('FechaFinComponent', () => {
  let component: FechaFinComponent;
  let fixture: ComponentFixture<FechaFinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FechaFinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FechaFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
