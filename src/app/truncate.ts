import {Pipe} from '@angular/core'

@Pipe({
  name: 'truncate'
})
export class TruncatePipe {
  transform(value: string, args: string[]) : string {
     let limit = value.length > 0 ? parseInt(value, 8) : 8;
     let trail = '...';
    //let limit = value.length > 1 ? value[1] : '...';
console.log(value.length)
 console.log(limit)
//return
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}