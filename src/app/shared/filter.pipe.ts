import { Pipe, PipeTransform } from '@angular/core';
import { Menu } from '../menu/menu.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterText:string): any[] {
    if(filterText.length > 0){

      return value.filter((v=>(v.name as string).toLowerCase().indexOf(filterText.toLowerCase()) != -1));
    }
    return value;
  }

}
