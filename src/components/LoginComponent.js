import React from 'react';
import { Link } from 'react-router-dom';

class LoginComponent extends React.Component {
	render() {
		return (
				<section className="fullscreen">
					<div className="container container-fullscreen">
						<div className="text-middle">
							{/*     */}
							<div className="row">
								<div className="col-md-3 center p-30 background-white b-r-6">
									<h3>Login to your Account</h3>
									<form className="form-transparent-grey">
										<div className="form-group">
											<label className="sr-only">Username or Email</label>
											<input type="text" className="form-control" placeholder="Username or Email" />
										</div>
										<div className="form-group m-b-5">
											<label className="sr-only">Password</label>
											<input type="password" className="form-control" placeholder="Password" />
										</div>
										<div className="form-group form-inline text-left ">
											<div className="checkbox">
												<label>
													<input type="checkbox" /><small> Remember me</small>
												</label>
											</div>
											<a href="#" className="right"><small>Lost your Password?</small></a>
										</div>
										<div className="text-left form-group">
											<button type="button" className="btn btn-default">Login</button>
										</div>
									</form>
									<p className="small">Don't have an account yet? <a href="#">Register New Account</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
		)
	}
}

export default LoginComponent