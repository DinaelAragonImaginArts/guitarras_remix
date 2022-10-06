import { Link } from '@remix-run/react';
import { formatearFecha } from '~/utils/helpers';


function Post({ post }) {
    const { titulo, contenido, url, imagen, publishedAt } = post;
    const img = imagen.data.attributes.formats.small.url;

    return (
        <article className="post">
            <img src={img} className="imagen" alt={`Imagen de entrada ${titulo}`} />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="resumen">{contenido}</p>
                <p className='fecha'>{formatearFecha(publishedAt)}</p>
                <Link className='enlace' to={`/posts/${url}`} >Leer Post</Link>
            </div>
        </article>
    )
}

export default Post
