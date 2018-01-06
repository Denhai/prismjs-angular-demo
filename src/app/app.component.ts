import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentHighlightedMarkup = require('!!prismjs-loader?lang=markup!./app.component.html');
}
