import CartWidget from "../common/CartWidget"



//componente Navbar
export const Navbar = () => {
    return <div>
      <h3>Logo</h3>
      <ul>
       <li>Todas</li>
       <li>Veganas</li>
       <li>Vegetarianas</li>
       <li>Quesos</li>
    </ul>

    <h4>Carrito</h4>
    
    <CartWidget/>

    </div>

}

