import { Link, useLocation } from '@remix-run/react';

function Navegacion() {
    const location = useLocation();
    return (
        <nav className="navegacion">
            <Link to='/' prefetch='render' className={location.pathname === '/' ? 'active' : ''}>Inicio</Link>
            <Link to='/nosotros' prefetch='render ' className={location.pathname === '/nosotros' ? 'active' : ''}>Nosotros</Link>
            <Link to='/guitarras' prefetch='render ' className={location.pathname === '/guitarras' ? 'active' : ''}>Guitarras</Link>
            <Link to='/posts' prefetch='render ' className={location.pathname === '/posts' ? 'active' : ''}>Posts</Link>
        </nav>
    )
}

export default Navegacion
