import { ref, computed } from 'vue'
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