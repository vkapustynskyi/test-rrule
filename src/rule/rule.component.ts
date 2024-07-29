import {Component} from '@angular/core';

import {Frequency, RRule} from 'rrule';
import {RruleService} from "./RruleService";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ]
})
export class RuleComponent {
  // @ts-ignore
  freq: Frequency;
  // @ts-ignore
  interval: number;
  // @ts-ignore
  byweekday: number[];
  // @ts-ignore
  dtstart: Date;
  until?: Date;
  count?: number;
  // @ts-ignore
  rruleString: string;

  frequencies = [
    { label: 'Daily', value: RRule.DAILY },
    { label: 'Weekly', value: RRule.WEEKLY },
    { label: 'Monthly', value: RRule.MONTHLY },
    { label: 'Yearly', value: RRule.YEARLY },
  ];

  weekdays = [
    { label: 'Monday', value: RRule.MO.weekday },
    { label: 'Tuesday', value: RRule.TU.weekday },
    { label: 'Wednesday', value: RRule.WE.weekday },
    { label: 'Thursday', value: RRule.TH.weekday },
    { label: 'Friday', value: RRule.FR.weekday },
    { label: 'Saturday', value: RRule.SA.weekday },
    { label: 'Sunday', value: RRule.SU.weekday },
  ];

  constructor(private rruleService: RruleService) {}

  generateRRule() {
    this.rruleString = this.rruleService.createRRuleString(
      this.freq,
      this.interval,
      this.byweekday,
      this.until ? new Date(this.until) : undefined,
      this.count
    );
  }
}

