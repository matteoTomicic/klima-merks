import styled from "styled-components";

import { colors, device, mixins } from "../../../global.styles";
import { Container } from "../../../styles/shared.styles";

interface INavigationItem {
	$currentPage: boolean;
}

export const ContainerStyled = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NavigationStyled = styled.nav`
	background-color: ${colors.neutral};
	padding: ${mixins.spacing(4)} 0;
	z-index: 9999;
	position: fixed;
	width: 100%;
`;

export const LogoWrapper = styled.div`
	img {
		${device.up.LAPTOP} {
			width: 18rem;
		}
	}
`;

export const NavigationItems = styled.div`
	width: 100%;
	height: 0;
	margin: 0;
	overflow: hidden;
	transition: 0.3s all ease-in-out;
	background-color: ${colors.neutral};
	position: absolute;
	top: 6.8rem;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	&.shown {
		height: 31rem;
	}

	${device.up.LAPTOP} {
		height: auto;
		width: auto;
		margin-left: auto;
		position: static;
		overflow: visible;
	}
`;

export const NavigationItemsList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
	gap: ${mixins.spacing(5)};

	${device.up.LAPTOP} {
		flex-direction: row;
		gap: ${mixins.spacing(5)};
	}

	${device.up.DT_XL} {
		gap: ${mixins.spacing(7)};
	}

	> div {
		${device.up.LAPTOP} {
			margin-left: ${mixins.spacing(2)};
		}

		${device.up.DT_XL} {
			margin-left: ${mixins.spacing(4)};
		}
	}
`;

export const NavigationItem = styled.span<INavigationItem>`
	position: relative;

	&:after {
		content: "";
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: -0.2rem;
		width: ${({ $currentPage }) => ($currentPage ? "100%" : "0")};
		height: 0.1rem;
		background-color: ${colors.primary};

		${device.up.LAPTOP} {
			left: 0;
			width: 100%;
			height: 100%;
			background-color: transparent;
			border-bottom: 0.2rem solid ${colors.primary};
			transform: ${({ $currentPage }) =>
				$currentPage ? `scale(1) translateX(0) translateY(0)` : `scale(0) translateX(0) translateY(5rem)`};
			transition: all 0.25s ease-in-out;
			opacity: ${({ $currentPage }) => ($currentPage ? 1 : 0)};
		}
	}

	&:hover {
		a {
			${device.up.LAPTOP} {
				color: ${colors.primary};
			}
		}

		${device.up.LAPTOP} {
			&:after {
				transform: scale(1) translateX(0) translateY(0);
				opacity: 1;
			}
		}
	}

	a {
		font-size: 1.6rem;
		line-height: 2.4rem;
		font-weight: 600;
		text-decoration: none;
		color: ${({ $currentPage }) => ($currentPage ? colors.primary : colors.text.disabled)};
		transition: color 0.25s ease-in-out;
		z-index: 999;
		position: relative;

		${device.up.DT_XL} {
			font-size: 1.8rem;
			line-height: 3rem;
		}
	}
`;
