import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';



function About() {
	return (
		<section className="about-section bg-warning" id='about'>
			<Container className=" py-5">
				<Row>
					<Col md={6}>
						<h2 className='display-4'>About Us</h2>
						<p>
						At Little Lemon, we pride ourselves on our attentive and friendly service, ensuring that every guest feels at home. Our menu offers a
						 diverse range of dishes, from hearty entrees to light and refreshing salads, all expertly prepared by our talented chefs.
						 Come dine with us and discover why Little Lemon has become a beloved neighborhood gem for both locals and visitors alike.
						</p>
					</Col>
					<Col md={6}>
					<img src={process.env.PUBLIC_URL + '/images/Mario and Adrian b.jpg'} alt="Little Lemon" fluid style={{ height: 300}} />

					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default About;
