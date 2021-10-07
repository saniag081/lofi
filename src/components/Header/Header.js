import './Header.scss'

function Header() {
	return (
		<header className="u-content c-header">
			<figure className="c-header__figure">
				<img src="./logo.svg" alt="logo lofi" />
			</figure>
			<nav className="c-header__nav">
				<ul className="c-header__list">
					<li className="c-header__list__item">
						<a href="#2">RESERVE</a>
					</li>
					<li className="c-header__list__item">
						<a href="#3">MEMBERS</a>
					</li>
					<li className="c-header__list__item">
						<a href="#4">in</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;