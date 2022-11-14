let nombre = (nom, callback) => { 
    var miNombre = "Nombre: " + nom;
    callback(miNombre); // 2
  }
  
  let logNombre = (nom) => {
    console.log(nom);
  }

nombre("Oscar Ayala Villanueva", logNombre); // 1

 /*nombre("Oscar Ayala Villanueva", logCNombre, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
});*/