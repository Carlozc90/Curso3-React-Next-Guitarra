import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

const Header = ({ guitarra }) => {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.contenedor}`}>
        <div className={styles.barra}>
          <Link href="/">
            <a>
              <Image
                width={400}
                height={100}
                src="/img/logo.svg"
                alt="Imagen logo"
              />
            </a>
          </Link>
        </div>
        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/tienda">Tienda</Link>
          <Link href="/carrito">
            <a>
              <Image
                layout="fixed"
                width={30}
                height={25}
                src="/img/carrito.png"
                alt="imagen carrito"
              />
            </a>
          </Link>
        </nav>
      </div>
      <div className="contenedor">
        {guitarra && (
          <div className={styles.modelo}>
            <h1>Modelo {guitarra.nombre}</h1>
            <p>{guitarra.descripcion}</p>
            <p className={styles.precio}>$ {guitarra.precio}</p>
            <Link href={`/guitarras/${guitarra.url}`}>
              <a className={styles.enlace}>Ver Producto</a>
            </Link>
          </div>
        )}
      </div>

      {router.pathname === "/" && (
        <div className={styles.guitarra}>
          <Image
            layout="fixed"
            width={500}
            height={1200}
            src="/img/header_guitarra.png"
            alt="imagen headder guitarra"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
