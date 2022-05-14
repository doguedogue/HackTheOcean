import Navbar from "../components/navbar";

const About = () => {
  return (
    <div className="content">
      <Navbar />
      <h2>Acerca de</h2>
      <p>
        Se elabora un proyecto con conciencia, con una visión de nuestro mundo, de nuestros océanos, que nos permite voltear a ver un problema y darle la atención necesaria.
      </p>
      <p>
        Este proyecto revisa las especies en peligro de extinción a nivel mundial, mediante una API especializada que conforma la _Red List IUCN (International Union for Conservation of Nature)_ Unión Internacional para la Conservación de la Naturaleza.
      </p>
      <p>
        Nuestra solución a este problema es que una vez identificada la amenaza canalizar y fortalecer mediante las organizaciones:
      </p>
      <ul>
        <li>
          Protección y Conservación Pelágica AC &nbsp;<a href="http://www.pelagiclife.org/">Pelagic Life</a>
        </li>
        <li>
          Fondo Mundial para la naturaleza &nbsp;<a href="https://www.wwf.org.mx/">WFF</a>
        </li>
        <li>
          La Asociación Mexicana de Hábitats para la Interacción y Protección de Mamíferos Marinos &nbsp;<a href="http://www.amhmar.org.mx/">AMHMAR</a>
        </li>
        <li>
          Oceana &nbsp;<a href="https://mx.oceana.org/">Oceana</a> 
        </li>
      </ul>
    </div>
  );
};

export default About;
