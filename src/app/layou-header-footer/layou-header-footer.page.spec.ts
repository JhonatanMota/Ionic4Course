import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayouHeaderFooterPage } from './layou-header-footer.page';

describe('LayouHeaderFooterPage', () => {
  let component: LayouHeaderFooterPage;
  let fixture: ComponentFixture<LayouHeaderFooterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayouHeaderFooterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayouHeaderFooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
