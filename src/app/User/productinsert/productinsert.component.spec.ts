import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductinsertComponent } from './productinsert.component';

describe('ProductinsertComponent', () => {
  let component: ProductinsertComponent;
  let fixture: ComponentFixture<ProductinsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductinsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
