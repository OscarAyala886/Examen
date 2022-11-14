let alumnos = [{
        matricula: 123,
        nombre: "Fernando",
        licenciatura: "Ingenieria en Sistemas",
        grupo: 4953
    }, {
        matriula: 345,
        nombe: "Melisa",
        licenciatura: "Ingenieria en Sistemas",
        grupo: 4956
    }, {
        matricula: 678,
        nombre: 'Jose',
        licenciatura: "Ingenieria en Sistemas",
        grupo: 4946
    }]
    
    let getAlumno = (matricula) => {
        return new Promise((resolve, reject) => {
        let alumnoDB = alumnos.find(alumno => alumno.matricula === matricula)
        if (!alumnoDB) {
            reject(`No existe el matricula= ${matricula} del alumno dentro de la base datos`);
        } else {
            resolve(alumnoDB);
        }
    });
}
    
getAlumno(1234).then(res => {
    console.log(res); 
}).catch(error => {
    console.log(error);
});