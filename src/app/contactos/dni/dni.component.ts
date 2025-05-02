import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.css']
})
export class DniComponent implements OnChanges {


    @Input() tipoDni: string = ''
    formularioDocumento: FormGroup
    variableNueva:string='DNI'

    constructor(private form: FormBuilder) {
  
      this.formularioDocumento = this.form.group({
        dni: ['',[Validators.required, Validators.minLength(3)]] 
      })
    }

    ngOnChanges(changes: SimpleChanges): void {
      this.variableNueva=changes?.['tipoDni'].currentValue;


      //this.variableNueva=!changes?.['tipoDni'].firstChange ? changes?.['tipoDni'].currentValue :'bienbenido';

    }


  hasErrors(controlName:string, errorType:string) {
    return this.formularioDocumento.get(controlName)?.hasError(errorType) && this.formularioDocumento.get(controlName)?.touched

  }

}
