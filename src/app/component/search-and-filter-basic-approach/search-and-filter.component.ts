import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-and-filter',
  templateUrl: './search-and-filter.component.html',
  styleUrls: ['./search-and-filter.component.scss']
})
export class SearchAndFilterComponent implements OnInit {

  searchText = '';
  selectedCategoryValue = '';
  filteredApplets: any = [];
  categoryAndCount: { name: string; count: number; }[] = [];

  lib = {
    categories: ['Performance', 'Investments', 'Operations'],
    applets: [
      { name: 'Performance Snapshot', categories: ['Performance'] },
      { name: 'Commitment Widget', categories: ['Investments'] },
      { name: 'CMS', categories: ['Investments', 'Performance'] }
    ]
  };

  constructor() {
    this.addBigData(this.lib, 200, 75000);
  }

   ngOnInit(): void {
  }

  mapCatAndCount() {
    this.categoryAndCount = this.lib.categories.map(category => {
      return {
        name: category,
        count: this.lib.applets.filter(obj => obj.categories.includes(category)).length
      };
    });
  }

  selectCategory(category: string) {
    // console.log('Selected category:', category);
    this.selectedCategoryValue = category;
    this.filteredApplets = this.lib.applets
      .filter(applet => applet.categories.includes(this.selectedCategoryValue))

  }

  search(searchText: string) {
   
    this.filteredApplets = this.lib.applets
      .filter(obj => obj.name.toLowerCase().includes(searchText.toLowerCase()))
      .filter(obj => obj.categories.includes(this.selectedCategoryValue));

    console.log('Filtered Applets:', this.filteredApplets);
    let newCat = []
    newCat = this.filteredApplets.map(ele => ele.categories).flat().reduce((acc, curr) => {
      if (!acc[curr]) {
        acc[curr] = 0;
      }
      acc[curr]++;
      return acc;
    }, {});
  
    if (searchText === '') {
      this.mapCatAndCount();
    } else {
      this.categoryAndCount = Object.keys(newCat).map(key => {
        return {
          name: key,
          count: newCat[key]
        };
      });
    }
   
  }


  addBigData(lib, ncategs, napplets) {
    for (var i = 0; i < ncategs; i++) {
      lib.categories.push('Sample Category ' + i);
    }
    var n = lib.categories.length;
    for (let i = 0; i < napplets; i++) {
      let a: { name: string; categories: string[] } = {
        name: 'CMS' + i,
        categories: []
      };
      for (let j = 0; j < Math.floor(Math.random() * 10); ++j) {
        let idx = Math.floor(Math.random() * n) % n;
        a.categories.push(lib.categories[idx]);
      }
      lib.applets.push(a);
    }
    this.selectedCategoryValue = this.lib.categories[0];
    this.mapCatAndCount();
    this.selectCategory(this.selectedCategoryValue);
  }

}