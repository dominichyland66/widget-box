import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPicker } from './product-picker';

describe('ProductPicker', () => {
  let component: ProductPicker;
  let fixture: ComponentFixture<ProductPicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
