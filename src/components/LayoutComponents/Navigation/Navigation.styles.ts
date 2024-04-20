import styled from "styled-components";

import Container from "../Container/Container";

interface INavigationItem {
	$currentPage: boolean;
}

export const ContainerStyled = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const NavigationStyled = styled.nav`
	background-color: ${({ theme }) => theme.colors.neutral};
	padding: ${({ theme }) => theme.spacing(4)} 0;
	z-index: 9999;
	position: fixed;
	width: 100%;
`;

export const LogoWrapper = styled.div`
	img {
		${({ theme }) => theme.device.LG} {
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
	background-color: ${({ theme }) => theme.colors.neutral};
	position: absolute;
	top: 6.8rem;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	&.shown {
		height: 31.8rem;
	}

	${({ theme }) => theme.device.LG} {
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
	gap: ${({ theme }) => theme.spacing(5)};

	${({ theme }) => theme.device.LG} {
		flex-direction: row;
		gap: ${({ theme }) => theme.spacing(5)};
	}

	${({ theme }) => theme.device.XL} {
		gap: ${({ theme }) => theme.spacing(7)};
	}

	> div {
		${({ theme }) => theme.device.LG} {
			margin-left: ${({ theme }) => theme.spacing(2)};
		}

		${({ theme }) => theme.device.XL} {
			margin-left: ${({ theme }) => theme.spacing(4)};
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
		background-color: ${({ theme }) => theme.colors.primary};

		${({ theme }) => theme.device.LG} {
			left: 0;
			width: 100%;
			height: 100%;
			background-color: transparent;
			border-bottom: ${({ theme }) => `0.2rem solid ${theme.colors.primary}`};
			transform: ${({ $currentPage }) =>
				$currentPage ? `scale(1) translateX(0) translateY(0)` : `scale(0) translateX(0) translateY(5rem)`};
			transition: all 0.25s ease-in-out;
			opacity: ${({ $currentPage }) => ($currentPage ? 1 : 0)};
		}
	}

	&:hover {
		a {
			${({ theme }) => theme.device.LG} {
				color: ${({ theme }) => theme.colors.primary};
			}
		}

		${({ theme }) => theme.device.LG} {
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
		color: ${({ $currentPage, theme }) => ($currentPage ? theme.colors.primary : theme.colors.text.disabled)};
		transition: color 0.25s ease-in-out;
		z-index: 999;
		position: relative;

		${({ theme }) => theme.device.XL} {
			font-size: 1.8rem;
			line-height: 3rem;
		}
	}
`;
