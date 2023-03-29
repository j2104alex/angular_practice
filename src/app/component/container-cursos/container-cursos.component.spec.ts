import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCursosComponent } from './container-cursos.component';

describe('ContainerCursosComponent', () => {
  let component: ContainerCursosComponent;
  let fixture: ComponentFixture<ContainerCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
