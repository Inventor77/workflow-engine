import React, { Component } from "react";
import "./Components.css";

export class SliderWindow extends Component {
	render() {
		const closeSlider = () => {
			const Slider = document.getElementById("sidebar-wrapper");
			Slider.style.width = 0;
		};
		return (
			<nav class="navbar navbar-inverse" id="sidebar-wrapper" role="navigation">
				<ul class="sidebar-nav" style={{ backgroundColor: "#22273f86" }}>
					<div class="sidebar-header">
						<div class="sidebar-brand">
							<h4>Create Action</h4>
						</div>
						<div
							className="sidebar-close"
							onClick={() => {
								closeSlider();
							}}
						>
							<i class="fas fa-times"></i>
						</div>
					</div>
					<li>
						<a>
							<h5>Email</h5>
						</a>
					</li>
					<li>
						<a>
							<h5>Meeting</h5>
						</a>
					</li>
					<li>
						<a>
							<h5>Reminder</h5>
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default SliderWindow;
