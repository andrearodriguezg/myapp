export function Login (){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              <span className="d-block d-lg-none">LABORATORIO ALIANZA</span>
              <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="%PUBLIC_URL%/assets/img/lab.jpg" alt="" /></span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#inicio">Inicio</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#nosotros">Sobre nosotros</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#servicios">Nuestros servicios</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#contacto">Contáctenos</a></li>
    
              </ul>
            </div>
          </nav>
      );
     
}
