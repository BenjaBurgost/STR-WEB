import Header from "./components/Header";
import { site } from "./data/site";

function App() {
  return (
    <>
      <Header />
      <main id="inicio" className="contenedor">
        <h1>{site.nombre}</h1>
        <p>{site.rubro}</p>
        <a href={site.contacto.whatsappLink} className="boton">Escribinos por WhatsApp</a>
      </main>
    </>
  );
}

export default App;