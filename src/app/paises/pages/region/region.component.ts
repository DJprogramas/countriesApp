import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [
    `
    button{
      margin-right: 5px;
    }
    
    `

  ],
})
export class RegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  regionActiva: string = ''
  paises: Country[] = []
  getClassCSS(region:string){
    return (region === this.regionActiva) ?'btn btn-primary' :'btn btn-outline-primary'
  }

  activarRegion(region: string){
    this.regionActiva = region
    this.paises = []
  }

  buscarRegion(region: string){
    this.piasService.buscarRegion(region)
    .subscribe(res => this.paises = res)
  }

  constructor(private piasService: PaisService) {}

  ngOnInit(): void {}
}
