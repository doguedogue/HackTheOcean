import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
	return (
		<>
			<main className='home'>
				<nav className='navbar lighten-2-hover'>
					<Link to='/home'>
						<button type='button' className='btn btn-outline-info'>
							<p></p>
							<h1>Hack The Ocean</h1>
							<p>Launch X</p>
						</button>
					</Link>
				</nav>
			</main>
		</>
	);
};

export default Intro;
