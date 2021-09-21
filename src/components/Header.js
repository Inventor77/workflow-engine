import React, { Component } from "react";

export class Header extends Component {
	render() {
		const openSlider = () => {
			const Slider = document.getElementById("sidebar-wrapper");
			Slider.style.width = "500px";
		};
		return (
			<nav
				className="navbar navbar-expand-lg navbar-light py-2 px-5"
				style={{ backgroundColor: "#89cff0" }}
			>
				<a className="navbar-brand">
					<b>WorkFlow-Engine</b>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="#navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<div className="my-lg-0" style={{ width: "74vw" }}></div>
					<ul className="navbar-nav ">
						<li className="nav-item">
							<button
								className="btn btn-secondary py-1 my-1"
								type="button"
								onClick={() => {
									openSlider();
								}}
							>
								<b>Create Action</b>
								<i class="fas fa-plus mx-2"></i>
							</button>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Header;
