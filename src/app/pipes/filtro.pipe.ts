import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arreglo: any[], texto: string, columna: string = 'title'): any[] {
    if(arreglo == null){
      return []
    }
    return arreglo.filter(a => a[columna].toLowerCase().includes(texto.toLowerCase()));
  }

}
