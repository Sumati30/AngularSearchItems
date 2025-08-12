import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndFilterV2Component } from './search-and-filter-v2.component';

describe('SearchAndFilterV2Component', () => {
  let component: SearchAndFilterV2Component;
  let fixture: ComponentFixture<SearchAndFilterV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAndFilterV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndFilterV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
