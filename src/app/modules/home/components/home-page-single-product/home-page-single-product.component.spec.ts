import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSingleProductComponent } from './home-page-single-product.component';

describe('HomePageSingleProductComponent', () => {
  let component: HomePageSingleProductComponent;
  let fixture: ComponentFixture<HomePageSingleProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageSingleProductComponent]
    });
    fixture = TestBed.createComponent(HomePageSingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
