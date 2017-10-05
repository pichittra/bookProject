import {Pipe} from '@angular/core'

@Pipe({
  name: 'truncate'
})
export class TruncatePipe {
  transform(value: string, args: string) : string {
    //  let limit = value.length > 0 ? parseInt(value, 8) : 8;
    //  let trail = '...';
    let limit = args ? parseInt(args, 15) : 15;
    let trail = '...';

     console.log(value)
     console.log(value.length)
     console.log(args)
    //let limit = value.length > 1 ? value[1] : '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}