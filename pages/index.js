import BlogListado from "../components/BlogListado";
import Curso from "../components/Curso";
import Layout from "../components/Layout";
import Listado from "../components/Listado";

export default function Home({ guitarras, cursos, blog }) {
  return (
    <Layout pagina="Inicio" guitarra={guitarras[0]}>
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>
        <Listado guitarras={guitarras} />
      </main>
      <Curso cursos={cursos} />

      <section className="contenedor">
        <BlogListado entradas={blog} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  // Uso de multiplos await corriendo todos a la misma vez

  // const url = `${process.env.API_URL}/guitarras`;
  // const respuesta = await fetch(url);
  // const guitarras = await respuesta.json();

  // const url = `${process.env.API_URL}/cursos`;
  // const respuesta = await fetch(url);
  // const cursos = await respuesta.json();

  //////////////////////

  const urlGuitarras = `${process.env.API_URL}/guitarras`;
  const urlCursos = `${process.env.API_URL}/cursos`;
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3&_sort=created_at:desc`;

  const [resGuitarras, resCursos, resBlog] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlCursos),
    fetch(urlBlog),
  ]);

  const [guitarras, cursos, blog] = await Promise.all([
    resGuitarras.json(),
    resCursos.json(),
    resBlog.json(),
  ]);
  return {
    props: { guitarras, cursos, blog },
  };
}
