import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return <>
			<nav className="navbar navbar-expand-lg py-4">
				<div className="container">
					<Link className="navbar-brand text-white fw-bolder" to={'/'}>START FRAMEWORK</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon text-bg-secondary"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav ms-auto">
							<Link className="nav-link fw-bolder text-white me-3 active" to={'/'}>ABOUT</Link>
							<Link className="nav-link fw-bolder text-white me-3" to={'/portfolio'}>PORTFOLIO</Link>
							<Link className="nav-link fw-bolder text-white me-3" to={'/contact'}>CONTACT</Link>
						</div>
					</div>
				</div>
			</nav>
		</>;
}
