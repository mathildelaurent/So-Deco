import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
export default function Header() {
    return (
        <header>
            <div id="title">
                <img src={logo} />
                <h1>Peintre décoratrice d'intérieur</h1>
            </div>
            <nav>
                <p className="link">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "activeLink" : undefined
                        }
                    >
                        Accueil
                    </NavLink>
                </p>
                <p className="link">
                    <NavLink
                        to="/ambiance"
                        className={({ isActive }) =>
                            isActive ? "activeLink" : undefined
                        }
                    >
                        Création d'ambiance
                    </NavLink>
                </p>
                <p className="link">
                    <NavLink
                        to="/tableaux"
                        className={({ isActive }) =>
                            isActive ? "activeLink" : undefined
                        }
                    >
                        Tableaux
                    </NavLink>
                </p>
                <p className="link">
                    <NavLink
                        to="/renovation"
                        className={({ isActive }) =>
                            isActive ? "activeLink" : undefined
                        }
                    >
                        Rénovation de mobilier
                    </NavLink>
                </p>
                <p className="link">
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "activeLink" : undefined
                        }
                    >
                        Contact
                    </NavLink>
                </p>
            </nav>
        </header>
    );
}
