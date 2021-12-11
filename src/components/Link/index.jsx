import { styles } from "./styles";

const Link = ({route, name}) => (
  <a href="{route}" style={styles.link}>
    <li>{name}</li>
  </a>
);

export default Link