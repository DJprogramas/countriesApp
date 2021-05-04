import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
  
  termino:string = ''
  
  @Output()
  onEnter: EventEmitter<string> = new EventEmitter()
  
  @Output()
  onDebounce: EventEmitter<string> = new EventEmitter()

  @Input()
  placeholder:string = ''
  
  // Creacion de un obsevable manual
  debouncer: Subject<string>  = new Subject
  
  // Se dispara una sola vez cuando el componente es creado
  ngOnInit(){
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(val => {
      this.onDebounce.emit(val)
    })
  }

  buscar(){
    this.onEnter.emit(this.termino)
    
  }

  teclaPresionada(){
    this.debouncer.next(this.termino)
  }

}
