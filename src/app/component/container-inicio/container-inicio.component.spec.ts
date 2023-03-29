import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerInicioComponent } from './container-inicio.component';

describe('ContainerInicioComponent', () => {
  let component: ContainerInicioComponent;
  let fixture: ComponentFixture<ContainerInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
