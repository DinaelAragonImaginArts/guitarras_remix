import { getGuitarra } from "~/models/guitarras.server";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }) {
    const { guitarraUrl } = params;
    const guitarra = await getGuitarra(guitarraUrl);

    if (guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra No Encontrada'
        })
    }

    return guitarra.data[0].attributes;
}


export function meta({ data }) {
    if (!data) {
        return {
            title: `GuitarLA - Guitarra no encontrada`,
            descripcion: `Mensaje de error, Guitarra no encontrada`
        }
    }
    return {
        title: `GuitarLA - ${data.nombre}`,
        descripcion: `Guitarras, venta de guitarras, guitarra ${data.nombre}`
    }
}


export default function Guitarra() {
    const guitarra = useLoaderData();
    const { nombre, descripcion, imagen, precio, url } = guitarra;
    const img = imagen.data.attributes.formats.medium.url
    return (
        <div className=" guitarra">
            <img src={img} className="imagen" alt={`Imagen de la guitarra ${nombre}`} />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="texto">{descripcion}</p>
                <p className="precio">{precio}</p>
            </div>
        </div>
    )
}
