import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageMultipleProductsComponent } from './home-page-multiple-products.component';

describe('HomePageMultipleProductsComponent', () => {
  let component: HomePageMultipleProductsComponent;
  let fixture: ComponentFixture<HomePageMultipleProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageMultipleProductsComponent]
    });
    fixture = TestBed.createComponent(HomePageMultipleProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
