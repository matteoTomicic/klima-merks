import styled from "styled-components";

import { colors, device, mixins } from "../../global.styles";
import { Container, Subtitle2 } from "../../styles/shared.styles";
import SectionStyled from "../LayoutComponents/Section/styles";

export const ContactUsWrapper = styled.div`
	${device.up.LAPTOP} {
		display: flex;
		flex-direction: row-reverse;
	}
`;

export const ImageSection = styled(SectionStyled)`
	padding: 0;

	${device.up.LAPTOP} {
		background-color: ${colors.gray};
	}

	${device.up.DT_4K} {
		flex: 1;
	}
`;

export const ContactInfoSection = styled(SectionStyled)`
	background-color: ${colors.gray};

	${device.up.DT_4K} {
		flex: 2;
	}
`;

export const ImageWrapper = styled.div`
	img {
		${mixins.maskImage("bottom")};

		${device.up.LAPTOP} {
			${mixins.maskImage("left")};
			height: 100%;
			object-fit: cover;
		}
	}

	${device.up.LAPTOP} {
		height: 100%;
	}
`;

export const StyledContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(10)};

	${device.up.LAPTOP} {
		padding: 0 ${mixins.spacing(10)};
	}

	${device.up.DT_XL} {
		padding: 0 ${mixins.spacing(15)};
	}

	${device.up.DT_XXL} {
		padding: 0 ${mixins.spacing(20)};
	}
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(6)};

	${Subtitle2} {
		color: ${colors.text.disabled};
	}
`;

export const ContactInfosWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(4)};
	justify-content: flex-start;
`;

export const ContactInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: ${mixins.spacing(4)};

	a {
		${mixins.linkUnderline(colors.text.primary)};
	}
`;

export const LocationMap = styled.iframe`
	height: 80vw;
	max-height: 50rem;
	width: 100%;
	max-width: 70rem;
	border: 0;
	border-radius: 1rem;

	${device.up.LAPTOP} {
		max-height: 40rem;
	}
`;
