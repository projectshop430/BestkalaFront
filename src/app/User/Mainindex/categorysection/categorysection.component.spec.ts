import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysectionComponent } from './categorysection.component';

describe('CategorysectionComponent', () => {
  let component: CategorysectionComponent;
  let fixture: ComponentFixture<CategorysectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorysectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorysectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
