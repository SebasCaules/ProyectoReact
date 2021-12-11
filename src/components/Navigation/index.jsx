import {styles} from "./styles"
import Link from "../Link/index"

const Navigation = () => (
  <nav style={styles.nav}>
    <img src="React Js\Proyecto\e-commerce-sebastian\public\favicon.ico" alt="icon" style={styles.icon}/>
    <ul style={styles.list}>
      <Link route="/" name="Home" />
      <Link route="/catalogo" name="Catalogo" />
      <Link route="/sobreNosotros" name="Sobre Nosotros" />
      <Link route="/consultas" name="Consultas" />
      <Link route="/contacto" name="Contacto" />
    </ul>
  </nav>
);

export default Navigation;
