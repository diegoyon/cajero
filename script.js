class Billete{
  constructor(v,c){
    this.valor = v;
    this.cantidad = c;
  }
}

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
        resultado.innerHTML += + e.cantidad + " billetes de $" + e.valor + "<br/>";
      }
    }
  }
  
}