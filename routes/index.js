var express = require('express');
var router = express.Router();

class Vehiculo{
  constructor(marca,modelo,precio){
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
  }
}

class Auto extends Vehiculo{
  constructor(marca,modelo,puertas,precio){
    super.marca = marca;
    super.modelo = modelo;
    this.puertas = puertas;
    super.precio = precio;
  }
  imprimir(){
    return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: ${this.precio}`
  }
}

class Moto extends Vehiculo{
  constructor(marca,modelo,cilindrada,precio){
    super.marca = marca;
    super.modelo = modelo;
    this.cilindrada = cilindrada;
    super.precio = precio;
  }
  imprimir(){
    return `Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada}c // Precio: $${this.precio}`
  }
}
/* GET home page. */
router.get('/', function(req, res, next) {
  
  
  res.end();
});


module.exports = router;

