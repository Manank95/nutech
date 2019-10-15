import React from 'react';
import Nav from '../components/Nav';

class BlogComponent extends React.Component {
	render() {
		return (
			<div>
				<Nav />
				<section id="page-title" className="page-title-center text-light background-overlay-dark">
					<div className="container">
						<div className="page-title">
							<span className="post-meta-category">Health Awareness</span>
							<h1>Let’s Shake off Complacency and Create a Sense of Urgency</h1>
							<div className="small m-b-20">April 14, 2019 | by Dr. Uddhav Kelavkar</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default BlogComponent;