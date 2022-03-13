import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "../helpers";
import styles from "../styles/Entrada.module.css";

const Entrada = ({ entrada }) => {
  const {
    contenido,
    id,
    imagen,
    resumen,
    titulo,
    published_at,
    createdAt,
    updatedAt,
    url,
  } = entrada;
  return (
    <article>
      <Image
        alt={`imagen blog ${titulo}`}
        src={imagen.url}
        height={imagen.height}
        width={imagen.width}
      />
      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`/blog/${url}`}>
          <a className={styles.enlace}>Leer Entrada</a>
        </Link>
      </div>
    </article>
  );
};

export default Entrada;
