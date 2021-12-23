import { styles } from "./styles"

const Item = ( {img, nombre, banda, precio, cantidadLPs, duracion, fechaEntrada} ) => {

    return (
      <>
        <div style={styles.div}>
            <div>
              <img
              class="card-img-top"
              src={img}
              alt={nombre}
              />
              <div style={styles.div}>
                <h5>{nombre}</h5>
                <h6>{banda}</h6>
              </div>
              <ul >
                <li style={styles.li}>Fecha de Entrada : </li>
                <li style={styles.li}>{precio} $</li>
                <li style={styles.li}>Contiene {cantidadLPs} LP('s)</li>
                <li style={styles.li}></li>
              </ul>
              <div style={styles.div}>
                <a href="#" style={styles.a}>Escuchar en Spotify</a>
              </div>
              <button style={styles.button} class="btn" id="addBtn${id}" type="submit">Añadir al Carrito</button>
            </div>
          </div>
        

      </>
    )
  }

export default Item