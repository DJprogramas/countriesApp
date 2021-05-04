import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styles: [],
})
export class CapitalComponent implements OnInit {
  paises: Country[] = [];
  error: boolean = false;
  termino: string = '';

 

  buscar(termino: string) {
    this.error = false;
    this.termino = termino;
    this.pasiService.buscarCapital(this.termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (err) => {
        this.error = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.error = false;
  }

  constructor(private pasiService: PaisService) {}

  ngOnInit(): void {}
}
