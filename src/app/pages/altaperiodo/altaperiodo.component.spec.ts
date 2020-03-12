import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AltaperiodoComponent } from './altaperiodo.component';

describe('AltaperiodoComponent', () => {
  let component: AltaperiodoComponent;
  let fixture: ComponentFixture<AltaperiodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaperiodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaperiodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
