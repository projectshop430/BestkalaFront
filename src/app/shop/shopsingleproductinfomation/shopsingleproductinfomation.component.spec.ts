import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopsingleproductinfomationComponent } from './shopsingleproductinfomation.component';

describe('ShopsingleproductinfomationComponent', () => {
  let component: ShopsingleproductinfomationComponent;
  let fixture: ComponentFixture<ShopsingleproductinfomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopsingleproductinfomationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopsingleproductinfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
