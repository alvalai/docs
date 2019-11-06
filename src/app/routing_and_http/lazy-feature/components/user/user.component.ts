import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  template: 'Imagine that this is a single awesome user with an id of {{id$ | async}}',
})
export class UserComponent implements OnInit {

  id$: Observable<string>;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    /* we can use params to access the id of the user (or any other param that we specified).
    To access queryParams, we can simply subscribe to activatedRoute.queryParams */
    this.id$ = this.activatedRoute.params.pipe(
      map(params => params.id)
    );
  }
}
