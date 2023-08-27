import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarBookComponent } from './mostrar-book.component';

describe('MostrarBookComponent', () => {
  let component: MostrarBookComponent;
  let fixture: ComponentFixture<MostrarBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MostrarBookComponent]
    });
    fixture = TestBed.createComponent(MostrarBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
