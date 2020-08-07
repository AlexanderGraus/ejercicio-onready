var express = require('express');
var router = express.Router();
let vehiculos = [];
let autoY = null;


class Vehiculo{
  constructor(marca,modelo,precio){
   
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;

    
  }
}

class Auto extends Vehiculo{
  constructor(marca,modelo,puertas,precio){
    super(marca,modelo,precio);
    this.puertas = puertas;
    
    
  }
  imprimir(){
    return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: $${this.precio}`;
  }
}

class Moto extends Vehiculo{
  constructor(marca,modelo,cilindrada,precio){
    super(marca,modelo,precio);
    this.cilindrada = cilindrada;
    
  }
  imprimir(){
    return `Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada}c // Precio: $${this.precio}`;
  }
}

cargarAutos = () =>{
  vehiculos.push(new Auto('Peugeot','206',4,200000));
  vehiculos.push(new Moto('Honda','Titan',125,60000));
  vehiculos.push(new Auto('Peugeot','208',5,250000));
  vehiculos.push(new Moto('Yamaha','YBR',160,80500.50));
  //imprimo los vehiculos tal cual fueron cargados
  vehiculos.forEach(vehiculo => console.log(vehiculo.imprimir()));
}

ordenarAutos = () =>{
  vehiculos.sort((auto1,auto2)=>{
    return auto2.precio - auto1.precio;
    //ordena los vehiculos del mas caro al mas barato
  });
  return vehiculos;
}

buscarModeloY = () =>{
  return vehiculos.find(auto => auto.modelo.includes('Y'));
  
}

imprimirResultados = () =>{
  
  console.log('=============================');
  console.log(`Vehiculo mas caro: ${vehiculos[0].marca} ${vehiculos[0].modelo}`);
  console.log(`Vehiculo mas barato: ${vehiculos[vehiculos.length-1].marca} ${vehiculos[vehiculos.length-1].modelo}`);
  console.log(`Vehiculo que contiene en el modelo la letra 'Y' : ${autoY.marca} ${autoY.modelo} $${autoY.precio}`);
  console.log('=============================');
  console.log('Vehiculos ordenados por precio de mayor a menor:');
  vehiculos.forEach(vehiculo => console.log(`${vehiculo.marca} ${vehiculo.modelo}`));
}

/* GET home page. */
router.get('/', function(req, res, next) {

  cargarAutos();
  ordenarAutos();
  autoY = buscarModeloY();
  imprimirResultados();
  res.end();
});


module.exports = router;

