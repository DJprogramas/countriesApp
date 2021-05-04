import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [],
})
export class PaisComponent {
  constructor(private paisService: PaisService) {}

  termino: string = '';
  error: boolean = false;
  paises: Country[] = [];

  buscar(termino: string) {
    this.error = false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        // console.log(paises);
        this.paises = paises;
      },
      (err) => {
        // console.log('Ocurrio un error');
        // console.log(err.error);
        this.error = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.error = false;
  }
}
