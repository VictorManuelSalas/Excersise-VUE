//Se importan estos atributos de vue, el ref es para vincular elementos y computed 
//básicamente es una variable, la diferencia con las Variables de Vue es que las computadas normalmente transforman la 
//variable o hacen algún tipo de cálculo antes de devolverla.
import { ref, computed } from 'vue'

//Se usa el export para permitir que se use en otros lugares y default para que este archivo por defecto ejecute esa funcion
export default function () {

    const counter = ref(0);

    const counterComputer = computed(()=>{
        return 'El valor del contador es de ' + counter.value
    });
    const incremento = () => {
        counter.value++
    };

    const decremento = () => {
        if (counter.value > 0) {
            counter.value--
        }
    };

    return {
        counter, decremento, incremento,counterComputer
    };     

}