import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImpressionsPage } from './impressions.page';

describe('ImpressionsPage', () => {
  let component: ImpressionsPage;
  let fixture: ComponentFixture<ImpressionsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ImpressionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
