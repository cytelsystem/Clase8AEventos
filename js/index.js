

function pintarTarjetas(listado) {


  listado.forEach(element => {

      let contenedor = document.querySelector('.main-contenedor')

      var divCard = document.createElement("div"); // Elemento a crear
      divCard.setAttribute("class", "card");

      var imagen = document.createElement("img");
      imagen.setAttribute("src", element.imgUrl);
      imagen.setAttribute("class", "card-img-top");

      var divBody = document.createElement("div"); // Elemento a crear
      divBody.setAttribute("class", "card-body");


      var h3 = document.createElement("h3"); // Elemento a crear
      h3.setAttribute("class", "card-title");
      h3.textContent = element.titulo

      var p = document.createElement("p"); // Elemento a crear
      p.setAttribute("class", "card-text");
      p.textContent = element.descripcion

      var h5 = document.createElement("h5"); // Elemento a crear
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


pintarTarjetas(noticias)