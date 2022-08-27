const inputTexto = document.querySelector(".ingrese_txt")
const mensaje = document.querySelector(".texto_modificado")

document.getElementById("texto_modificado").style.visibility = "hidden";

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
    document.getElementById("texto_modificado").style.visibility = "visible";
}

function encriptar(textoEncriptar){
    mat = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    textoEncriptar = textoEncriptar.toLowerCase();

    for(let i=0;i<mat.length;i++){
        if(textoEncriptar.includes(mat[i][0])){
            textoEncriptar = textoEncriptar.replaceAll(mat[i][0],mat[i][1])
        }
    }

    return textoEncriptar;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value)
    mensaje.value = textoDesencriptado;
    inputTexto.value = "";
    document.getElementById("texto_modificado").style.visibility = "visible";
}

function desencriptar(textoDesencriptar){
    mat = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    textoDesencriptar = textoDesencriptar.toLowerCase();

    for(let i=0;i<mat.length;i++){
        if(textoDesencriptar.includes(mat[i][1])){
            textoDesencriptar = textoDesencriptar.replaceAll(mat[i][1],mat[i][0])
        }
    }

    return textoDesencriptar;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value=""
    alert("Texto Copiado")
    document.getElementById("texto_modificado").style.visibility = "hidden";
}
