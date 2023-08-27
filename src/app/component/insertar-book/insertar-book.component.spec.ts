import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarBookComponent } from './insertar-book.component';

describe('InsertarBookComponent', () => {
  let component: InsertarBookComponent;
  let fixture: ComponentFixture<InsertarBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarBookComponent]
    });
    fixture = TestBed.createComponent(InsertarBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
