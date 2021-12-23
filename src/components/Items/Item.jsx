const Item = ( {img, nombre, banda, precio, cantidadLPs, duracion, fechaEntrada} ) => {

    return (
      <>
        <div class="cardsDiv card-img-top card">
            <div>
              <img
              class="card-img-top"
              src="{img}"
              alt="{nombre} Imagen Portada"
              />
              <div class="card-body">
                <h5 class="card-title">{nombre}</h5>
                <h6 class="card-title">{banda}</h6>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Fecha de Entrada : </li>
                <li class="list-group-item">{precio} $</li>
                <li class="list-group-item">Contiene {cantidadLPs} LP('s)</li>
                <li class="list-group-item"></li>
              </ul>
              <div class="card-body">
                <a href="#" class="card-link">Escuchar en Spotify</a>
              </div>
              <button class="btn addBtn" id="addBtn${id}" type="submit">Añadir al Carrito</button>
            </div>
          </div>
        

      </>
    )
  }

export default Item