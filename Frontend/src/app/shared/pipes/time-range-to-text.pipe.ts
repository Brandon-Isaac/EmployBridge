import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeRangeToText',
  standalone: true
})
export class TimeRangeToTextPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case '7':
        return '7 days';
      case '30':
        return '30 days';
      case '90':
        return '90 days';
      case '180':
        return '6 months';
      case '365':
        return '1 year';
      default:
        return value;
    }
  }
} 