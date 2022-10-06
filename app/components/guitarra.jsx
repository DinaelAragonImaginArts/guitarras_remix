import {Link} from '@remix-run/react';
export default function Guitarra({ guitarra }) {
    const { nombre, descripcion, imagen, precio, url } = guitarra;

    const img = imagen.data.attributes.formats.medium.url

    return (
        <div className="guitarra">
            <img src={img} alt={`Imagen guitarra ${nombre}`} />
            <div className="contenido">
                    <h3>{nombre}</h3>
                    <p className="descripcion">{descripcion}</p>
                    <p className="precio">${precio}</p>
                    <Link className='enlace' to={`/guitarras/${url}`}>Ver producto</Link>
            </div>
        </div>
    )
}
