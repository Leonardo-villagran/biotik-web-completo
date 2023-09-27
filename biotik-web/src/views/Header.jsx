export default function Header() {

    const logo = './images/logo.png';
    const logoTexto = './images/logo_texto.png';

    return (
        <div className="header-banner row">
            <div className="logo-container col-12 col-md-4 d-flex ">
                <div className="logo-left">
                    <img src={logo} alt="Logo Izquierdo" />
                </div>
            </div>
            <div className="logo-text-container col-12 col-md-4 d-flex ">
                <img src={logoTexto} alt="Logo Derecho" />
            </div>
            <div className="admin-gestion-buttons col-12 col-md-4 d-flex ">
                <button className="custom-button">  <a href="https://odk.biotico.cl/" target="_blank" rel="noopener noreferrer" className="button-link">
                    Administración
                </a></button>
                <button className="custom-button">
                <a href="http://web.biotico.cl:8080/odk-web/" target="_blank" rel="noopener noreferrer" className="button-link">
                    Gestión
                </a>
                </button>
            </div>
        </div>
    );
}

