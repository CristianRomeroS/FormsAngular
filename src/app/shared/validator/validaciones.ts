import { FormControl } from "@angular/forms";

export const nombreApellidoPattern:string='([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern:string="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

// noPuedeSerStrider(control:FormControl){
//     console.log(control.value);
//     const valor=control.value?.trim().toLowerCase();
//     return (valor==='strider')?{noStrider:true}:null; 
//     // if(valor==='strider'){
//     //   return {
//     //     noStrider:true
//     //   }
//     // }

//     // return null;
    
//   }
  export const noPuedeSerStrider=(control:FormControl)=>{
    console.log(control.value);
    const valor=control.value?.trim().toLowerCase();
    return (valor==='strider')?{noStrider:true}:null; 
    // if(valor==='strider'){
    //   return {
    //     noStrider:true
    //   }
    // }

    // return null;
    
  }