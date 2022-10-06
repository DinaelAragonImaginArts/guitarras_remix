import {  Outlet } from '@remix-run/react';
import blog from '~/styles/blog.css';

export function meta() {
  return (
    {
      title: 'GuitarLA-Nuestro Blog',
      description: 'GuitarLa, Blog de música y venta de guitarras'
    }
  )
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: blog,
    }
  ]
}

export default function Blog() {
  return (
    <div className="contenedor">
      <Outlet />
    </div>
  )
}

