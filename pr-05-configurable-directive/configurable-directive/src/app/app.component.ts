import { Component } from '@angular/core';
import { ConfigurableHighlightDirective } from './configurable-highlight.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ConfigurableHighlightDirective]
})
export class AppComponent {}
