import styled from "styled-components";

import { colors, device, mixins } from "../../global.styles";
import { Container, H1, Subtitle2 } from "../../styles/shared.styles";
import SectionStyled from "../LayoutComponents/Section/styles";

export const StyledContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(10)};
`;

export const TitleContentWrapper = styled(SectionStyled)`
	max-width: 88.5rem;
	margin: 0 auto;

	${Container} {
		display: flex;
		flex-direction: column;
		gap: ${mixins.spacing(4)};
	}

	${H1} {
		text-align: center;
		font-size: 2.4rem;
		line-height: 3.2rem;

		${device.up.LAPTOP} {
			font-size: 4rem;
			line-height: 5rem;
		}
	}

	${Subtitle2} {
		text-align: center;
		color: ${colors.text.disabled};
	}
`;

export const Services = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ServiceImageWrapper = styled.div`
	border-radius: 0.8rem;
	max-width: 62.5rem;

	img {
		${mixins.maskImage("bottom")};
		border-radius: 0.8rem;

		${device.up.TABLET} {
			${mixins.maskImage("left")};
		}
	}
`;

export const Service = styled(SectionStyled)`
	&:nth-child(odd) {
		background-color: ${colors.gray};
	}

	&:nth-child(even) {
		${ServiceImageWrapper} {
			margin-left: auto;

			img {
				${device.up.TABLET} {
					${mixins.maskImage("right")};
				}
			}
		}
	}
`;

export const ServiceTextContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(6)};

	${device.up.LAPTOP} {
		gap: ${mixins.spacing(10)};
	}
`;

export const ServiceDetailsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(8)};

	${device.up.LAPTOP} {
		flex-direction: row;
	}
`;

export const ServiceDetails = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(4)};
`;

export const ServiceDetailsTitle = styled.div`
	display: flex;
	align-items: center;
	gap: ${mixins.spacing(1)};

	.service-icon {
		width: clamp(2rem, 2.4vw, 2.4rem);
	}

	${Subtitle2} {
		font-weight: 600;
	}

	${device.up.LAPTOP} {
		gap: ${mixins.spacing(2)};
		align-items: flex-start;
	}
`;

export const ServiceDetailsDescriptionListItem = styled.li`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: ${mixins.spacing(2)};

	& + & {
		margin-top: ${mixins.spacing(3)};
	}

	p {
		flex: 1;
	}
`;

export const CtaButtonWrapper = styled.div`
	a {
		display: flex;
		gap: ${mixins.spacing(2)};
	}
`;
