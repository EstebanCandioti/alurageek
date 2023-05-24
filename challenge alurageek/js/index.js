import { llenarLista } from "./logica.js"

const listaProductosStarWars=document.querySelector("#starWars").children;
const listaProductosConsolas=document.querySelector("#consolas").children;
const listaProductosDiversos=document.querySelector("#diversos").children;

const loginButton=document.querySelector(".header__button")
const logo=document.querySelector(".header__logo")

loginButton.addEventListener("click",function(){
    window.location.href="/pages/login.html"
});

logo.addEventListener("click",function(){
    window.location.href="/index.html"
});


const productosStarWars=[
    {
        producto:"Producto XYZ",  
        precio:"$60,00",
        imagen:"./img/trooperhead.png",
        link:"#"
    },
    {       
        producto:"Producto XYZ",  
        precio:"$60,00",
        imagen:"./img/legosvader.png",
        link:"#"
    },
    {       
        producto:"Producto XYZ",  
        precio:"$60,00",
        imagen:"./img/yoda.png",
        link:"#"
    },
    {       
        producto:"Producto XYZ",  
        precio:"$60,00",
        imagen:"./img/stormtrooper.png",
        link:"#"
    },
    {       
        producto:"Producto XYZ",  
        precio:"$60,00",
        imagen:"./img/baby-yoda.png",
        link:"#"
    },
    {       
        producto:"Producto XYZ",  
        precio:"$60,00",
        imagen:"./img/stormtrooper2.png",
        link:"#"
    }
]

const productosConsolas=[
    {
        producto:"Producto XYZ",
        precio:"$60.00",
        imagen:"./img/joystick.png",
        link:"#"
    },
    {
        producto:"Producto XYZ",
        precio:"$60.00",
        imagen:"./img/playstation 5.png",
        link:"#"
    },
    {
        producto:"Producto XYZ",
        precio:"$60.00",
        imagen:"./img/atari 2.png",
        link:"#"
    },    {
        producto:"Producto XYZ",
        precio:"$60.00",
        imagen:"./img/switch.png",
        link:"#"
    },
    {
        producto:"Producto XYZ",
        precio:"$60.00",
        imagen:"./img/xbox x.png",
        link:"#"
    },
    {
        producto:"Producto XYZ",
        precio:"$60.00",
        imagen:"./img/gba.png",
        link:"#"
    }
] 

const productosDiversos=[
    {
        producto:"Producto XYZ",
        precio:"$60.00",
        imagen:"./img/atari.png",
        link:"#"
    },
    {
        producto:"Producto XYZ",
        precio:"$60.00",
        imagen:"./img/joystick2.png",
        link:"#"
    },
    {
        producto:"Producto XYZ",
        precio:"$60.00",
        imagen:"./img/sonic.png",
        link:"#"
    },
    {
        producto:"Producto XYZ",
        precio:"$60.00",
        imagen:"./img/radio.png",
        link:"#"
    },
    {
        producto:"Producto XYZ",
        precio:"$60.00",
        imagen:"./img/vr.png",
        link:"#"
    },
    {
        producto:"Producto XYZ",
        precio:"$60.00",
        imagen:"./img/pikachu.png",
        link:"#"
    },
]

llenarLista(listaProductosStarWars, productosStarWars)
llenarLista(listaProductosConsolas, productosConsolas)
llenarLista(listaProductosDiversos, productosDiversos)