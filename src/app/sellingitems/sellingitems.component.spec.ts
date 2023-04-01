import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingitemsComponent } from './sellingitems.component';

describe('SellingitemsComponent', () => {
  let component: SellingitemsComponent;
  let fixture: ComponentFixture<SellingitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellingitemsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SellingitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
