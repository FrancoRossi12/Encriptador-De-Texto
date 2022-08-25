const inputTexto = document.querySelector(".ingrese_txt")
const mensaje = document.querySelector(".texto_modificado")

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
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
/*
document.getElementById("texto_modificado").style.display = "none";
            var texto=document.getElementById("texto_modificado");
            texto.value="hola";
            alert(texto);*/