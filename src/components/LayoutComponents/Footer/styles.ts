import styled from "styled-components";

import { colors, device, mixins } from "../../../global.styles";
import { Container, Footnote, PRegular, Subtitle2 } from "../../../styles/shared.styles";
import SectionStyled from "../Section/styles";

export const FooterStyled = styled(SectionStyled)`
	padding-bottom: ${mixins.spacing(5)};

	${device.up.LAPTOP} {
		padding-bottom: ${mixins.spacing(10)};
	}
`;

export const ContainerStyled = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(12)};

	${device.up.LAPTOP} {
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}
`;

export const FooterHead = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(8)};

	${PRegular} {
		max-width: 49rem;
	}

	${device.up.LAPTOP} {
		flex: 1;
	}
`;

export const SocialMediaItems = styled.div`
	display: flex;
	justify-content: flex-start;
	gap: ${mixins.spacing(6)};
`;

export const SocialMediaItem = styled.a`
	${mixins.transitionNormal("color")};
	color: ${colors.text.disabled};

	&:hover {
		color: ${colors.text.primary};
	}
`;

export const FooterLinks = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: ${mixins.spacing(10)};

	${device.up.LAPTOP} {
		flex: 1.7;
	}

	${device.up.DT_XL} {
		flex: 1.2;
	}
`;

export const Navigation = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(4)};

	${Subtitle2} {
		font-weight: bold;
	}
`;

export const NavigationLinks = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(2)};

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const OurServices = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(4)};

	${Subtitle2} {
		font-weight: bold;
	}
`;

export const OurServicesLinks = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(2)};

	a {
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}
	}
`;

export const Contact = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(4)};

	${Subtitle2} {
		font-weight: bold;
	}
`;

export const ContactInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(1)};
`;

export const FooterCopyright = styled.div`
	${Footnote} {
		border-top: 0.1rem solid ${colors.grayDarker};
		padding-top: ${mixins.spacing(6)};
	}

	${device.up.LAPTOP} {
		width: 100%;
	}
`;
