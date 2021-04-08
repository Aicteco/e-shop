import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchf'
})
export class SearchfPipe implements PipeTransform {

  transform(proudct:any[] , term:string): any {
    if(term == undefined){
      return proudct;
    }
    return proudct.filter(item =>{
      if(  item.name.toLowerCase().includes(term.toLowerCase())){
        return item.name.toLowerCase().includes(term.toLowerCase())
      }else{
        return item.name.toLowerCase().includes(term.toLowerCase())
      }



    })


    }
}
