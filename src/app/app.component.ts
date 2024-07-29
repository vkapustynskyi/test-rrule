import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {RuleComponent} from "../rule/rule.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RuleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-rrule';
}
