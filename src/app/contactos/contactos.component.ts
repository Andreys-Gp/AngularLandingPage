import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit , OnDestroy {

  formularioContacto: FormGroup
  tipoDni: string=''; 
  mostrarDni: boolean=false;
 /*  usuarioActivo: any = {
    nombre: 'Andreys',
    apellido: 'Gonzalez',
    dni: '1095642558'
  } */


  constructor(private form: FormBuilder) {

    this.formularioContacto = this.form.group({
      nombre: ['',[Validators.required, Validators.minLength(3)]],
      apellido: ['',[Validators.required, Validators.minLength(3)]],
      tipoDni: ['', [Validators.required]],
      email: ['',[Validators.email, Validators.required]],
    })
  }
  ngOnDestroy(): void {
    console.log('Componente destruido');
  }
 
  ngOnInit(): void {
    this.formularioContacto.get('nombre')?.setValue('Brayan')
    this.formularioContacto.get('apellido')?.disable()

    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(value => {
      this.mostrarDni=value != ''
      this.tipoDni=value
      //console.log(value);
    })
    
  
    console.log('Destruyendo el componente');

    

    /* this.formularioContacto.valueChanges.subscribe(valor=>{
      console.log(valor)
    }
  ) */

  }

  /* ngOnInit(): void {
       //this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo)
       this.formularioContacto.get('apellido')?.clearValidators()
       this.formularioContacto.get('apellido')?.setValidators([Validators.required, Validators.minLength(3)])
       this.formularioContacto.get('apellido')?.updateValueAndValidity()

       this.formularioContacto.patchValue({
        nombre: this.usuarioActivo.nombre,
        // apellido: this.usuarioActivo.apellido,
        dni: this.usuarioActivo.dni
       })
       this.formularioContacto.get('nombre')?.disable()
       //this.formularioContacto.get('apellido')?.disable()
       this.formularioContacto.get('dni')?.disable()
  } */

  hasErrors(controlName:string, errorType:string) {
    return this.formularioContacto.get(controlName)?.hasError(errorType) && this.formularioContacto.get(controlName)?.touched

  }



  enviar(){
    console.log(this.formularioContacto)

  }

  //formulario tipo
/*
  public usuario: any = {
    nombre: '',
    email: '',
  } */



}
