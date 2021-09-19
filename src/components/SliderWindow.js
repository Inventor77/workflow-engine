import React, { Component } from "react";
import "./Components.css";

export class SliderWindow extends Component {
	render() {
		const closeSlider = () => {
			const Slider = document.getElementById("sidebar-wrapper");
			Slider.style.width = "0px";
		};
		return (
			<nav
				className="navbar navbar-inverse"
				id="sidebar-wrapper"
				role="navigation"
			>
				<ul
					className="sidebar-nav"
					style={{ backgroundColor: "#22273f86", overflow: "auto" }}
				>
					<div className="sidebar-header">
						<div className="sidebar-brand">
							<h4>Create Action</h4>
						</div>
						<div
							className="sidebar-close"
							onClick={() => {
								closeSlider();
							}}
						>
							<i className="fas fa-times"></i>
						</div>
					</div>
					<li>
						<p>
							<h5
								data-bs-toggle="collapse"
								href="#Collapse1"
								role="button"
								aria-expanded="false"
								aria-controls="Collapse1"
							>
								Email
							</h5>
						</p>
						<div className="collapse multi-collapse" id="Collapse1">
							<div className="card-body">
								<form>
									<div className="row mb-3">
										<label for="EmailTo" className="col-sm-2 col-form-label">
											To:
										</label>
										<div className="col-sm-10">
											<input
												type="email"
												className="form-control"
												id="EmailTo"
												placeholder={"name@gmail.com"}
											></input>
										</div>
									</div>
									<div className="row mb-3">
										<label for="EmailFrom" className="col-sm-2 col-form-label">
											From:
										</label>
										<div className="col-sm-10">
											<input
												type="email"
												className="form-control"
												id="EmailFrom"
												placeholder={"your-name@gmail.com"}
											></input>
										</div>
									</div>
									<div className="row mb-3">
										<label className="col-sm-2 col-form-label">Subject</label>
										<div className="col-sm-10">
											<input type="text" className="form-control"></input>
										</div>
									</div>
									<div className="row mb-3">
										<label className="col-sm-2 col-form-label">Body</label>
										<div className="col-sm-10">
											<textarea
												className="col-sm-12 p-2"
												rows="2"
												style={{ borderRadius: "4px" }}
											></textarea>
										</div>
									</div>
									<div class="d-grid gap-2 d-md-flex justify-content-md-end">
										<button
											type="button"
											className="btn btn-info px-5 my-1 mx-2"
										>
											<b>Edit</b>
										</button>
										<button
											type="button"
											className="btn btn-danger px-5 my-1 mx-2"
										>
											<b>Send</b>
										</button>
									</div>
								</form>
							</div>
						</div>
					</li>
					<li>
						<p>
							<h5
								data-bs-toggle="collapse"
								href="#Collapse2"
								role="button"
								aria-expanded="false"
								aria-controls="Collapse2"
							>
								Meeting
							</h5>
						</p>
						<div className="collapse multi-collapse" id="Collapse2">
							<div className="card-body">
								<form>
									<div className="row mb-3">
										<label for="EmailTo" className="col-sm-2 col-form-label">
											Emails
										</label>
										<div className="col-sm-10">
											<input
												type="email"
												className="form-control"
												id="EmailTo"
												placeholder={"name@gmail.com"}
											></input>
										</div>
									</div>
									<div className="row mb-3">
										<label className="col-sm-2 col-form-label">Place</label>
										<div className="col-sm-10">
											<input
												type="text"
												className="form-control"
												placeholder={"Assembly Hall"}
											></input>
										</div>
									</div>
									<div class="d-grid gap-2 d-md-flex justify-content-md-end">
										<button
											type="button"
											className="btn btn-info px-5 my-0 mx-2"
										>
											<b>Edit</b>
										</button>
										<button
											type="button"
											className="btn btn-danger px-5 my-0 mx-2"
										>
											<b>Send</b>
										</button>
									</div>
								</form>
							</div>
						</div>
					</li>
					<li>
						<p>
							<h5
								data-bs-toggle="collapse"
								href="#Collapse3"
								role="button"
								aria-expanded="false"
								aria-controls="Collapse3"
							>
								Reminder
							</h5>
						</p>
						<div className="collapse multi-collapse" id="Collapse3">
							<div className="card-body">
								<form>
									<div className="row mb-3">
										<label for="EmailTo" className="col-sm-2 col-form-label">
											Emails
										</label>
										<div className="col-sm-10">
											<input
												type="email"
												className="form-control"
												id="EmailTo"
											></input>
										</div>
									</div>
									<div className="row mb-3">
										<label className="col-sm-2 col-form-label">Body</label>
										<div className="col-sm-10">
											<textarea
												className="col-sm-12 p-2"
												rows="2"
												style={{ borderRadius: "4px" }}
											></textarea>
										</div>
									</div>
									<div class="d-grid gap-2 d-md-flex justify-content-md-end">
										<button
											type="button"
											className="btn btn-info px-5 my-0 mx-2"
										>
											<b>Edit</b>
										</button>
										<button
											type="button"
											className="btn btn-danger px-5 my-0 mx-2"
										>
											<b>Send</b>
										</button>
									</div>
								</form>
							</div>
						</div>
					</li>
				</ul>
			</nav>
		);
	}
}

export default SliderWindow;
