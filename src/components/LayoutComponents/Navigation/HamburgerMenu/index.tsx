import { useEffect, useState } from "react";

import { HamburgerMenuStyled, MenuIcon, MenuLineBottom, MenuLineTop, MenuLinesWrapper } from "./styles";

interface IHamburgerMenu {
	closeHamburger: boolean;
	onClick: () => void;
}

function HamburgerMenu({ closeHamburger, onClick }: IHamburgerMenu) {
	const [toggleHamburger, setToggleHamburger] = useState(false);

	useEffect(() => {
		setToggleHamburger(closeHamburger);
	}, [closeHamburger]);

	const handleToggleHamburger = () => {
		setToggleHamburger(!toggleHamburger);
	};
	return (
		<HamburgerMenuStyled
			onClick={() => {
				onClick();
				handleToggleHamburger();
			}}
		>
			<MenuIcon />
			<MenuLinesWrapper>
				<MenuLineTop $active={toggleHamburger} />
				<MenuLineBottom $active={toggleHamburger} />
			</MenuLinesWrapper>
		</HamburgerMenuStyled>
	);
}

export default HamburgerMenu;
