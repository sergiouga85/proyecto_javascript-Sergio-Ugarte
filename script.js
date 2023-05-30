/*CALCULADORA DE VALOR OHMICO PARA RESISTENCIAS DE CUATRO, CINCO Y SEIS BANDAS DE COLORES*/

/* ARREGLO DE OBJETOS*/

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

    getDatosCuatroBandas(){
        console.log('-----------------------------------------------------------------------------------------');
        console.log('               Ingreso el color', this.primerColor , ' en la primera banda               ');
        console.log('               Ingreso el color', this.segundoColor , ' en la segunda banda              ');
        console.log('               Ingreso el color', this.tercerColor , ' en la tercera banda               ');
        console.log('               Ingreso el color', this.cuartoColor , ' en la cuarta banda                ');
        console.log('-----------------------------------------------------------------------------------------');
    }

    getDatosCincoBandas(){
        console.log('-----------------------------------------------------------------------------------------');
        console.log('               Ingreso el color', this.primerColor , ' en la primera banda               ');
        console.log('               Ingreso el color', this.segundoColor , ' en la segunda banda              ');
        console.log('               Ingreso el color', this.tercerColor , ' en la tercera banda               ');
        console.log('               Ingreso el color', this.cuartoColor , ' en la cuarta banda                ');
        console.log('               Ingreso el color', this.quintoColor , ' en la quinta banda                ');
        console.log('-----------------------------------------------------------------------------------------');
    }

    getDatosSeisBandas(){
        console.log('-----------------------------------------------------------------------------------------');
        console.log('               Ingreso el color', this.primerColor , ' en la primera banda               ');
        console.log('               Ingreso el color', this.segundoColor , ' en la segunda banda              ');
        console.log('               Ingreso el color', this.tercerColor , ' en la tercera banda               ');
        console.log('               Ingreso el color', this.cuartoColor , ' en la cuarta banda                ');
        console.log('               Ingreso el color', this.quintoColor , ' en la quinta banda                ');
        console.log('               Ingreso el color', this.sestoColor , ' en la quinta banda                 ');
        console.log('-----------------------------------------------------------------------------------------');
    }

    calcularCuatroBandas(){

        let bandaUno = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.primerColor).numero;
        let bandaDos = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.segundoColor).numero; 
        let bandaTres = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.tercerColor).multiplicador;
        let Unidad= Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.tercerColor).unidad;
        let ValorDeResistencia = (bandaUno+bandaDos)* bandaTres + Unidad;
        return ValorDeResistencia
    }

    calcularCincoBandas(){

        let bandaUno = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.primerColor).numero;
        let bandaDos = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.segundoColor).numero; 
        let bandaTres = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.tercerColor).numero;
        let bandaCuatro = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.cuartoColor).multiplicador;
        let Unidad= Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.tercerColor).unidad;
        let ValorDeResistencia = (bandaUno+bandaDos+bandaTres)* bandaCuatro + Unidad;
        return ValorDeResistencia
    }

    ToleranciaCuatroBandas(){
        
        let bandaCuatro = Tolerancia.find((obj_Tolerancia)=> obj_Tolerancia.color == this.cuartoColor).porcentaje;
        return bandaCuatro
    }

    ToleranciaCincoBandas(){
        
        let bandaCinco = Tolerancia.find((obj_Tolerancia)=> obj_Tolerancia.color == this.quintoColor).porcentaje;
        return bandaCinco
    }

    coeficienteDeTemperatura(){
        let bandaSeis = PPM.find((obj_PPM)=> obj_PPM.color == this.sestoColor).coeficiente;
        return bandaSeis
    }

}
let listaResistencia =[];
let listaValorResistencia=[];
let listagetDatos=[];
let verResistencia;
let nuevaResistencia;


console.log('BIENVENIDOS A LA CALCULADORA DE VALOR OHMICO PARA RESISTENCIAS DE CUATRO , CINCO Y SEIS BANDAS');
let bandas='0';

do{   
    bandas= prompt('Ingrese la cantidad de bandas de colores de la resistencia a calcular o sino salir').toUpperCase();

    if(bandas==4){

        primerColor= prompt('Ingresa el color de la primera banda').toUpperCase();
        segundoColor= prompt('Ingresa el color de la segunda banda').toUpperCase();
        tercerColor= prompt('Ingresa el color de la tercera banda').toUpperCase();
        cuartoColor= prompt('Ingresa el color de la cuarta banda').toUpperCase();
        /*creo una nueva instancia de objetos*/
        nuevaResistencia = new resistencia(primerColor,segundoColor,tercerColor,cuartoColor);
        listagetDatos.push(nuevaResistencia.getDatosCuatroBandas());
        listaResistencia.push('Resistencia de ',nuevaResistencia.calcularCuatroBandas(),'',nuevaResistencia.ToleranciaCuatroBandas(),'de tolerancia  ');
        verResistencia=listaResistencia.join(' ');  
        console.log('Resistencia de ',nuevaResistencia.calcularCuatroBandas(),'',nuevaResistencia.ToleranciaCuatroBandas(),'de tolerancia  ');
         
    }
    
    else if(bandas==5){

        primerColor= prompt('Ingresa el color de la primera banda').toUpperCase();
        segundoColor= prompt('Ingresa el color de la segunda banda').toUpperCase();
        tercerColor= prompt('Ingresa el color de la tercera banda').toUpperCase();
        cuartoColor= prompt('Ingresa el color de la cuarta banda').toUpperCase();
        quintoColor= prompt('Ingresa el color de la quinta banda').toUpperCase();
        /*creo una nueva instancia de objetos*/
        nuevaResistencia = new resistencia(primerColor,segundoColor,tercerColor,cuartoColor,quintoColor);
        listagetDatos.push(nuevaResistencia.getDatosCincoBandas());
        listaResistencia.push('Resistencia de ',nuevaResistencia.calcularCincoBandas(),'',nuevaResistencia.ToleranciaCincoBandas(),'de tolerancia');
        verResistencia=listaResistencia.join(' ');  
        console.log('Resistencia de ',nuevaResistencia.calcularCincoBandas(),'',nuevaResistencia.ToleranciaCincoBandas(),'de tolerancia');
         
    }
    else if(bandas==6){

        primerColor= prompt('Ingresa el color de la primera banda').toUpperCase();
        segundoColor= prompt('Ingresa el color de la segunda banda').toUpperCase();
        tercerColor= prompt('Ingresa el color de la tercera banda').toUpperCase();
        cuartoColor= prompt('Ingresa el color de la cuarta banda').toUpperCase();
        quintoColor= prompt('Ingresa el color de la quinta banda').toUpperCase();
        sestoColor= prompt('Ingresa el color de la sesta banda').toUpperCase();
        /*creo una nueva instancia de objetos*/
        nuevaResistencia = new resistencia(primerColor,segundoColor,tercerColor,cuartoColor,quintoColor,sestoColor);
        listagetDatos.push(nuevaResistencia.getDatosSeisBandas());
        listaResistencia.push('Resistencia de ',nuevaResistencia.calcularCincoBandas(),'',nuevaResistencia.ToleranciaCincoBandas(),'de tolerancia con un coeficiente de temperatura de', nuevaResistencia.coeficienteDeTemperatura());
        verResistencia=listaResistencia.join(' ');  
        console.log('Resistencia de ',nuevaResistencia.calcularCincoBandas(),'',nuevaResistencia.ToleranciaCincoBandas(),'de tolerancia con un coeficiente de temperatura de', nuevaResistencia.coeficienteDeTemperatura());
         
    }
} 
while (bandas !='SALIR');








 