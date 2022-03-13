import Layout from "../components/Layout";
import Link from "next/link";
import styles from "../styles/NoEncontrado.module.css";

const NoPages = () => {
  return (
    <Layout>
      <div className={styles.noEncontrado}>
        <h1 className="heading">No Encontrada</h1>
        <Link href="/">Volver al Inicio</Link>
      </div>
    </Layout>
  );
};

export default NoPages;
