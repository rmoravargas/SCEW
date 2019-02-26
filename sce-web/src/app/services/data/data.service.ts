import { Injectable } from '@angular/core';@Injectable({
  providedIn: 'root'
})
export class DataService {  
  private  estudentsList = [{
    "nombre": "Carlos Mora",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9"
},
{
    "nombre": "Angela García",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9"
},
{
    "nombre": "Cristhian Brenes",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "8"
},
{
    "nombre": "Luis Rodriguez",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9"
},
{
    "nombre": "Alejandra Godinez",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "10"
},
{
    "nombre": "Esteban Saenz",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9"
},
{
    "nombre": "Maria Cordero",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "10"
},
{
    "nombre": "Angel Vargas",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9"
},
{
    "nombre": "Pedro Escobar",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "8"
},
{
    "nombre": "Jaime Celeita",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9.5"
},
{
    "nombre": "Ileana Salas",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "9"
},
{
    "nombre": "",
    "curso": "Programación Web",
    "año": 2019,
    "nota": "10"
}
];

constructor() { }

getStudentList =() => this.estudentsList;
}
