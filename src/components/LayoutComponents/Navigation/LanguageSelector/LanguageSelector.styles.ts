import styled from "styled-components";

import { PRegular } from "../../../../styles/shared.styles";

interface ISelectedLanguageImageWrapper {
	$isLanguagesDropdownOpen: boolean;
}

export const LanguageSelectorStyled = styled.div`
	${({ theme }) => theme.device.LG} {
		position: relative;
	}
`;

export const SelectedLanguageImageWrapper = styled.div<ISelectedLanguageImageWrapper>`
	cursor: pointer;
	display: flex;
	justify-content: center;
	gap: ${({ theme }) => theme.spacing(1)};

	svg {
		color: ${({ theme }) => theme.colors.dark};

		${({ theme }) => theme.device.LG} {
			transform: ${({ $isLanguagesDropdownOpen }) => ($isLanguagesDropdownOpen ? "rotateX(0)" : "rotateX(180deg)")};
			transition: 0.25s transform ease-in-out;
		}
	}
`;

export const LanguageName = styled.span`
	font-size: 1.4rem;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.primary};
	margin-left: ${({ theme }) => theme.spacing(2)};
`;

export const LanguagesDropdown = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 0;
	background-color: ${({ theme }) => theme.colors.neutral};
	z-index: 999;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: ${({ theme }) => theme.spacing(4)};
	overflow: hidden;
	transition: 0.25s height ease-in-out;

	${({ theme }) => theme.device.LG} {
		left: unset;
		right: 0;
		bottom: unset;
		top: 5.2rem;
		width: auto;
		gap: ${({ theme }) => theme.spacing(2)};
		padding: ${({ theme }) => `${theme.spacing(0)} ${theme.spacing(4)}`};
		border-bottom-right-radius: 1rem;
		border-bottom-left-radius: 1rem;
		transition: 0.25s all ease-in-out;
	}

	&.opened {
		height: 31rem;

		${({ theme }) => theme.device.LG} {
			padding: ${({ theme }) => theme.spacing(4)};
			height: 16.2rem;
		}
	}

	${PRegular} {
		font-weight: 600;

		${({ theme }) => theme.device.LG} {
			display: none;
		}
	}
`;

export const Flag = styled.div`
	position: relative;
	padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)} ${theme.spacing(1)} ${theme.spacing(1)}`};
	display: flex;
	align-items: center;
	border-radius: 2rem;
	transition: 0.25s all ease-in-out;

	${({ theme }) => theme.device.LG} {
		min-width: 13.4rem;
	}

	&:hover {
		${({ theme }) => theme.device.LG} {
			background-color: rgba(0, 145, 126, 0.2);
		}

		a span {
			${({ theme }) => theme.device.LG} {
				color: ${({ theme }) => theme.colors.primary};
			}
		}
	}

	a {
		text-decoration: none;
		display: flex;
		align-items: center;

		span {
			color: ${({ theme }) => theme.colors.text.disabled};
		}
	}

	&.selected-language {
		background-color: rgba(0, 145, 126, 0.2);

		a span {
			color: ${({ theme }) => theme.colors.primary};
		}

		.checkmark {
			margin-left: ${({ theme }) => theme.spacing(2)};
			color: ${({ theme }) => theme.colors.primary};
		}
	}
`;

export const GoBackMenu = styled.div`
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing(2)};
	cursor: pointer;
	margin-top: ${({ theme }) => theme.spacing(6)};
	padding: ${({ theme }) => theme.spacing(2)};
	background-color: rgba(0, 145, 126, 0.2);
	border-radius: 1rem;

	${({ theme }) => theme.device.LG} {
		display: none;
	}

	${PRegular} {
		text-transform: uppercase;
		font-weight: normal;
	}

	svg {
		color: ${({ theme }) => theme.colors.text.primary};
	}
`;
