import styled from "styled-components";

import { colors, device, mixins } from "../../../../global.styles";
import { PRegular } from "../../../../styles/shared.styles";

interface ISelectedLanguageImageWrapper {
	$isLanguagesDropdownOpen: boolean;
}

export const LanguageSelectorStyled = styled.div`
	${device.up.LAPTOP} {
		position: relative;
	}
`;

export const SelectedLanguageImageWrapper = styled.div<ISelectedLanguageImageWrapper>`
	cursor: pointer;
	display: flex;
	justify-content: center;
	gap: ${mixins.spacing(1)};

	svg {
		color: ${colors.dark};

		${device.up.LAPTOP} {
			${mixins.transitionNormal("transform")};
			transform: ${({ $isLanguagesDropdownOpen }) => ($isLanguagesDropdownOpen ? "rotateX(0)" : "rotateX(180deg)")};
		}
	}
`;

export const LanguageName = styled.span`
	font-size: 1.4rem;
	font-weight: 600;
	color: ${colors.primary};
	margin-left: ${mixins.spacing(2)};
`;

export const LanguagesDropdown = styled.div`
	${mixins.transitionNormal("height")};
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 0;
	background-color: ${colors.neutral};
	z-index: 999;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: ${mixins.spacing(4)};
	overflow: hidden;

	${device.up.LAPTOP} {
		${mixins.transitionNormal("all")};
		left: unset;
		right: 0;
		bottom: unset;
		top: 5.2rem;
		width: auto;
		gap: ${mixins.spacing(2)};
		padding: ${`${mixins.spacing(0)} ${mixins.spacing(4)}`};
		border-bottom-right-radius: 1rem;
		border-bottom-left-radius: 1rem;
	}

	&.opened {
		height: 31rem;

		${device.up.LAPTOP} {
			padding: ${mixins.spacing(4)};
			height: 16.2rem;
		}
	}

	${PRegular} {
		font-weight: 600;

		${device.up.LAPTOP} {
			display: none;
		}
	}
`;

export const Flag = styled.div`
	${mixins.transitionNormal("all")};
	position: relative;
	padding: ${`${mixins.spacing(1)} ${mixins.spacing(2)} ${mixins.spacing(1)} ${mixins.spacing(1)}`};
	display: flex;
	align-items: center;
	border-radius: 2rem;

	${device.up.LAPTOP} {
		min-width: 13.4rem;
	}

	&:hover {
		${device.up.LAPTOP} {
			background-color: rgba(0, 145, 126, 0.2);
		}

		a span {
			${device.up.LAPTOP} {
				color: ${colors.primary};
			}
		}
	}

	a {
		text-decoration: none;
		display: flex;
		align-items: center;

		span {
			color: ${colors.text.disabled};
		}
	}

	&.selected-language {
		background-color: rgba(0, 145, 126, 0.2);

		a span {
			color: ${colors.primary};
		}

		.checkmark {
			margin-left: ${mixins.spacing(2)};
			color: ${colors.primary};
		}
	}
`;

export const GoBackMenu = styled.div`
	display: flex;
	align-items: center;
	gap: ${mixins.spacing(2)};
	cursor: pointer;
	margin-top: ${mixins.spacing(6)};
	padding: ${mixins.spacing(2)};
	background-color: rgba(0, 145, 126, 0.2);
	border-radius: 1rem;

	${device.up.LAPTOP} {
		display: none;
	}

	${PRegular} {
		text-transform: uppercase;
		font-weight: normal;
	}

	svg {
		color: ${colors.text.primary};
	}
`;
