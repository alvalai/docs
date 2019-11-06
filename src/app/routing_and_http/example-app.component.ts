import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './example-app.component.html'
})
export class ExampleAppComponent {
  constructor(private router: Router) {}
  navigateToLazyfeature() {
    this.router.navigate(
      ['lazy-feature'],
      {
        fragment: 'omg', // we use this to specify an anchor we want to land on once we have navigated
        queryParams: {hello: 'this', is: 'dog'}
      }
    );
  }
}
