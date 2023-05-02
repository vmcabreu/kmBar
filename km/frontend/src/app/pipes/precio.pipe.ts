import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precio'
})
export class PrecioPipe implements PipeTransform {

  transform(precio: number) {
    const regExp = /^\d+(?:\.\d{1,2})?$/;
    if (regExp.test(precio.toString())) {
      
    }
  }

}
