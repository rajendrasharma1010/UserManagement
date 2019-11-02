import { Component, OnInit, SimpleChange, Input, Output, EventEmitter, AfterContentInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interfaces';
import { forEach } from 'lodash';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { ajax } from 'rxjs/observable/dom/ajax';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit, AfterContentInit {
  
  @ViewChild('searchInput') el;

  newUserList: Array<User>;
  searchForm: FormGroup;
  searchTypes: Array<string> = ['both', 'first only', 'last only'];
  searchType: string;

  @Input() userList;
  @Input() customPlaceholder = 'Search';
  @Output() searchUsers = new EventEmitter<Array<User>>();

  constructor(private fb: FormBuilder ) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchString: ['', [Validators.maxLength(100) ]]
    });
    this.searchType = this.searchTypes[0];
  }

  ngAfterContentInit() {
    /** using RxJs to handle keyboard events on input field */
    const searchBox = <HTMLInputElement>this.el.nativeElement;

    const typeahead = fromEvent(searchBox, 'input').pipe(
      map((e: KeyboardEvent) => {
        /** need to declare expliticy as HTMLInputElement, otherwise e.target.event will through an error  */
        const input = e.target as HTMLInputElement;
        if(input) return input.value;
      }),
      debounceTime(20),
      distinctUntilChanged()
    );

    typeahead.subscribe(data => {
      this.filterResults(data);
    });
  }

  filterResults( value: string) {

    const matchArray = [];
    forEach(this.userList, (user) => {
        const matchstr = new RegExp(value.toLowerCase());
        const firstname = user.name.first.toLowerCase();
        const lastname = user.name.last.toLowerCase();
 
        if ( this.searchType == this.searchTypes[1] ) {
          if (matchstr.test(firstname)) matchArray.push(user);
        }
        else if ( this.searchType == this.searchTypes[2]) {
          if ( matchstr.test(lastname) ) matchArray.push(user);
        }
        else {
          if ( matchstr.test(firstname) || matchstr.test(lastname) ) matchArray.push(user);
        }
    });
   
    this.searchUsers.emit(matchArray);
  }
}
