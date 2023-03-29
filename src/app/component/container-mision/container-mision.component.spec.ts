import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMisionComponent } from './container-mision.component';

describe('ContainerMisionComponent', () => {
  let component: ContainerMisionComponent;
  let fixture: ComponentFixture<ContainerMisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerMisionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerMisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
