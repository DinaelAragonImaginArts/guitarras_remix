import { getPost } from '~/models/posts.server';
import { useLoaderData } from '@remix-run/react';
import { formatearFecha } from '~/utils/helpers';

export async function loader({ params }) {
    const { postUrl } = params;
    const post = await getPost(postUrl);
    if (post.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Entrada no encontrada'
        })
    }

    return post.data[0].attributes;
}
export function meta({ data }) {
    if (!data) {
        return {
            title: `GuitarLA - Post no encontrado`,
            descripcion: `Mensaje de error, Post no encontrado`
        }
    }
    return {
        title: `GuitarLA - ${data.nombre}`,
        descripcion: `Guitarras, venta de guitarras, Post ${data.nombre}`
    }
}



export default function Post() {
    const post = useLoaderData();
    const { titulo, contenido, publishedAt, imagen } = post;
    const img = imagen.data.attributes.url;

    return (
        <article className='contenedor post mt-3'>
            <img src={img} alt="" />
            <h3>{titulo}</h3>
            <p className='fecha'>{formatearFecha(publishedAt)}</p>
            <p className='texto'>{contenido}</p>
        </article>
    )
}
