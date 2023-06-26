import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsingleproductQusComponent } from './shopsingleproduct-qus.component';

describe('ShopsingleproductQusComponent', () => {
  let component: ShopsingleproductQusComponent;
  let fixture: ComponentFixture<ShopsingleproductQusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopsingleproductQusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopsingleproductQusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
