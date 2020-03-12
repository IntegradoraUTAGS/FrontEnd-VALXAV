import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AltaespecialidadComponent } from './altaespecialidad.component';

describe('AltaespecialidadComponent', () => {
  let component: AltaespecialidadComponent;
  let fixture: ComponentFixture<AltaespecialidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaespecialidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaespecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
