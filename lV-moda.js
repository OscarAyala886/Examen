let aleatorio = Math.random(); //Variable para generar los numeros
let variable = 0;
let contador = 0;
let cuenta = 0;
let moda = variable;
let contada = contador;

let valueAppearances = []; //array



function random(min, max) {//Funcion para generar el numero
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


function ciclofor(min, max){
    for (let step = 1; step < 100; step++) {//se generaran 100 numeros
        let randomIndex = random(min, max); //rango de numeros
        valueAppearances.push(randomIndex); //Se agregaran al aray creado anteriormemnte
      }
}

//Primera promesa
let getNumeros = (min, max) => {
    return new Promise((resolve, reject) => {
        if (min <= 0 && max >= 1001) {
            reject(`no se puede generar los numeros`);
        } else {
            resolve(
            ciclofor(min, max),
            console.log('\nResultados 1 -------------------------------------------------------------------------------------------------\n'),
            console.log(valueAppearances)
            );
        }
    });
}

//Segunda promesa
let getSPromedio = (min, max) => {
        return new Promise((resolve, reject) => {
        if (min <= 0 && max >= 1001) {
            reject(`No se puede generar la moda`);
            } else {
                resolve(
                    respuesta = '\n\nResultados 2 -------------------------------------------------------------------------------------------------\n\n',
                    valueAppearances.map(p => {
                        cuenta = 0
                        valueAppearances.map(x => {
                            if (p == x) { cuenta++ }
                        })
                        if (cuenta > contador) {
                            contador = cuenta;
                            variable = p;
                        }
                    })
                    //console.log(`valor mas repetido:${variable}, numero de veces contada: ${contador}`)
                    
                );
            }
        });
    }

//Orden de ejecucion
let getPromedioF = async(min,max) => {
    let consulta = await getNumeros(min,max);
    let consulta2 = await getSPromedio(consulta);
    return consulta2+'Moda: '+variable+ '\nNumero de veces repetido: '+ contador+'\n'
}

//Ejecucion delprograma
getPromedioF(1,10).then((consulta2) => { //los numeros que se generaran seran entre el 1 y el 10
    console.log(consulta2);
}).catch((errores) => {
    console.log(errores);
});


    // let variable = 0;
    // let contador = 0;
    // let cuenta = 0;
    // valueAppearances.map(p => {
    //     cuenta = 0
    //     valueAppearances.map(x => {
    //         if (p == x) { cuenta++ }
    //     })
    //     if (cuenta > contador) {
    //         contador = cuenta;
    //         variable = p;
    //     }
    // });
    // console.log(`valor mas repetido:${variable}, numero de veces contada: ${contador}`)

