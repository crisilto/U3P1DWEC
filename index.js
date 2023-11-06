let noticias = [
    [`Cristiano Ronaldo, máximo goleador de 2023`,
    `A sus 38 años, Cristiano Ronaldo sigue demostrando su valía en el campo, consagrándose como el máximo 
    goleador de 2023.`,
    `./imgs/cristiano.png`],

    [`Presentación del iPhone 15`,
    `Apple ha presentado su último modelo, el iPhone 15, prometiendo innovaciones tecnológicas y una mejora 
    significativa en la cámara.`,
    `./imgs/iphone.jpg`],
    
    [`Spiderman 2, candidato a GOTY`,
    `El videojuego Spiderman 2 ha recibido críticas positivas y ya se perfila como uno de los principales 
    candidatos a ser el Game of the Year.`,
    `./imgs/spiderman.jpg`],
    
    [`Auge en la contratación de desarrolladores JavaScript`,
    `Las empresas tecnológicas están en una carrera por contratar a los mejores talentos en JavaScript debido 
    a la creciente demanda de aplicaciones web modernas.`,
    `./imgs/programadores.png`],
    
    [`Nvidia lanza las tarjetas gráficas RTX 4090`,
    `Nvidia sorprende al mercado tecnológico con el lanzamiento de sus tarjetas gráficas RTX 4090, prometiendo 
    un rendimiento sin precedentes para los gamers más exigentes.`,
    `./imgs/nvidia.jpg`]
];

function numeroRandom(){
    let random = Math.floor(Math.random() * 5);
    return random;
}

function mostrarNoticiaAleatoria(){
    let indiceRandom = numeroRandom();
    let noticiaSeleccionada = noticias[indiceRandom];

    document.getElementById("titular").innerHTML = noticiaSeleccionada[0];
    document.getElementById("texto").innerHTML = noticiaSeleccionada[1];
    document.getElementById("imagen").style.backgroundImage = `url(${noticiaSeleccionada[2]})`;
}

mostrarNoticiaAleatoria();
setInterval(mostrarNoticiaAleatoria, 10000);