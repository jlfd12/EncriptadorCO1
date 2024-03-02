let texto = " ";
let textoencriptado = '';


function Encriptar(){
    const vocales = ["e", "i", "a", "o", "u"];
    const reemplazo = ["enter", "imes", "ai", "ober", "ufat"];

    texto = document.getElementById('texto').value;
    minusculasacentos(texto);
    limpiarCaja();  
    for(let i = 0; i < vocales.length; i++){
        texto = texto.replaceAll(vocales[i], reemplazo[i]);
    }
    document.getElementById('texto-encriptado').value = texto;
}

function Desencriptar(){
    const vocales = ["e", "a", "o", "u", "i"];
    const reemplazo = ["enter", "ai", "ober", "ufat", "imes"];

    textoencriptado = document.getElementById('texto-encriptado').value;
    for(let j = 0; j < vocales.length; j++){
        textoencriptado = textoencriptado.replaceAll(reemplazo[j], vocales[j]);
    }
    document.getElementById('texto-encriptado').value = textoencriptado;
}

function minusculasacentos(texto){
    if(texto == '' || texto == ' '){
        alert("Ingrese texto.\nRecuerde que debe ser con minúsculas y sin acentos.");
        location.reload();
        return 1;
    }
    for(let k = 0; k < texto.length; k++){
        if(texto[k] != ' '){
            if(texto[k].toUpperCase() == texto[k] || texto[k] == "á" || texto[k] == "é" || texto[k] == "í" || texto[k] == "ó"){
                alert("Ingrese texto.\nRecuerde que debe ser con minúsculas y sin acentos.");
                location.reload();
                return 1;
            }
        }
    }
}

function Copiar(){
       var textoACopiar = document.getElementById('texto-encriptado').value;
       navigator.clipboard.writeText(textoACopiar);
}

function limpiarCaja(){ 
    document.getElementById('texto').value = '';
    document.getElementById('cuadroMuñeco').style.display = "none";
    document.getElementById('cuadroEncriptado').style.display = "block";
}














