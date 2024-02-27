import "./Navbar.css"

import pizza from "./images/pizzaDos.png"

//componente Navbar
export const Navbar = () => {
    return <nav>
        <img src="https://res.cloudinary.com/dlkhuh69i/image/upload/v1707353029/pizzaDos_fqcbxh.png" alt="" />
        <ul>
            <li className="bulletPoint">Productos</li>
            <li className="bulletPoint">Serviucios</li>
            <li className="bulletPoint">Contactos</li>
        </ul>
    </nav>
}

