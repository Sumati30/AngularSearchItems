import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchAndFilterComponent } from './component/search-and-filter-basic-approach/search-and-filter.component';
import { SearchAndFilterV2Component } from './component/search-and-filter-enhanced-approach/search-and-filter-v2.component';

const routes: Routes = [
  {path: '', redirectTo: '/search-by-basic-approach', pathMatch: 'full'},
  {path:"search-by-basic-approach", component:SearchAndFilterComponent},
  {path:"search-by-enhanced-approach", component:SearchAndFilterV2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
