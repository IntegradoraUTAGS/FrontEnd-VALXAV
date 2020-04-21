import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrestamoAltaPage } from './prestamo-alta.page';

describe('PrestamoAltaPage', () => {
  let component: PrestamoAltaPage;
  let fixture: ComponentFixture<PrestamoAltaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoAltaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrestamoAltaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
