<template>
    <div id="content">
        <b>Componente de ciclo if, else if y else</b>

        <p>Sentencia que se ejecutará si condición es evaluada como verdadera. Puede ser cualquier sentencia, incluyendo
            otras sentenccias if anidadas. Para ejecutar múltiples sentencias, use una sentencia block ({ ... }) para
            agruparlas.</p>
        <p>
            Calificaciones:
        <ul v-for="promedio, index in calificaciones" :key="index">
            <li v-if="promedio > 7" style="color: green; text-decoration: underline;">Alumno {{ index }} aprobo la
                materia con un promedio de {{ promedio }}</li>
            <li v-else-if="promedio > 6" style="color: red;">Alumno {{ index }} repro la materia con un promedio de {{
                promedio
            }}</li>
            <li v-else>Alumno {{ index }} cursara el año escolar por sacar {{ promedio }}</li>
        </ul>
        </p>

        <i>Codigo de referencia:
            <code>
                <br>
                v-for="promedio, index in calificaciones" :key="index" <br>
                v-if="promedio > 7" style="color: green; text-decoration: underline;">Alumno {{ index }} aprobo la
                materia con un promedio de {{ promedio }}
                <br>
                v-else-if="promedio > 6" style="color: red;">Alumno {{ index }} repro la materia con un promedio de {{promedio}} <br>
                v-else>Alumno {{ index }} cursara el año escolar por sacar {{ promedio }}

            </code>
        </i>
    </div>

</template>

<script>
export default {
    name: 'EventosIF-Item',
    data() {
        return {
            calificaciones: [8.7, 8.0, 6.4, 3.2, 4.0, 8.9, 9.0, 10.0, 4.6, 6.7, 8.7],
        }
    }
}
</script>

<style>

</style>