let container = document.getElementById("container");
let titulo = document.createElement('h1');
let parrafo = document.createElement('p');

titulo.innerText = "Modificando el DOM";
titulo.style.color = "#0f0"; 
parrafo.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, aut soluta ipsam quae amet eum tenetur expedita harum nemo ea quam eveniet, natus sapiente atque! Veniam voluptatum delectus deserunt totam."
parrafo.style.fontFamily = "Verdana";
parrafo.classList.add('estilo');

setTimeout(() => {
    container.append(titulo, parrafo);
}, 3000);
