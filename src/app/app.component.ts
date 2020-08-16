import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  moviesList = [
    { "title":"The Old Guard",
      "year":"2020",
      "rating": "10"
    },
    { "title":"The Lorax",
      "year":"2020",
      "rating": "9"
    },
    { "title":"Angel Has Fallen",
      "year":"2020",
      "rating": "8"
    }
  ];
}
