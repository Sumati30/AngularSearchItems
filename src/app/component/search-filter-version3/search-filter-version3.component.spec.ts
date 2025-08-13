import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterVersion3Component } from './search-filter-version3.component';

describe('SearchFilterVersion3Component', () => {
  let component: SearchFilterVersion3Component;
  let fixture: ComponentFixture<SearchFilterVersion3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFilterVersion3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilterVersion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
