class Billete{
  constructor(v,c){
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }

  // mostrar(){
  //   document.body.appendChild(this.imagen);
  // }
}