import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  miFormulario:FormGroup=this.fb.group({
    nombre:[,[Validators.required,Validators.minLength(3)]],
    favoritos:this.fb.array([
      ['Metal Gear',Validators.required],['Death Stranding',Validators.required],
    ],Validators.required)

  })
  nuevoFavorito:FormControl=this.fb.control('',Validators.required)
  
  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray
  }
  constructor(private fb:FormBuilder) { }
  ngOnInit(){
    
  }

  campoEsValido(dato:string){
    return this.miFormulario.controls[dato].errors && this.miFormulario.controls[dato].touched
  }
  agregarNuevoFavorito(){
    if(this.nuevoFavorito.invalid){return}
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value,Validators.required))
    this.nuevoFavorito.reset()
  }
  borrar(index:number){
    this.favoritosArr.removeAt(index)
  }
  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return
    }
    console.log(this.miFormulario.value)
  }
  
}
