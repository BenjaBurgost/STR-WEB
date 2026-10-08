import { site } from "../data/site";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="contenedor header-contenido">
                <a href="#inicio" className="header-marca">{site.sigla}</a>

                <nav className="header-nav">
                    <a href="#servicios">Servicios</a>
                    <a href="#trabajos">Trabajos</a>
                    <a href="#ubicacion">Ubicación</a>
                    <a href="#faq">Preguntas</a>
                </nav>

                <a href={site.contacto.whatsappLink} className="boton" target="_blank" rel="noreferrer">
                    WhatsApp
                </a>
            </div>
        </header>
    );
}

export default Header;