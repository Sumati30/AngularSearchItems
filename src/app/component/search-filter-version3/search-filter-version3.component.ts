import { Component, OnInit } from '@angular/core';
import { debounceTime, switchMap, startWith } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-search-filter-version3',
  templateUrl: './search-filter-version3.component.html',
  styleUrls: ['./search-filter-version3.component.scss']
})
export class SearchFilterVersion3Component implements OnInit {
 ngOnInit(): void {
   
 }
  private searchTerm$ = new Subject<string>(); // Emits search terms
  users$!: Observable<any[]>; // Stream for the async pipe

  constructor(private userService: UserServiceService) {
    this.users$ = this.searchTerm$.pipe(
      startWith(''), // Load all users initially
      debounceTime(300), // Wait for user to stop typing
      distinctUntilChanged(), // Ignore if value hasn't changed
      switchMap(term => this.userService.searchUsers(term))
    );
  }

  search(term: string) {
    this.searchTerm$.next(term); // Emit new search term
  }
}

