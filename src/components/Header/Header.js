import './Header.scss'

function Header() {
	return (
		<header className="u-content c-header">
			<figure className="c-header-figure">
				<img src="./logo.svg" alt="logo lofi" />
			</figure>
			<nav className="c-header-nav">
				<ul className="c-header-nav-list">
					<li className="c-header-nav-list-item">
						<a href="#2">RESERVE</a>
					</li>
					<li className="c-header-nav-list-item">
						<a href="#3">MEMBERS</a>
					</li>
					<li className="c-header-nav-list-item">
						<a href="#4">in</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;