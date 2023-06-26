import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysectionbaseComponent } from './categorysectionbase.component';

describe('CategorysectionbaseComponent', () => {
  let component: CategorysectionbaseComponent;
  let fixture: ComponentFixture<CategorysectionbaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorysectionbaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorysectionbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
