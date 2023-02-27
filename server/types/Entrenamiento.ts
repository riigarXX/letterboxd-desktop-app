import { Timestamp } from "@firebase/firestore-types"

export default interface Entrenamiento {
  entrenamiento?: {
    espalda?: {
      jalonAlPecho:{
        primeraRepe: {
          repeticiones:number,
          peso:number
        }
        segundaRepe: {
          repeticiones:number,
          peso:number
        }
        terceraRepe: {
          repeticiones:number,
          peso:number
        }
      }
    }
    pecho?: {
      pressDeBanca:{
        primeraRepe: {
          repeticiones:number,
          peso:number
        }
        segundaRepe: {
          repeticiones:number,
          peso:number
        }
        terceraRepe: {
          repeticiones:number,
          peso:number
        }
      }
    }
    pierna?: {
      sentadillas:{
        primeraRepe: {
          repeticiones:number,
          peso:number
        }
        segundaRepe: {
          repeticiones:number,
          peso:number
        }
        terceraRepe: {
          repeticiones:number,
          peso:number
        }
      }
    }
    biceps?: {
      curlDeBiceps:{
        primeraRepe: {
          repeticiones:number,
          peso:number
        }
        segundaRepe: {
          repeticiones:number,
          peso:number
        }
        terceraRepe: {
          repeticiones:number,
          peso:number
        }
      }
    }
    triceps?: {
      extensionPolea:{
        primeraRepe: {
          repeticiones:number,
          peso:number
        }
        segundaRepe: {
          repeticiones:number,
          peso:number
        }
        terceraRepe: {
          repeticiones:number,
          peso:number
        }
      }
    }
  }
  fecha:Timestamp,
  fechaFormated:string,
  nombreEntrenamiento:string,
  idFirebase:string
}


