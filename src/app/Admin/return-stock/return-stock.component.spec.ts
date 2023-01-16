import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnStockComponent } from './return-stock.component';

describe('ReturnStockComponent', () => {
  let component: ReturnStockComponent;
  let fixture: ComponentFixture<ReturnStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
