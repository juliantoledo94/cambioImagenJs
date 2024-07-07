const contenedorPrincipal = document.getElementById("contenedorPrincipal");
console.log(contenedorPrincipal)

const imgPrincipal = contenedorPrincipal.querySelector("img");
console.log(imgPrincipal)

const enlacePrincipal = contenedorPrincipal.querySelector("a")
console.log(enlacePrincipal)

document.querySelectorAll(".contenedorImg2").forEach(contenedor =>{
    contenedor.addEventListener("click",(e)=>{
        console.log(e.target)
       
        if(e.target.tagName === "IMG"){
            const enlaceSecundario = contenedor.querySelector("a");
            e.preventDefault()
            cambiarImagen(imgPrincipal, e.target)
            cambiarEnlace(enlacePrincipal, enlaceSecundario);
        }
        
    })
})


const cambiarImagen = (imgPrincipal, imgSecundaria) =>{

    const clonImgPrincipal = imgPrincipal.src
    imgPrincipal.src = imgSecundaria.src
    imgSecundaria.src = clonImgPrincipal
}

const cambiarEnlace = (enlacePrincipal, enlaceSecundario) => {
    const clonEPrincipal = enlacePrincipal.href;
    enlacePrincipal.href = enlaceSecundario.href;
    enlaceSecundario.href = clonEPrincipal;
};