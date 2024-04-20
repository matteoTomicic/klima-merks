import styled from "styled-components";

interface IMenuLine {
	$active: boolean;
}

export const HamburgerMenuStyled = styled.div`
	position: relative;
	width: 2.8rem;
	height: 2.8rem;
	cursor: pointer;

	${({ theme }) => theme.device.LG} {
		display: none;
	}
`;

export const MenuIcon = styled.div`
	display: block;
	width: 100%;
	height: 100%;
	position: relative;
	cursor: pointer;
	z-index: 2;
	-webkit-touch-callout: none;
	position: absolute;
	opacity: 0;
`;

export const MenuLinesWrapper = styled.div`
	margin: auto;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	width: 2.8rem;
	height: 1.4rem;
`;

const MenuLine = styled.span<IMenuLine>`
	position: absolute;
	display: block;
	height: 0.4rem;
	background-color: ${({ theme }) => theme.colors.dark};
	border-radius: 0.2rem;
	transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);
`;

export const MenuLineTop = styled(MenuLine)`
	top: ${({ $active }) => ($active ? "0.5rem" : "0")};
	transform: ${({ $active }) => ($active ? "rotate(45deg)" : null)};
	width: ${({ $active }) => ($active ? "2.8rem" : "2rem")};
`;

export const MenuLineBottom = styled(MenuLine)`
	bottom: ${({ $active }) => ($active ? "0.5rem" : "0")};
	transform: ${({ $active }) => ($active ? "rotate(-45deg)" : null)};
	width: 2.8rem;
`;
