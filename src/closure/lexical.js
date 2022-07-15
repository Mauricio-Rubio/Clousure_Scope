// Ambito lexico -> Accesibilidad de variables anidadas entre funciones
const global = 2022;

function year() {
    const today = 'Monday';
    console.log(global);

    function parent() { // Funcion interna
        const inner = 2023;
        console.log(today, global);

        function child() {
            console.log(inner, today, global);
        }
    return child();
    }

    return parent();
}
year();