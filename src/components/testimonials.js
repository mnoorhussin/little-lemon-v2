import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import '../Testimonials.css';


export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="/images/1.jpg" alt="Shirley" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
			Amazing food and top-notch service at Little Lemon! I highly recommend the lemon risotto. I'll definitely be back
            </p>
          </div>
        </div>

        <div>
          <img src="/images/2.jpg"  alt="Daniel"/>
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
			One of my favorite restaurants in town! The quality and flavor of the food is always fantastic, and the service is friendly.
            </p>
          </div>
        </div>

        <div>
          <img src="/images/3.jpg"  alt="Theo"/>
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
			Took my family to Little Lemon for a special occasion and it was a huge hit! Delicious food, warm atmosphere, and attentive staff
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}