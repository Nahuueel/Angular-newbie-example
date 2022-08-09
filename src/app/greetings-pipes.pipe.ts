import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetingsPipes'
})
export class GreetingsPipesPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return `Hello ${value}`;
  }

}
