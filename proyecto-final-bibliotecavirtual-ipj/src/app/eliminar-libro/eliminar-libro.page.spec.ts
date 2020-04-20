import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EliminarLibroPage } from './eliminar-libro.page';

describe('EliminarLibroPage', () => {
  let component: EliminarLibroPage;
  let fixture: ComponentFixture<EliminarLibroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarLibroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarLibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
