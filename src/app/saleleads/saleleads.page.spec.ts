import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SaleleadsPage } from './saleleads.page';

describe('SaleleadsPage', () => {
  let component: SaleleadsPage;
  let fixture: ComponentFixture<SaleleadsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SaleleadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
