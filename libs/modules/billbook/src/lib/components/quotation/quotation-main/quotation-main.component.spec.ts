import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationMainComponent } from './quotation-main.component';

describe('QuotationMainComponent', () => {
  let component: QuotationMainComponent;
  let fixture: ComponentFixture<QuotationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotationMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
