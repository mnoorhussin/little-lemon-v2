import React from 'react'
import './signup.css';

export const signup = () => {
    return (
<section class="bg-warning text-center p-5 mt-4">
		<div class="container p-3">
			<h3>SUBSCRIBE NOW</h3>
			<form action="#" method="Post">
				<input type="text" name="text" placeholder="Enter Your Email Id"/>
				<button type="button" class="btn btn-secondary btn-signup">Subscribe</button>
			</form>
		</div>
	</section>
  )
}
export default signup;

