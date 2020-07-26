import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform( comentarios: any[], termino: string, prop: string): any[] {
    if ( termino === '' ) {
      return comentarios;
    }
    termino = termino.toLowerCase();

    return comentarios.filter( c => c[prop].toLowerCase().includes( termino ));
  }

}
