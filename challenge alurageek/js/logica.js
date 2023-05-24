export function llenarLista(lista, productos){
    for (let i=0; i<lista.length; i++) {
        const img= document.createElement("img");
        const link= document.createElement("a");
        const producto= document.createElement("p");
        const precio= document.createElement("p");
        link.href=productos[i].link
        link.innerText="Ver producto"
        link.classList.add("productos__link");
        img.src=productos[i].imagen
        img.classList.add("productos__lista__foto");
        precio.innerText=productos[i].precio
        precio.classList.add("productos__lista__destacado")
        producto.innerText=productos[i].producto
        lista[i].insertBefore(img, lista[i].firstChild);
        lista[i].appendChild(producto)
        lista[i].appendChild(precio)
        lista[i].appendChild(link)
    }
}