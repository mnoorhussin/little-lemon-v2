import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';



function About() {
	return (
		<section className="about-section" id='about'>
			<Container>
				<Row>
					<Col md={6}>
						<h2>About Us</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at
							nisi eget lacus cursus pharetra vel quis odio. Pellentesque nec
							nulla massa. Vestibulum id malesuada metus, sed facilisis velit.
							Sed aliquam justo nec arcu consectetur scelerisque. Nullam ut
							accumsan quam. Morbi non tincidunt purus. Donec interdum eros ut
							justo eleifend, quis vehicula ex efficitur. Praesent vel bibendum
							nulla. Duis dictum tempus magna, nec commodo enim malesuada eget.
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
