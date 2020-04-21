import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddLibroPage } from './add-libro.page';

describe('AddLibroPage', () => {
  let component: AddLibroPage;
  let fixture: ComponentFixture<AddLibroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLibroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddLibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
