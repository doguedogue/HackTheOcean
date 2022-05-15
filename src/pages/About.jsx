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
				<div className='divisor'>
					<p>
						El proposito de este proyecto es crear conciencia; una vision de nuestro mundo, los oceanos y la gran
						biodiversidad que alberga. La poblacion debe estar conciente del problema y darle la atencion necesaria para
						que desde el presente nosotros para las futuras generaciones ayudemos a salvaguardar nuetsro hermoso
						planeta.
					</p>
					<img
						src='https://dam.ngenespanol.com/wp-content/uploads/2019/05/tortugas-marinas.png'
						className='pics'
						alt='Oceano_Tortuga'
					/>
				</div>
				<div className='divisor'>
					<img
						src='https://www.sanbi.org/wp-content/uploads/2018/07/iucn-red-list-logo-red.jpg'
						className='pics'
						alt='Red_List'
					/>
					<p>
						Este proyecto ofrece una visualizacion de las especies en peligro de extinción a nivel mundial almacenadas
						en una API especializada: Red List IUCN (International Union for Conservation of Nature) o la 'Unión
						Internacional para la Conservación de la Naturaleza'.
					</p>
				</div>
				<div className='divisor'>
					<p>
						Nuestra iniciativa consiste en identificar las posibles amenazas a la fauna y flora marina y tomar acciones
						preventivas. Pedimos ayuda a las organizaciones que gestionan y salvaguardan la vida silvestre y solicitamos
						la cooperacion de la poblacion para proteger este bello mundo:
					</p>
					<img
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPp1aRjEabYSfOAYTlnXECKErRxTz7kH4qIxe6EyfIovM9Abfx1h8ojoLbVFDj88z8dAc&usqp=CAU'
						className='pics'
						alt='Oceano_Ballena'
					/>
				</div>
				<div className='divisor'>
					<ul>
						<li>
							<a href='http://www.pelagiclife.org/' rel='noreferrer' target='_blank'>
								Protección y Conservación Pelágica AC &nbsp;
							</a>
						</li>
						<li>
							<a href='https://www.wwf.org.mx/' rel='noreferrer' target='_blank'>
								Fondo Mundial para la naturaleza &nbsp; WWF
							</a>
						</li>
						<li>
							<a href='http://www.amhmar.org.mx/' rel='noreferrer' target='_blank'>
								La Asociación Mexicana de Hábitats para la Interacción y Protección de Mamíferos Marinos &nbsp;
							</a>
						</li>
						<li>
							&nbsp;
							<a href='https://mx.oceana.org/' rel='noreferrer' target='_blank'>
								Oceana
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default About;
