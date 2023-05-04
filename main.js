function addId(element, id) {
    element.id = id;
  };
function Bordeverde1(opcionS) {
    opcionS.style.borderWidth = "5px"
    opcionS.style.borderColor= "blue"
    addId(opcionS, "ElElegido")
    return opcionS
    };
function Normal(equis){
    equis.style.borderWidth = "1px"
    equis.style.borderColor= "black"
    addId(equis, null)
    return equis
};
function createModal(text) {
    // Crear un elemento div para el fondo del modal
    const modalBg = document.createElement("div");
    modalBg.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modalBg.style.position = "fixed";
    modalBg.style.top = "0";
    modalBg.style.right = "0";
    modalBg.style.bottom = "0";
    modalBg.style.left = "0";
    modalBg.style.display = "flex";
    modalBg.style.alignItems = "center";
    modalBg.style.justifyContent = "center";
    modalBg.style.zIndex = "1000";
    addId(modalBg,"modalBg")

  
    // Crear un elemento div para el contenido del modal
    const modalContent = document.createElement("div");
    modalContent.style.backgroundColor = "#fff";
    modalContent.style.borderRadius = "5px";
    modalContent.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.25)";
    modalContent.style.padding = "20px";
    modalContent.style.textAlign = "center";
    addId(modalContent,"modalContent")
  
    // Agregar el texto personalizable al contenido del modal
    const modalText = document.createElement("p");
    modalText.textContent = text;
    addId(modalText,"modalText")

  
    // Crear un botón para finalizar el modal
    const modalButton = document.createElement("button");
    modalButton.textContent = "Reiniciar";
    addId(modalButton,"modalbtn")

  
    // Agregar evento click al botón para quitar el modal
    modalButton.addEventListener("click", function() {
      document.body.removeChild(modalBg);
      location.reload();
    });
  
    // Agregar el texto y el botón al contenido del modal
    modalContent.appendChild(modalText);
    modalContent.appendChild(modalButton);
  
    // Agregar el contenido del modal al fondo
    modalBg.appendChild(modalContent);
  
    // Agregar el fondo del modal al documento
    document.body.appendChild(modalBg);
  };
  
  
const cuestionario=[
    {
    
        "pregunta":"¿Cu&aacute;ndo acab&oacute; la primera guerra mundial?",
        "imagen":"https://mvsnoticias.com/u/fotografias/m/2022/9/1/f960x540-494958_569033_7.jpg",
        "object_fit":"cover",
        "opciones": ['1944','1942','1945','1943'],
        "respuesta":"1945"
    },
    {
        "pregunta":"¿En qu&eacute; año lleg&oacute; Crist&oacute;bal Colón a Am&eacute;rica ?",
        "imagen":"https://www.lavanguardia.com/files/og_thumbnail/uploads/2018/10/08/5fa4488c34c51.jpeg",
        "object_fit":"cover",
        "opciones":['1426','1357','1492','1494'],
        "respuesta":"1492"
    },
    {
        "pregunta":"¿En qu&eacute; pa&iacute;s naci&oacute; Adolf Hitler?",
        "imagen":"https://images.pluto.tv/series/61cc2c2612f2e7001ab8e4d2/featuredImage.jpg?fill=blur&fit=fill&fm=jpg&h=900&q=70&w=1600&auto=&ixlib=react-9.1.5",
        "object_fit":"cover",
        "opciones":['Venezuela','Austria','Alemania','Polonia'],
        "respuesta":"Austria"
    },
    {
    
        "pregunta":"¿En la tabla periodica, cu&aacute;l es el elemento Au?",
        "imagen":"https://concepto.de/wp-content/uploads/2019/05/formula-desarrollada-e1557166814338.jpg",
        "object_fit":"cover",
        "opciones":['Aluminio','Cobre','Mercurio','Oro'],
        "respuesta":"Oro"
    },
    {
        "pregunta":"¿Cu&aacute;l es el metal m&aacute;s caro del mundo?",
        "imagen":"https://www.worldenergytrade.com/images/stories/news/metales/otros_metales/8597/precio-rodio-esta-camino-alcanzar-nuevo-record-medida-produccion-disminuye-8597.jpg",
        "object_Fit":"cover",
        "opciones":['Oro','Plata','Vibranium','Rodio'],
        "respuesta":"Rodio"
    }
]                 
let siguiente= document.getElementById('next');
let preguntaactual=0;
let contador=1;
let preguntascorrectas=0;
let preguntasincorrectas=0;
let final=5;

function displayquestion(){
    const pregunta= cuestionario[preguntaactual];
    document.querySelector('#question').innerHTML = pregunta.pregunta;
    const opciones = document.querySelector('#opciones');
    opciones.innerHTML = "";
    for(const opcion of pregunta.opciones){
        opciones.innerHTML += ` <button class="btn">${opcion}</button>`;
    }
    document.querySelector('#img').style.backgroundImage = `url(${pregunta.imagen})`;

    document.querySelector('#progress').innerHTML=(`Pregunta ${contador} de ${final}`);
}

displayquestion();

//resaltar pregunta
document.querySelector('#opciones').addEventListener("click", e => {
    let opcionSeleccionadaGlobal = e.target;
    const allOptions = document.querySelectorAll(".btn");
    for( const opcion of allOptions){
        Normal(opcion);
    }
    Bordeverde1(opcionSeleccionadaGlobal);
    
});

document.querySelector('#next').addEventListener('click', ()=>{
    let selectOption = document.querySelector("#ElElegido");
    if(selectOption.textContent===cuestionario[preguntaactual].respuesta){
        preguntascorrectas=preguntascorrectas+1;
    } else{
        preguntasincorrectas=preguntasincorrectas+1;
    }
});

document.querySelector('#next').addEventListener("click", () => {
    preguntaactual=preguntaactual+1;
    contador=contador+1
    if(preguntaactual===4){
        document.querySelector('#next').innerHTML="Finalizar"
    }
    if(preguntaactual>=final){
        createModal('¡Finalizaste! Tienes: '+`${preguntascorrectas}`+ ' / 5 preguntas correctas. ')
    }
    displayquestion();
});






  
    
