import { Link } from '@remix-run/react';
import logo from '../../public/img/logo.svg';
import Navegacion from './navegacion';

function Header() {

    return (
        <div className="header">
            <div className="contenedor barra">
                <Link to={'/'}>
                    <img className='logo' src={logo} alt="logotipo" />
                </Link>
                <Navegacion />
            </div>
        </div>
    )
}

export default Header;
