import { getGuitarras } from '~/models/guitarras.server';
import { getPosts } from '~/models/posts.server';
import { getCurso } from '~/models/curso.server';
import { useLoaderData } from '@remix-run/react';
import tienda from '~/styles/tienda.css'
import blog from '~/styles/blog.css'
import curso from '~/styles/curso.css';
import ListadoGuitarras from '~/components/listadoGuitarras';
import ListadoPosts from '~/components/listadoPosts';
import Curso from '~/components/curso';
export function meta() {
    return (
        {

        }
    )
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: tienda
        },
        {
            rel: 'stylesheet',
            href: blog,
        },
        {
            rel: 'stylesheet',
            href: curso,
        }
    ]
}

export async function loader() {
    const [guitarras, posts, curso] = await Promise.all([
        getGuitarras(),
        getPosts(),
        getCurso()
    ])
    return { guitarras: guitarras.data, posts: posts.data, curso: curso.data }
}



function Index() {
    const { guitarras, posts, curso } = useLoaderData();
    return (
        <>
            <main className='contenedor'>
                <ListadoGuitarras guitarras={guitarras} />
            </main>
            <div>
                <Curso curso={curso.attributes} />
            </div>
            <section className='contenedor'>
                <ListadoPosts posts={posts} />
            </section>
        </>
    )
}

export default Index;