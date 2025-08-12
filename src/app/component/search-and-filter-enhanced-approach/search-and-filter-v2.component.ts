import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';


interface Applet {
  name: string;
  categories: string[];
}

@Component({
  selector: 'app-search-and-filter-v2',
  templateUrl: './search-and-filter-v2.component.html',
  styleUrls: ['./search-and-filter-v2.component.scss'],
})
export class SearchAndFilterV2Component implements OnInit {

  searchText = '';
  selectedCategoryValue = '';
  filteredApplets: Applet[] = [];
  categoryAndCount: { name: string; count: number }[] = [];

  lib = {
    categories: ['Performance', 'Investments', 'Operations'],
    applets: [
      { name: 'Performance Snapshot', categories: ['Performance'] },
      { name: 'Commitment Widget', categories: ['Investments'] },
      { name: 'CMS', categories: ['Investments', 'Performance'] }
    ]
  };
  /****** Index to store applets by category **/
  private categoryIndex = new Map<string, Applet[]>();

  constructor() {
    this.addBigData(this.lib, 200, 75000);
    this.buildCategoryIndex(); 
    this.mapCatAndCount();
    this.selectCategory(this.lib.categories[0]);
  }

  ngOnInit(): void { }

  /******* Build category index **/
  private buildCategoryIndex() {
    this.categoryIndex.clear();
    this.lib.applets.forEach(applet => {
      applet.categories.forEach(cat => {
        if (!this.categoryIndex.has(cat)) {
          this.categoryIndex.set(cat, []);
        }
        this.categoryIndex.get(cat)!.push(applet);
      });
    });
    console.log('Category Index -', this.categoryIndex);
  }

  /**** Map categories with their counts ****/
  private mapCatAndCount() {
    this.categoryAndCount = this.lib.categories.map(category => ({
      name: category,
      count: this.categoryIndex.get(category)?.length || 0
    }));
  }

  /**** Select a category using the index ***/
  selectCategory(category: string) {
    this.selectedCategoryValue = category;
    this.filteredApplets = this.categoryIndex.get(category) || [];
  }

  /**** Search with category filter using index ***/
  search(searchText: string) {
    let lowerCaseSearch = searchText.toLowerCase();
    let baseList = this.categoryIndex.get(this.selectedCategoryValue) || [];

    this.filteredApplets = baseList.filter(applet =>
      applet.name.toLowerCase().includes(lowerCaseSearch)
    );

    // Update category counts for the search result
    if (searchText === '') {
      this.mapCatAndCount();
    } else {
      const newCatCount = this.filteredApplets
        .map(applet => applet.categories)
        .reduce((acc, arr) => acc.concat(arr), [])
        .reduce((acc: Record<string, number>, cat) => {
          acc[cat] = (acc[cat] || 0) + 1;
          return acc;
        }, {});

      this.categoryAndCount = Object.entries(newCatCount).map(([name, count]) => ({
        name,
        count
      }));
    }
  }

  /***** Generate large dataset *************/
  private addBigData(lib: { categories: string[]; applets: Applet[] }, ncategs: number, napplets: number) {
    for (let i = 0; i < ncategs; i++) {
      lib.categories.push('Sample Category ' + i);
    }
    const n = lib.categories.length;
    for (let i = 0; i < napplets; i++) {
      const a: Applet = {
        name: 'CMS' + i,
        categories: []
      };
      for (let j = 0; j < Math.floor(Math.random() * 10); ++j) {
        const idx = Math.floor(Math.random() * n) % n;
        a.categories.push(lib.categories[idx]);
      }
      lib.applets.push(a);
    }
  }

  /***** Track by function for ngFor optimization *****/
  trackByName(index: number, item: Applet): string {
    return item.name; 
  }
}
