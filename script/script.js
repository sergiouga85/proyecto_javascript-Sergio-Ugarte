let selectorPrimerColor= document.getElementById("primeraBanda");
let first_Band=document.getElementById("firstBand");

let selectorSegundoColor= document.getElementById("segundaBanda");
let second_Band=document.getElementById("secondBand");

let selectorTercerColor= document.getElementById("terceraBanda");
let third_Band=document.getElementById("thirdBand");

let selectorCuartoColor = document.getElementById("cuartaBanda");
let selectorCuartoColorDos = document.getElementById("cuartaBandaDos");
let fourth_Band=document.getElementById("fourthBand");

let selectorQuintoColor= document.getElementById("quintaBanda");
let fifth_Band=document.getElementById("fifthBand");

let selectorSestoColor= document.getElementById("sestaBanda");
let sixth_Band=document.getElementById("sixthBand");


let selectorCuatroBandas=document.getElementById("btnCuatroBandas");

let mostrarCuatroBandas=selectorCuatroBandas.addEventListener("click",(e)=>{
    let cuartaBandaRes = document.getElementById("cuartaBandaRes");
    cuartaBandaRes.style.display='block';
    let cuartaBandaResDos = document.getElementById("cuartaBandaResDos");
    cuartaBandaResDos.style.display='none';
    let mostrarValorComercial=document.getElementById("valorComercial");
    mostrarValorComercial.style.display='block';
    let quintaBandaRes = document.getElementById("quintaBandaRes");
    quintaBandaRes.style.display='none';
    let sestaBandaRes = document.getElementById("sestaBandaRes");
    sestaBandaRes.style.display='none';
    let mostrarBtnCuatro=document.getElementById("btnCalcularCuatroBandas");
    mostrarBtnCuatro.style.display='block';
    let mostrarBtnCinco=document.getElementById("btnCalcularCincoBandas");
    mostrarBtnCinco.style.display='none';
    let mostrarBtnSeis=document.getElementById("btnCalcularSeisBandas");
    mostrarBtnSeis.style.display='none';
    let diagramaResistencia=document.getElementById("resistenciaUno");
    diagramaResistencia.style.display='block';
    let diagramaResistenciaDos=document.getElementById("resistenciaDos");
    diagramaResistenciaDos.style.display='none';
    let diagramaResistenciaTres=document.getElementById("resistenciaTres");
    diagramaResistenciaTres.style.display='none';
    first_Band.style.backgroundColor="";
    second_Band.style.backgroundColor="";
    third_Band.style.backgroundColor="";
    fourth_Band.style.backgroundColor="";
    fifth_Band.style.backgroundColor="";
    sixth_Band.style.backgroundColor="";
    mostrarValor.value="";
});

let selectorCincoBandas=document.getElementById("btnCincoBandas");

let mostrarCincoBandas=selectorCincoBandas.addEventListener("click",(e)=>{
    let cuartaBandaRes = document.getElementById("cuartaBandaRes");
    cuartaBandaRes.style.display='none';
    let cuartaBandaResDos = document.getElementById("cuartaBandaResDos");
    cuartaBandaResDos.style.display='block';
    let quintaBandaRes = document.getElementById("quintaBandaRes");
    quintaBandaRes.style.display='block'; 
    let sestaBandaRes = document.getElementById("sestaBandaRes");
    sestaBandaRes.style.display='none';
    let mostrarValorComercial=document.getElementById("valorComercial");
    mostrarValorComercial.style.display='none';
    let mostrarBtnCuatro=document.getElementById("btnCalcularCuatroBandas");
    mostrarBtnCuatro.style.display='none';
    let mostrarBtnCinco=document.getElementById("btnCalcularCincoBandas");
    mostrarBtnCinco.style.display='block';
    let mostrarBtnSeis=document.getElementById("btnCalcularSeisBandas");
    mostrarBtnSeis.style.display='none';
    let diagramaResistencia=document.getElementById("resistenciaUno");
    diagramaResistencia.style.display='none';
    let diagramaResistenciaDos=document.getElementById("resistenciaDos");
    diagramaResistenciaDos.style.display='block';
    let diagramaResistenciaTres=document.getElementById("resistenciaTres");
    diagramaResistenciaTres.style.display='none';
    first_Band.style.backgroundColor="";
    second_Band.style.backgroundColor="";
    third_Band.style.backgroundColor="";
    fourth_Band.style.backgroundColor="";
    fifth_Band.style.backgroundColor="";
    sixth_Band.style.backgroundColor="";
    mostrarValor.value="";
});

let selectorSeisBandas=document.getElementById("btnSeisBandas");

let mostrarSeisBandas=selectorSeisBandas.addEventListener("click",(e)=>{
    let cuartaBandaRes = document.getElementById("cuartaBandaRes");
    cuartaBandaRes.style.display='none';
    let cuartaBandaResDos = document.getElementById("cuartaBandaResDos");
    cuartaBandaResDos.style.display='block';
    let quintaBandaRes = document.getElementById("quintaBandaRes");
    quintaBandaRes.style.display='block'; 
    let sestaBandaRes = document.getElementById("sestaBandaRes");
    sestaBandaRes.style.display='block';
    let mostrarValorComercial=document.getElementById("valorComercial");
    mostrarValorComercial.style.display='none';
    let mostrarBtnCuatro=document.getElementById("btnCalcularCuatroBandas");
    mostrarBtnCuatro.style.display='none';
    let mostrarBtnCinco=document.getElementById("btnCalcularCincoBandas");
    mostrarBtnCinco.style.display='none';
    let mostrarBtnSeis=document.getElementById("btnCalcularSeisBandas");
    mostrarBtnSeis.style.display='block';
    let diagramaResistencia=document.getElementById("resistenciaUno");
    diagramaResistencia.style.display='none';
    let diagramaResistenciaDos=document.getElementById("resistenciaDos");
    diagramaResistenciaDos.style.display='none';
    let diagramaResistenciaTres=document.getElementById("resistenciaTres");
    diagramaResistenciaTres.style.display='block';
    first_Band.style.backgroundColor="";
    second_Band.style.backgroundColor="";
    third_Band.style.backgroundColor="";
    fourth_Band.style.backgroundColor="";
    fifth_Band.style.backgroundColor="";
    sixth_Band.style.backgroundColor="";
    mostrarValor.value="";
});

    
let primerColor= selectorPrimerColor.addEventListener("change",(e)=>{
    primerColor= selectorPrimerColor.value;
    first_Band.style.backgroundColor= primerColor;
    console.log(primerColor);
    return primerColor;
});

let segundoColor= selectorSegundoColor.addEventListener("change",(e)=>{
    segundoColor= selectorSegundoColor.value;
    second_Band.style.backgroundColor= segundoColor;
    console.log(segundoColor);
    return segundoColor;
});

let tercerColor= selectorTercerColor.addEventListener("change",(e)=>{
    tercerColor= selectorTercerColor.value;
    third_Band.style.backgroundColor= tercerColor;
    console.log(tercerColor);
    return tercerColor;
});

let cuartoColor= selectorCuartoColor.addEventListener("change",(e)=>{
    cuartoColor= selectorCuartoColor.value;
    fourth_Band.style.backgroundColor= cuartoColor;
    console.log(cuartoColor);
    return cuartoColor;
});

let cuartoColorDos= selectorCuartoColorDos.addEventListener("change",(e)=>{
    cuartoColorDos= selectorCuartoColorDos.value;
    fourth_Band.style.backgroundColor= cuartoColorDos;
    console.log(cuartoColorDos);
    return cuartoColorDos;
});

let quintoColor= selectorQuintoColor.addEventListener("change",(e)=>{
    quintoColor= selectorQuintoColor.value;
    fifth_Band.style.backgroundColor= quintoColor;
    console.log(quintoColor);
    return quintoColor;
});


let sestoColor= selectorSestoColor.addEventListener("change",(e)=>{
    sestoColor= selectorSestoColor.value;
    sixth_Band.style.backgroundColor= sestoColor;
    return sestoColor;
});


let Resistencia=[
    {color: 'black' , numero:'0', multiplicador:1, unidad:'Ω'},
    {color: 'brown' , numero:'1', multiplicador:10, unidad:'Ω'},
    {color: 'red' , numero:'2', multiplicador:0.1, unidad:'KΩ'},
    {color: 'orange' , numero:'3', multiplicador:1, unidad:'KΩ'},
    {color: 'yellow' , numero:'4', multiplicador:10, unidad:'KΩ'},
    {color: 'green' , numero:'5', multiplicador:0.1, unidad:'MΩ'},
    {color: 'blue' , numero:'6', multiplicador:1, unidad:'MΩ'},
    {color: 'blueviolet' , numero:'7', multiplicador:10, unidad:'MΩ'},
    {color: 'gray' , numero:'8', multiplicador:0.1, unidad:'GΩ'},
    {color: 'white' , numero:'9', multiplicador:1, unidad:'GΩ'}
];

let Tolerancia=[
    {color: 'brown', porcentaje:'± 1%'},
    {color: 'red', porcentaje:'± 2%'},
    {color: 'green', porcentaje:'± 0.5%'},
    {color: 'blue', porcentaje:'± 0.25%'},
    {color: 'blueviolet', porcentaje:'± 0.1%'},
    {color: 'gray', porcentaje:'± 0.05%'},
    {color: 'gold', porcentaje:'± 5%'},
    {color: 'silver', porcentaje:'± 10%'}
];

let PPM=[
    {color: 'brown', coeficiente:'100ppm'},
    {color: 'red', coeficiente:'50ppm'},
    {color: 'orange', coeficiente:'15ppm'},
    {color: 'yellow', coeficiente:'25ppm'},
    {color: 'blue', coeficiente:'10ppm'},
    {color: 'blueviolet',coeficiente:'5ppm'}
];

/* OBJETO CONSTRUCTOR*/ 

class resistenciaCuatro {

    constructor(primerColor,segundoColor,tercerColor,cuartoColor){
        this.primerColor= primerColor;
        this.segundoColor = segundoColor;
        this.tercerColor= tercerColor;
        this.cuartoColor= cuartoColor;
    }
    calcularCuatroBandas(){
        let bandaUno = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.primerColor).numero;
        let bandaDos = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.segundoColor).numero;
        let bandaTres = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.tercerColor).multiplicador;
        let ValorDeResistenciaCuatro = (bandaUno+bandaDos)* bandaTres;
        if(ValorDeResistenciaCuatro == 3.3000000000000003 || ValorDeResistenciaCuatro ==6.6000000000000005){
            return (ValorDeResistenciaCuatro).toFixed(1)
         } else{
         return ValorDeResistenciaCuatro
         }    
    }

    unidadResCuatro(){
        let unidad= Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.tercerColor).unidad;
        return unidad;
    }
    
    ToleranciaCuatroBandas(){
        
        let bandaCuatro = Tolerancia.find((obj_Tolerancia)=> obj_Tolerancia.color == this.cuartoColor).porcentaje;
        return bandaCuatro
    } 
}

class resistenciaCinco {

    constructor(primerColor,segundoColor,tercerColor,cuartoColorDos,quintoColor,sestoColor){
        this.primerColor= primerColor;
        this.segundoColor = segundoColor;
        this.tercerColor= tercerColor;
        this.cuartoColorDos= cuartoColorDos;
        this.quintoColor= quintoColor;
        this.sestoColor= sestoColor;
    }
    calcularCincoBandas(){

        let bandaUno = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.primerColor).numero;
        let bandaDos = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.segundoColor).numero;
        let bandaTres = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.tercerColor).numero;
        let bandaCuatro = Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.cuartoColorDos).multiplicador;
        
        let ValorDeResistenciaCinco = (bandaUno+bandaDos+bandaTres)* bandaCuatro;
        if(ValorDeResistenciaCinco == 3.3000000000000003 || ValorDeResistenciaCinco ==6.6000000000000005){
            return (ValorDeResistenciaCinco).toFixed(1)
         } else{
         return ValorDeResistenciaCinco
         }     
    }

    unidadResCinco(){
        let unidad= Resistencia.find((obj_Resistencia)=> obj_Resistencia.color == this.cuartoColorDos).unidad;
        return unidad;
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
let nuevaResistencia;
let mostrarValor;
let mostrarValorComercial;
let listaResistenciaJSON=[];

let btnCalcularCuatroBandas= document.getElementById("btnCalcularCuatroBandas");

btnCalcularCuatroBandas.addEventListener("click", (e)=>{

    try{
        nuevaResistencia = new resistenciaCuatro(primerColor,segundoColor,tercerColor,cuartoColor);

        console.log (nuevaResistencia.calcularCuatroBandas(),nuevaResistencia.unidadResCuatro(),nuevaResistencia.ToleranciaCuatroBandas()); 
        listaResistencia.push(' Resistencia de '+nuevaResistencia.calcularCuatroBandas()+nuevaResistencia.unidadResCuatro()+" con "+nuevaResistencia.ToleranciaCuatroBandas()+" de tolerancia  ");   
        mostrarValor=document.getElementById("valorResistivo");
        mostrarValor.value= ('Resistencia de '+nuevaResistencia.calcularCuatroBandas()+nuevaResistencia.unidadResCuatro()+" con "+ nuevaResistencia.ToleranciaCuatroBandas()+" de tolerancia");
        listaResistenciaJSON= JSON.stringify(listaResistencia);
        localStorage.setItem("listaResistencia",listaResistenciaJSON);
        selectorPrimerColor.value="";
        selectorSegundoColor.value="";
        selectorTercerColor.value="";
        selectorCuartoColor.value="";
        selectorQuintoColor.value="";
        selectorSestoColor.value="";
        primerColor="";
        segundoColor="";
        tercerColor="";
        cuartoColor="";

        fetch("resistenciasComerciales.json")
        .then( response=> response.json())
        .then(data => {
            
            let valorCalculado= nuevaResistencia.calcularCuatroBandas();
            let resistencias= data.resistenciasComerciales;    
            let valorComercial = resistencias.filter(x => true)
                .filter(resistencias => resistencias.valor >= valorCalculado)
                .reduce(function (acum, resistencias) {
                    if (acum === null) {
                        return resistencias;
                    } else if (resistencias.valor < acum.valor) {
                        return resistencias;
                    }
                    return acum;
                    }, null); 
            mostrarValorComercial=document.getElementById("mostrarValorComercial");
            mostrarValorComercial.value= valorComercial.valor+ nuevaResistencia.unidadResCuatro()+" con "+ nuevaResistencia.ToleranciaCuatroBandas()+" de tolerancia";
        })

    }
    catch(error){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'NO INGRESO LOS COLORES DE LAS BANDAS!',
            footer: 'Ingrese los colores de las bandas y presione Calcular nuevamente'
          })         
    }

});

let btnCalcularCincoBandas= document.getElementById("btnCalcularCincoBandas");

btnCalcularCincoBandas.addEventListener("click", (e)=>{ 


    try{
    nuevaResistencia = new resistenciaCinco(primerColor,segundoColor,tercerColor,cuartoColorDos,quintoColor);
    console.log (nuevaResistencia.calcularCincoBandas(),nuevaResistencia.unidadResCinco(),nuevaResistencia.ToleranciaCincoBandas()); 
    listaResistencia.push('  Resistencia de '+nuevaResistencia.calcularCincoBandas()+nuevaResistencia.unidadResCinco()+" con "+nuevaResistencia.ToleranciaCincoBandas()+"de tolerancia  "); 
    mostrarValor=document.getElementById("valorResistivo");
    mostrarValor.value= ('Resistencia de '+nuevaResistencia.calcularCincoBandas()+nuevaResistencia.unidadResCinco()+" con "+ nuevaResistencia.ToleranciaCincoBandas()+" de tolerancia");
    listaResistenciaJSON= JSON.stringify(listaResistencia);
    localStorage.setItem("listaResistencia",listaResistenciaJSON);
    selectorPrimerColor.value="";
    selectorSegundoColor.value="";
    selectorTercerColor.value="";
    selectorCuartoColorDos.value="";
    selectorQuintoColor.value="";
    primerColor="";
    segundoColor="";
    tercerColor="";
    cuartoColorDos="";
    quintoColor="";
    sestoColor="";
    }
    catch(error){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'NO INGRESO LOS COLORES DE LAS BANDAS!',
            footer: 'Ingrese los colores de las bandas y presione Calcular nuevamente'
          })   
    }
    
}); 

let btnCalcularSeisBandas= document.getElementById("btnCalcularSeisBandas");
btnCalcularSeisBandas.addEventListener("click", (e)=>{

    try{
    nuevaResistencia = new resistenciaCinco(primerColor,segundoColor,tercerColor,cuartoColorDos,quintoColor,sestoColor);
    console.log (nuevaResistencia.calcularCincoBandas(),+nuevaResistencia.unidadResCinco(),nuevaResistencia.ToleranciaCincoBandas(),nuevaResistencia.coeficienteDeTemperatura()); 
    listaResistencia.push(' Resistencia de '+nuevaResistencia.calcularCincoBandas()+nuevaResistencia.unidadResCinco()+" con "+nuevaResistencia.ToleranciaCincoBandas()+" de tolerancia con un coeficiente de temperatura de " +nuevaResistencia.coeficienteDeTemperatura(),"  "); 
    mostrarValor=document.getElementById("valorResistivo");
    mostrarValor.value= ('Resistencia de '+nuevaResistencia.calcularCincoBandas()+nuevaResistencia.unidadResCinco()+" con "+ nuevaResistencia.ToleranciaCincoBandas()+" de tolerancia con un coeficiente de temperatura de " + nuevaResistencia.coeficienteDeTemperatura());
    listaResistenciaJSON= JSON.stringify(listaResistencia);
    localStorage.setItem("listaResistencia",listaResistenciaJSON);
    selectorPrimerColor.value="";
    selectorSegundoColor.value="";
    selectorTercerColor.value="";
    selectorCuartoColorDos.value="";
    selectorQuintoColor.value="";
    selectorSestoColor.value="";
    }
    catch(error){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'NO INGRESO LOS COLORES DE LAS BANDAS!',
            footer: 'Ingrese los colores de las bandas y presione Calcular nuevamente'
          })      
    }

});


let btnHistorial=document.getElementById("btnHistorial");
btnHistorial.addEventListener("click", (e)=>{
     
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

let clearHistorial=document.getElementById("clearHistorial");
clearHistorial.addEventListener("click", (e)=>{

    try{
        localStorage.clear();
        listaResistencia=[];
        const borrarHistorial =document.getElementById("parrafohistorial");
        borrarHistorial.innerHTML = "";
        mostrarValor.value="";
        mostrarValorComercial.value="";
        first_Band.style.backgroundColor= "";
        second_Band.style.backgroundColor= "";
        third_Band.style.backgroundColor= "";
        fourth_Band.style.backgroundColor= "";
        fifth_Band.style.backgroundColor= "";
        sixth_Band.style.backgroundColor= "";
    }

    catch(error){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'NO HAY HISTORIAL PARA BORRAR',
            footer: 'Debe generar un nuevo historial para poder borrarlo'
          })      
    }

});




    



