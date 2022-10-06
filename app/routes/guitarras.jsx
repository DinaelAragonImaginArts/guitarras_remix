
import {Outlet } from '@remix-run/react';
import tienda from '~/styles/tienda.css';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: tienda
    }
  ]
}



function Tienda() {
  return (
    <main className='contenedor'>
      <Outlet />
    </main>
  )
}

export default Tienda