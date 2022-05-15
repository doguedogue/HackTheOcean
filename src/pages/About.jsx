import Navbar from '../components/navbar';

const About = () => {
	return (
		<div className='content'>
			<Navbar />
			<br />
			<div className='homes'>
				<button type='button' className='btn btn-outline-info'>
					<h2>About</h2>
				</button>
				<br />
				<p>
					Se elabora un proyecto con conciencia, con una visión de nuestro mundo, de nuestros océanos, que nos permite
					voltear a ver un problema y darle la atención necesaria.
				</p>
				<p>
					Este proyecto revisa las especies en peligro de extinción a nivel mundial, mediante una API especializada que
					conforma la <i>Red List IUCN (International Union for Conservation of Nature)</i> Unión Internacional para la
					Conservación de la Naturaleza.
				</p>
				<p>
					Nuestra solución a este problema es que una vez identificada la amenaza canalizar y fortalecer mediante las
					organizaciones:
				</p>
				<ul>
					<li>
						<a href='http://www.pelagiclife.org/'>Protección y Conservación Pelágica AC &nbsp;</a>
					</li>
					<li>
						<a href='https://www.wwf.org.mx/'>Fondo Mundial para la naturaleza &nbsp; WWF</a>
					</li>
					<li>
						<a href='http://www.amhmar.org.mx/'>
							La Asociación Mexicana de Hábitats para la Interacción y Protección de Mamíferos Marinos &nbsp;
						</a>
					</li>
					<li>
						&nbsp;<a href='https://mx.oceana.org/'>Oceana</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
