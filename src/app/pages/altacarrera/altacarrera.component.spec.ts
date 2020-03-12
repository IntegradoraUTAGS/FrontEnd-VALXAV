import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AltacarreraComponent } from './altacarrera.component';

describe('AltacarreraComponent', () => {
  let component: AltacarreraComponent;
  let fixture: ComponentFixture<AltacarreraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltacarreraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltacarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
