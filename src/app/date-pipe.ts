import {Pipe} from '@angular/core'

@Pipe({
  name: 'date'
})
export class DatePipe {
  transform(value: string, args: string[])  {
  }
}