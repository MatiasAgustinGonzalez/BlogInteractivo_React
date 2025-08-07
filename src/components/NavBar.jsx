import CartWidget from "./CartWidget";

import logoVIV from "../assets/img/logoVIV.png";
import logoHome from "../assets/img/logoHome.png";
import logoTexto from "../assets/img/logoTexto.png";
import logoAvatar from "../assets/img/logoAvatar.png";

export default function NavBar() {
  return (
    <header>
      <hr className="line-pages" />
      <div className="header-containe">
        <div className="logo-container">
          <img src={logoVIV} alt="Logo VideoIngenieriaViral" className="logo" />
        </div>
        <h1 className="header-title">VIDEO INGENIERIA VIRAL</h1>
      </div>

      <nav style={{ position: "relative" }}>
        <ul className="nav-bar" style={{ justifyContent: "center" }}>
          <li>
            <a href="index.html">
              <img src={logoHome} className="img-nav" alt="" />
              BLOG
            </a>
          </li>
          <li>
            <a href="formularioCarga.html">
              <img src={logoTexto} className="img-nav" alt="" />
              CARGA
            </a>
          </li>
          <li>
            <a href="login.html">
              <img src={logoAvatar} className="img-nav" alt="Logo Usuario" />
            </a>
          </li>
        </ul>

        {/* CartWidget fijo a la derecha */}
        <div
          style={{
            position: "absolute",
            right: "12px",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <CartWidget />
        </div>
      </nav>
    </header>
  );
}
