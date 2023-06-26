import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsingleproductComponent } from './shopsingleproduct.component';

describe('ShopsingleproductComponent', () => {
  let component: ShopsingleproductComponent;
  let fixture: ComponentFixture<ShopsingleproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopsingleproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopsingleproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
