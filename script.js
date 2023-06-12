
let btn_Cuatro_Bandas= document.getElementById("btnCuatroBandas");

let btn_Cinco_Bandas= document.getElementById("btnCincoBandas");

let btn_Seis_Bandas= document.getElementById("btnCincoBandas");

let cuatroBandas;


btn_Cuatro_Bandas.addEventListener("click",function(e){

    console.log("Seleccionaste la pestaña para calcular Resistencia de 4 bandas");  
    
});

let selectorPrimerColor = document.getElementById("primeraBanda");
let selectorSegundoColor = document.getElementById("segundaBanda");
let selectorTercerColor = document.getElementById("terceraBanda");
let selectorCuartoColor = document.getElementById("cuartaBanda");
    
    
let primerColor= selectorPrimerColor.addEventListener("change",function(e){
        primerColor=selectorPrimerColor.value;
        return primerColor;
});


let segundoColor= selectorSegundoColor.addEventListener("change",function(e){
        segundoColor= selectorSegundoColor.value;
        return segundoColor;
});


let tercerColor= selectorTercerColor.addEventListener("change",function(e){
        tercerColor= selectorTercerColor.value;
        return tercerColor;
});


let cuartoColor= selectorCuartoColor.addEventListener("change",function(e){
        cuartoColor= selectorCuartoColor.value;
        return cuartoColor;
});   


let Resistencia=[
    {color:'NEGRO' , numero:'0', multiplicador:1, unidad:'Ω'},
    {color:'MARRON' , numero:'1', multiplicador:10, unidad:'Ω'},
    {color:'ROJO' , numero:'2', multiplicador:100, unidad:'Ω'},
    {color:'NARANJA' , numero:'3', multiplicador:1, unidad:'KΩ'},
    {color:'AMARILLO' , numero:'4', multiplicador:10, unidad:'KΩ'},
    {color:'VERDE' , numero:'5', multiplicador:100, unidad:'KΩ'},
    {color:'AZUL' , numero:'6', multiplicador:1, unidad:'MΩ'},
    {color:'VIOLETA' , numero:'7', multiplicador:10, unidad:'MΩ'},
    {color:'GRIS' , numero:'8', multiplicador:100, unidad:'MΩ'},
    {color:'BLANCO' , numero:'9', multiplicador:1, unidad:'GΩ'}
];

let Tolerancia=[
    {color:'MARRON', porcentaje:'± 1%'},
    {color:'ROJO', porcentaje:'± 2%'},
    {color:'VERDE', porcentaje:'± 0.5%'},
    {color:'AZUL', porcentaje:'± 0.25%'},
    {color:'VIOLETA', porcentaje:'± 0.1%'},
    {color:'GRIS', porcentaje:'± 0.05%'},
    {color:'ORO', porcentaje:'± 5%'},
    {color:'PLATA', porcentaje:'± 10%'}
];

let PPM=[
    {color:'MARRON', coeficiente:'100ppm'},
    {color:'ROJO', coeficiente:'50ppm'},
    {color:'NARANJA', coeficiente:'15ppm'},
    {color:'AMARILLO', coeficiente:'25ppm'},
    {color:'AZUL', coeficiente:'10ppm'},
    {color:'VIOLETA',coeficiente:'5ppm'}
];

/* OBJETO CONSTRUCTOR*/ 

class resistencia {

    constructor(primerColor,segundoColor,tercerColor,cuartoColor,quintoColor,sestoColor){
        this.primerColor = primerColor;
        this.segundoColor = segundoColor;
        this.tercerColor= tercerColor;
        this.cuartoColor= cuartoColor;
        this.quintoColor= quintoColor;
        this.sestoColor= sestoColor;
    }

    calcularCuatroBandas(){

        let bandaUno = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.primerColor).numero;
        let bandaDos = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.segundoColor).numero; 
        let bandaTres = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.tercerColor).multiplicador;
        let Unidad= Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.tercerColor).unidad;
        let ValorDeResistencia = (bandaUno+bandaDos)* bandaTres + Unidad;
        return ValorDeResistencia
    }

    ToleranciaCuatroBandas(){
        
        let bandaCuatro = Tolerancia.find((obj_Tolerancia)=> obj_Tolerancia.color == this.cuartoColor).porcentaje;
        return bandaCuatro
    }
}

let nuevaResistencia;
let valor;



function calcular(){
    nuevaResistencia = new resistencia(primerColor,segundoColor,tercerColor,cuartoColor);
    console.log (nuevaResistencia.calcularCuatroBandas(),nuevaResistencia.ToleranciaCuatroBandas());  
    mostrarValor=document.getElementById("valorResistivo");
    mostrarValor.value= ('Resistencia de '+nuevaResistencia.calcularCuatroBandas() +" con "+ nuevaResistencia.ToleranciaCuatroBandas()+" de Tolerancia");
}


let btnCalcular= document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", calcular); 






































    










