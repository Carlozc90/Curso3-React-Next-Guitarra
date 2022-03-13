import BlogListado from "../components/BlogListado";
import Layout from "../components/Layout";

const Blog = ({ entradas }) => {
  return (
    <Layout pagina="Blog">
      <main className="contenedor">
        <BlogListado entradas={entradas} />
      </main>
    </Layout>
  );
};

/////////////////Statico
export async function getStaticProps() {
  const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  return {
    props: { entradas },
  };
}

////////////cuando se pide mucho apu
// export async function getServerSideProps() {
//   const url = `http://localhost:1337/blogs`;
//   const respuesta = await fetch(url);
//   const entradas = await respuesta.json();

//   return {
//     props: { entradas },
//   };
// }

export default Blog;
