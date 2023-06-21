
let selectorPrimerColorUno = document.getElementById("primeraBandaUno");
let selectorPrimerColorDos = document.getElementById("primeraBandaDos");
let selectorPrimerColorTres = document.getElementById("primeraBandaTres");

let selectorSegundoColorUno = document.getElementById("segundaBandaUno");
let selectorSegundoColorDos = document.getElementById("segundaBandaDos");
let selectorSegundoColorTres = document.getElementById("segundaBandaTres");

let selectorTercerColorUno = document.getElementById("terceraBandaUno");
let selectorTercerColorDos = document.getElementById("terceraBandaDos");
let selectorTercerColorTres = document.getElementById("terceraBandaTres");

let selectorCuartoColorUno = document.getElementById("cuartaBandaUno");
let selectorCuartoColorDos = document.getElementById("cuartaBandaDos");
let selectorCuartoColorTres = document.getElementById("cuartaBandaTres");

let selectorQuintoColorUno = document.getElementById("quintaBandaUno");
let selectorQuintoColorDos = document.getElementById("quintaBandaDos");

let selectorSestoColor = document.getElementById("sestaBanda");
      
let primerColorUno= selectorPrimerColorUno.addEventListener("change",(e)=>{
        primerColorUno= selectorPrimerColorUno.value;
        console.log(primerColorUno);
        return primerColorUno;
});

let primerColorDos= selectorPrimerColorDos.addEventListener("change",(e)=>{
    primerColorDos=selectorPrimerColorDos.value;
    console.log(primerColorDos);
    return primerColorDos;
});

let primerColorTres= selectorPrimerColorTres.addEventListener("change",(e)=>{
    primerColorTres=selectorPrimerColorTres.value;
    console.log(primerColorTres);
    return primerColorTres;
});


let segundoColorUno= selectorSegundoColorUno.addEventListener("change",(e)=>{
        segundoColorUno= selectorSegundoColorUno.value;
        console.log(segundoColorUno);
        return segundoColorUno;
});

let segundoColorDos= selectorSegundoColorDos.addEventListener("change",(e)=>{
    segundoColorDos= selectorSegundoColorDos.value;
    console.log(segundoColorDos);
    return segundoColorDos;
});

let segundoColorTres= selectorSegundoColorTres.addEventListener("change",(e)=>{
    segundoColorTres= selectorSegundoColorTres.value;
    console.log(segundoColorTres);
    return segundoColorTres;
});


let tercerColorUno= selectorTercerColorUno.addEventListener("change",(e)=>{
    tercerColorUno= selectorTercerColorUno.value;
    console.log(tercerColorUno);
    return tercerColorUno;
});

let tercerColorDos= selectorTercerColorDos.addEventListener("change",(e)=>{
    tercerColorDos= selectorTercerColorDos.value;
    console.log(tercerColorDos);
    return tercerColorDos;
});

let tercerColorTres= selectorTercerColorTres.addEventListener("change",(e)=>{
    tercerColorTres= selectorTercerColorTres.value;
    console.log(tercerColorTres);
    return tercerColorTres;
});

let cuartoColorUno= selectorCuartoColorUno.addEventListener("change",(e)=>{
    cuartoColorUno= selectorCuartoColorUno.value;
    console.log(cuartoColorUno);
    return cuartoColorUno;
});   

let cuartoColorDos= selectorCuartoColorDos.addEventListener("change",(e)=>{
    cuartoColorDos= selectorCuartoColorDos.value;
    console.log(cuartoColorDos);
    return cuartoColorDos;
});  

let cuartoColorTres= selectorCuartoColorTres.addEventListener("change",(e)=>{
    cuartoColorTres= selectorCuartoColorTres.value;
    console.log(cuartoColorTres);
    return cuartoColorTres;
});  

let quintoColorUno= selectorQuintoColorUno.addEventListener("change",(e)=>{
    quintoColorUno= selectorQuintoColorUno.value;
    console.log(quintoColorUno);
    return quintoColorUno;
});

let quintoColorDos= selectorQuintoColorDos.addEventListener("change",(e)=>{
    quintoColorDos= selectorQuintoColorDos.value;
    console.log(quintoColorDos);
    return quintoColorDos;
});

let sestoColorColor= selectorSestoColor.addEventListener("change",(e)=>{
    sestoColor= selectorSestoColor.value;
    return sestoColor;
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

class resistenciaCuatro {
    constructor(primerColorUno,segundoColorUno,tercerColorUno,cuartoColorUno){
        this.primerColorUno = primerColorUno;
        this.segundoColorUno = segundoColorUno;
        this.tercerColorUno= tercerColorUno;
        this.cuartoColorUno= cuartoColorUno;
    }
    calcularCuatroBandas(){

        let bandaUno = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.primerColorUno).numero;
        let bandaDos = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.segundoColorUno).numero;
        let bandaTres = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.tercerColorUno).multiplicador;
        let Unidad= Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.tercerColorUno).unidad;
        let ValorDeResistenciaCuatro = (bandaUno+bandaDos)* bandaTres + Unidad;
        return ValorDeResistenciaCuatro
    }
    ToleranciaCuatroBandas(){
        
        let bandaCuatro = Tolerancia.find((obj_Tolerancia)=> obj_Tolerancia.color == this.cuartoColorUno).porcentaje;
        return bandaCuatro
    }  
}

class resistenciaCinco{
    constructor(primerColorDos,segundoColorDos,tercerColorDos,cuartoColorDos,quintoColorUno){
        this.primerColorDos = primerColorDos;
        this.segundoColorDos = segundoColorDos;
        this.tercerColorDos= tercerColorDos;
        this.cuartoColorDos= cuartoColorDos;
        this.quintoColorUno= quintoColorUno;
    }
    calcularCincoBandas(){

        let bandaUno = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.primerColorDos).numero;
        let bandaDos = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.segundoColorDos).numero;
        let bandaTres = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.tercerColorDos).numero;
        let bandaCuatro = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.cuartoColorDos).multiplicador;
        let Unidad= Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.cuartoColorDos).unidad;
        let ValorDeResistenciaCinco = (bandaUno+bandaDos+bandaTres)* bandaCuatro + Unidad;
        return ValorDeResistenciaCinco
    }
    ToleranciaCincoBandas(){   
        let bandaCinco = Tolerancia.find((obj_Tolerancia)=> obj_Tolerancia.color == this.quintoColorUno).porcentaje;
        return bandaCinco
    }
}

class resistenciaSeis{
    constructor(primerColorTres,segundoColorTres,tercerColorTres,cuartoColorTres,quintoColorDos,sestoColor){
        this.primerColorTres = primerColorTres;
        this.segundoColorTres = segundoColorTres;
        this.tercerColorTres = tercerColorTres;
        this.cuartoColorTres = cuartoColorTres;
        this.quintoColorDos = quintoColorDos;
        this.sestoColor = sestoColor;
    }
    calcularSeisBandas(){

        let bandaUno = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.primerColorTres).numero;
        let bandaDos = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.segundoColorTres).numero; 
        let bandaTres = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.tercerColorTres).numero;
        let bandaCuatro = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.cuartoColorTres).multiplicador;
        let Unidad= Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.tercerColorTres).unidad;
        let ValorDeResistencia = (bandaUno+bandaDos+bandaTres)* bandaCuatro + Unidad;
        return ValorDeResistencia
    }
    ToleranciaSeisBandas(){
        
        let bandaCinco = Tolerancia.find((obj_Tolerancia)=> obj_Tolerancia.color == this.quintoColorDos).porcentaje;
        return bandaCinco
    }
    coeficienteDeTemperatura(){
        let bandaSeis = PPM.find((obj_PPM)=> obj_PPM.color == this.sestoColor).coeficiente;
        return bandaSeis
    }
}

let listaResistencia =[];
let nuevaResistencia;
let mostrarValor;
let listaResistenciaJSON=[];

let btnCalcularCuatroBandas= document.getElementById("btnCalcularCuatroBandas");

btnCalcularCuatroBandas.addEventListener("click", (e)=>{

    nuevaResistencia = new resistenciaCuatro(primerColorUno,segundoColorUno,tercerColorUno,cuartoColorUno);
    console.log (nuevaResistencia.calcularCuatroBandas(),nuevaResistencia.ToleranciaCuatroBandas()); 
    listaResistencia.push(' Resistencia de '+nuevaResistencia.calcularCuatroBandas()+" con "+nuevaResistencia.ToleranciaCuatroBandas()+" de Tolerancia  ");   
    mostrarValor=document.getElementById("valorResistivoCuatro");
    mostrarValor.value= ('Resistencia de '+nuevaResistencia.calcularCuatroBandas() +" con "+ nuevaResistencia.ToleranciaCuatroBandas()+" de Tolerancia");
    listaResistenciaJSON= JSON.stringify(listaResistencia);
    localStorage.setItem("listaResistencia",listaResistenciaJSON);
    selectorPrimerColorUno.value="";
    selectorSegundoColorUno.value="";
    selectorTercerColorUno.value="";
    selectorCuartoColorUno.value="";
}); 

let btnCalcularCincoBandas= document.getElementById("btnCalcularCincoBandas");

btnCalcularCincoBandas.addEventListener("click", (e)=>{ 

    nuevaResistencia = new resistenciaCinco(primerColorDos,segundoColorDos,tercerColorDos,cuartoColorDos,quintoColorUno);
    console.log (nuevaResistencia.calcularCincoBandas()  +" con "+nuevaResistencia.ToleranciaCincoBandas()); 
    listaResistencia.push('  Resistencia de '+nuevaResistencia.calcularCincoBandas()+" con "+nuevaResistencia.ToleranciaCincoBandas()+"de Tolerancia  "); 
    mostrarValor=document.getElementById("valorResistivoCinco");
    mostrarValor.value= ('Resistencia de '+nuevaResistencia.calcularCincoBandas() +" con "+ nuevaResistencia.ToleranciaCincoBandas()+" de Tolerancia");
    listaResistenciaJSON= JSON.stringify(listaResistencia);
    localStorage.setItem("listaResistencia",listaResistenciaJSON);
    selectorPrimerColorDos.value="";
    selectorSegundoColorDos.value="";
    selectorTercerColorDos.value="";
    selectorCuartoColorDos.value="";
    selectorQuintoColorUno.value="";
}); 

let btnCalcularSeisBandas= document.getElementById("btnCalcularSeisBandas");

btnCalcularSeisBandas.addEventListener("click", (e)=>{
    nuevaResistencia = new resistenciaSeis(primerColorTres,segundoColorTres,tercerColorTres,cuartoColorTres,quintoColorDos,sestoColor);
    console.log (nuevaResistencia.calcularSeisBandas(),nuevaResistencia.ToleranciaSeisBandas(),nuevaResistencia.coeficienteDeTemperatura()); 
    listaResistencia.push(' Resistencia de '+nuevaResistencia.calcularSeisBandas()+" con "+nuevaResistencia.ToleranciaSeisBandas()+" de Tolerancia con un coeficiente de temperatura de " +nuevaResistencia.coeficienteDeTemperatura(),"  "); 
    mostrarValor=document.getElementById("valorResistivoSeis");
    mostrarValor.value= ('Resistencia de '+nuevaResistencia.calcularSeisBandas() +" con "+ nuevaResistencia.ToleranciaSeisBandas()+" de Tolerancia con un coeficiente de temperatura de " + nuevaResistencia.coeficienteDeTemperatura());
    listaResistenciaJSON= JSON.stringify(listaResistencia);
    localStorage.setItem("listaResistencia",listaResistenciaJSON);
    selectorPrimerColorTres.value="";
    selectorSegundoColorTres.value="";
    selectorTercerColorTres.value="";
    selectorCuartoColorTres.value="";
    selectorQuintoColorDos.value="";
    selectorSestoColor.value="";
});

let btnHistorialCuatro=document.getElementById("btnHistorialCuatro");

btnHistorialCuatro.addEventListener("click", (e)=>{

    let arregloHistorial=localStorage.getItem("listaResistencia");
    arregloHistorial = JSON.parse(arregloHistorial);
    console.log(arregloHistorial);
    const lista = document.getElementById("parrafohistorial");
    const fragmento =document.createDocumentFragment();
    const parrafo_historial = document.createElement("p");
    const borrarHistorial =document.getElementById("parrafohistorial");
    borrarHistorial.innerHTML = "";
    parrafo_historial.textContent=arregloHistorial;
    parrafo_historial.Id='parrafoHistorial';
    console.log(parrafo_historial);
    fragmento.appendChild(parrafo_historial);
    lista.appendChild(fragmento);

}); 

let clearHistorialCuatro=document.getElementById("clearHistorialCuatro");

clearHistorialCuatro.addEventListener("click", (e)=>{

    localStorage.clear();
    listaResistencia=[];
    const borrarHistorial =document.getElementById("parrafohistorial");
    borrarHistorial.innerHTML = "";
    mostrarValor.value="";
});

let btnHistorialCinco=document.getElementById("btnHistorialCinco");

btnHistorialCinco.addEventListener("click", (e)=>{

    let arregloHistorial=localStorage.getItem("listaResistencia");
    arregloHistorial = JSON.parse(arregloHistorial);
    console.log(arregloHistorial);
    const lista = document.getElementById("parrafohistorial");
    const fragmento =document.createDocumentFragment();
    const parrafo_historial = document.createElement("p");
    const borrarHistorial =document.getElementById("parrafohistorial");
    borrarHistorial.innerHTML = "";
    parrafo_historial.textContent=arregloHistorial;
    parrafo_historial.Id='parrafoHistorial';
    console.log(parrafo_historial);
    fragmento.appendChild(parrafo_historial);
    lista.appendChild(fragmento);
}); 

let clearHistoriaCinco=document.getElementById("clearHistorialCinco");

clearHistoriaCinco.addEventListener("click", (e)=>{

    localStorage.clear();
    listaResistencia=[];
    const borrarHistorial =document.getElementById("parrafohistorial");
    borrarHistorial.innerHTML = "";
    mostrarValor.value="";
});

let btnHistorialSeis=document.getElementById("btnHistorialSeis");

btnHistorialSeis.addEventListener("click", (e)=>{

    let arregloHistorial=localStorage.getItem("listaResistencia");
    arregloHistorial = JSON.parse(arregloHistorial);
    console.log(arregloHistorial);
    const lista = document.getElementById("parrafohistorial");
    const fragmento =document.createDocumentFragment();
    const parrafo_historial = document.createElement("p");
    const borrarHistorial =document.getElementById("parrafohistorial");
    borrarHistorial.innerHTML = "";
    parrafo_historial.textContent=arregloHistorial;
    parrafo_historial.Id='parrafoHistorial';
    console.log(parrafo_historial);
    fragmento.appendChild(parrafo_historial);
    lista.appendChild(fragmento);
}); 

let clearHistoriaSeis=document.getElementById("clearHistorialSeis");

clearHistoriaSeis.addEventListener("click", (e)=>{

    localStorage.clear();
    listaResistencia=[];
    const borrarHistorial =document.getElementById("parrafohistorial");
    borrarHistorial.innerHTML = "";
    mostrarValor.value="";

});


