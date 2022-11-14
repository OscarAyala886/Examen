const array1 = [3, 1, 2, 3, 4, 5, 6, 7, 8, 3, 4, 5, 7, 3, 2, 6, 3, 6, 4, 7, 5, 8, 3, 6, 9, 3, 5];

const busqueda = (arreglo, callback) => {
    let variable = 0;
    let contador = 0;
    let cuenta = 0;
    arreglo.map(p => {
        cuenta = 0
        arreglo.map(x => {
            if (p == x) { cuenta++ }
        })
        if (cuenta > contador) {
            contador = cuenta;
            variable = p;
        }
    });
    callback(`valor mas repetido:${variable}, numero de veces contada: ${contador}`)

}

busqueda(array1, (respuesta) => {
    console.log(`respuesta: ${respuesta}`)
});