import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModificarLibroPage } from './modificar-libro.page';

describe('ModificarLibroPage', () => {
  let component: ModificarLibroPage;
  let fixture: ComponentFixture<ModificarLibroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarLibroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarLibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
