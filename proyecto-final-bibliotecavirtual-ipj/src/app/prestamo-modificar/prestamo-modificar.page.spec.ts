import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrestamoModificarPage } from './prestamo-modificar.page';

describe('PrestamoModificarPage', () => {
  let component: PrestamoModificarPage;
  let fixture: ComponentFixture<PrestamoModificarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoModificarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrestamoModificarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
