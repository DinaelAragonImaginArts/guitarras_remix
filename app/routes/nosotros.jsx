import imagen from '../../public/img/nosotros.jpg';
import nosotros from '../styles/nosotros.css';

export function meta() {
  return (
    {
      title: 'GuitarLA-Nosotros',
    }
  )
}
export function links() {
  return [
    {
      rel: 'stylesheet',
      href: nosotros,
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Sodales ut etiam sit amet nisl purus in mollis. Praesent elementum facilisis leo vel fringilla. Morbi enim nunc faucibus a pellentesque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec tincidunt praesent semper feugiat. Sodales ut etiam sit amet nisl purus in mollis. Praesent elementum facilisis leo vel fringilla. Morbi enim nunc faucibus a pellentesque.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros