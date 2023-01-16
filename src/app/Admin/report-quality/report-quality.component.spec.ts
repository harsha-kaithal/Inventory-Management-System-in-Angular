import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportQualityComponent } from './report-quality.component';

describe('ReportQualityComponent', () => {
  let component: ReportQualityComponent;
  let fixture: ComponentFixture<ReportQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportQualityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
