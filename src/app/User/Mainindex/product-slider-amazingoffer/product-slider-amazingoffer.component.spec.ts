import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSliderAmazingofferComponent } from './product-slider-amazingoffer.component';

describe('ProductSliderAmazingofferComponent', () => {
  let component: ProductSliderAmazingofferComponent;
  let fixture: ComponentFixture<ProductSliderAmazingofferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSliderAmazingofferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSliderAmazingofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
