import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CataloguesPage } from './catalogues.page';

describe('CataloguesPage', () => {
  let component: CataloguesPage;
  let fixture: ComponentFixture<CataloguesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CataloguesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
