import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter',  
})
export class SearchfilterPipe implements PipeTransform {

  transform(value:any, filterString: string, propname: string): any {
    if ( value.length === 0 || filterString ===''){
      return value;
    }
    const resultArray=[];
    for (const item of value){
      if(item[propname]=== filterString){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
