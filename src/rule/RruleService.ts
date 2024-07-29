// src/app/services/rrule.service.ts
import {Injectable} from '@angular/core';
import {ByWeekday, Frequency, RRule} from 'rrule';

@Injectable({
  providedIn: 'root'
})
export class RruleService {

  constructor() {
  }

  private removeUndefinedProperties(obj: any): any {
    return Object.entries(obj)
      .filter(([_, value]) => value !== undefined)
      .reduce((acc, [key, value]) => ({...acc, [key]: value}), {});
  }

  createRRuleString(
    freq: Frequency,
    interval: number,
    byweekday: ByWeekday[],
    until?: Date,
    count?: number
  ): string {
    const rruleOptions = {
      freq,
      interval,
      byweekday,
      until,
      count
    };

    const filteredOptions = this.removeUndefinedProperties(rruleOptions);

    const rule = new RRule(filteredOptions);
    console.log(rule);
    console.log(rule.toText());
    console.log("we need: ", rule.toString().split(":")[1]);
    return rule.toString();
  }
}
