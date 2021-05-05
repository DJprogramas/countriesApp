import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    
    
    `
  ],
})
export class PaisComponent {
  constructor(private paisService: PaisService) {}

  termino: string = '';
  error: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false

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
    this.error = false
    this.termino = termino
    this.mostrarSugerencias = true

    if(termino !== ''){
      this.buscar(termino)
      this.paisService.buscarPais(termino)
        .subscribe(paises => this.paisesSugeridos = paises.splice(0,5),(err) => {
          this.paisesSugeridos = []
          this.error = true
        })

    }else{
      this.mostrarSugerencias = false
      this.paises = []
    }
  }

  
}
