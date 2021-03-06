
let otherList = [];

noticias.forEach(noticias => {
  otherList.push(noticias);
})

function filtro(estado){
      otherList = [];
      noticias.forEach(item => {
        if (item.tipoNacional == estado) {
          otherList.push(item);
        }
      });
      card();
}

document.querySelector('#btnNacional').addEventListener('click', function(event){
  filtro(true);
});
document.querySelector('#btnInternacional').addEventListener('click', function(event){
  filtro(false)
});



function card(){

  let contenedor = document.querySelector('.main-contenedor')
  contenedor.innerHTML = "" ;

  otherList.map(element => {

    var divCard = document.createElement("div");
    divCard.setAttribute("class", "card");
    divCard.setAttribute("key", element.id);

    var imagen = document.createElement("img");
    imagen.setAttribute("src", element.imgUrl);
    imagen.setAttribute("class", "card-img-top");

    var divBody = document.createElement("div");
    divBody.setAttribute("class", "card-body");


    var h3 = document.createElement("h3");
    h3.setAttribute("class", "card-title");
    h3.textContent = element.titulo

    var p = document.createElement("p");
    p.setAttribute("class", "card-text");
    p.textContent = element.descripcion

    var h5 = document.createElement("h5");
    h5.setAttribute("class", "card-fecha");
    h5.textContent = element.fecha

    contenedor.appendChild(divCard)
    divCard.appendChild(imagen)
    divCard.appendChild(divBody)
    divBody.appendChild(h3)
    divBody.appendChild(p)
    divBody.appendChild(h5)

  });

}

card();