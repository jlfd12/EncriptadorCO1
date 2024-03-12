let texto = '';
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

    textoencriptado = document.getElementById('texto').value;
    minusculasacentos(textoencriptado);
    if(checarDesencriptar(reemplazo, textoencriptado) == true){
        if(document.getElementById('texto-encriptado').value != ''){
            textoencriptado = document.getElementById('texto-encriptado').value;
            for(let i = 0; i < vocales.length; i++){
            textoencriptado = textoencriptado.replaceAll(reemplazo[i], vocales[i]);
             }
            document.getElementById('texto-encriptado').value = textoencriptado;
        }else{
            limpiarCaja();
            for(let i = 0; i < vocales.length; i++){
            textoencriptado = textoencriptado.replaceAll(reemplazo[i], vocales[i]);
            }
            document.getElementById('texto-encriptado').value = textoencriptado;
        }
    }else{
        textoencriptado = document.getElementById('texto-encriptado').value;
        for(let i = 0; i < vocales.length; i++){
            textoencriptado = textoencriptado.replaceAll(reemplazo[i], vocales[i]);
        }
        document.getElementById('texto-encriptado').value = textoencriptado;
    }
}

function checarDesencriptar(reemplazo, textoencriptado){
    let cuenta = 0;
    for(let j = 0; j < reemplazo.length; j++){
        if(textoencriptado.includes(reemplazo[j])){
            cuenta++;
        }
    }
    if(cuenta > 0){
        return true;
    }else{
        return false;
    }
}

function minusculasacentos(texto){
    if(texto == '' || texto.includes('  ') || texto == ' '){
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
    document.getElementById('cuadroMuñeco').style.display = "none";
    document.getElementById('cuadroEncriptado').style.display = "block";
}

function reset(){
    location.reload();
}














