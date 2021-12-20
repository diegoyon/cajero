let imagenes = [];
imagenes["200"] = "billete200.jpg";
imagenes["100"] = "billete100.jpg";
imagenes["50"] = "billete50.jpg";
imagenes["20"] = "billete20.jpg";
imagenes["10"] = "billete10.jpg";
imagenes["5"] = "billete5.jpg";
imagenes["1"] = "billete1.jpg";

let caja = [];
caja.push(new Billete(200, 3));
caja.push(new Billete(100, 3));
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));
caja.push(new Billete(5, 2));
caja.push(new Billete(1, 20));

let dinero = 60;
let div = 0;
let papeles = 0;

let resultado = document.getElementById("resultado");

let b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);


function entregarDinero(){
  let entregado = [];
  let t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(let bi of caja){
    if (dinero > 0){
      div = Math.floor(dinero / bi.valor);
      if (div > bi.cantidad){
        papeles = bi.cantidad;
      }
      else{
        papeles = div;
      }

      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);
    }
  }
  if (dinero > 0){
    
    resultado.innerHTML = "No tengo billetes suficientes";
  }
  else{
    resultado.innerHTML = "";
    for(let e of entregado){
      if(e.cantidad > 0){
        
        for(let i=0; i<e.cantidad; i++){
          resultado.innerHTML += "<img src=" + e.imagen.src + " height='100'/>";
        }
        resultado.innerHTML += "<br/>";
      }
    }
  }
  
}