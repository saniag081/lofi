import { useRef } from 'react';
import './Header.scss';

function Header() {
	const navRef = useRef(null);

	const handleShowMenu = (e) => {
		navRef.current.classList.toggle('js-active')
	}

	return (
		<header className="u-content header">
			<figure className="header__figure">
				<img src="./logo.svg" alt="logo lofi" />
			</figure>
			<figure className="header__figure header__menu" onClick={handleShowMenu} >
				<img className="header__menu__item" src="./menu.svg" alt="menu" />
			</figure>
			<nav ref={navRef} className="header__nav">
				<ul className="header__list">
					<li className="header__list__item">
						<a href="#contact">RESERVE</a>
					</li>
					<li className="header__list__item">
						<a href="#aboutAs">MEMBERS</a>
					</li>
					<li className="header__list__item header__list__logo">
						<a href="#4">
							<figure className="header__figure">
								<img src="./instagram.svg" alt="logo instagram" />
							</figure>
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header;