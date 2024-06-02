import styled from "styled-components";

import { colors, device, mixins } from "../../global.styles";
import { Container, H2, Subtitle1, Subtitle2 } from "../../styles/shared.styles";

export const StyledContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(10)};

	${device.up.DT_XL} {
		gap: ${mixins.spacing(15)};
	}
`;

export const IntroText = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	${Subtitle1} {
		color: ${colors.primary};
		margin-bottom: ${mixins.spacing(2)};
		text-align: center;
	}

	${H2} {
		margin-bottom: ${mixins.spacing(6)};
		color: ${colors.text.light};
		text-align: center;

		${device.up.DT_XL} {
			margin-bottom: ${mixins.spacing(8)};
		}
	}

	${Subtitle2} {
		color: ${colors.text.light};
		text-align: center;
		width: clamp(32.6rem, 80vw, 90rem);
	}
`;

export const FeaturesImage = styled.div`
	position: relative;
	overflow: hidden;
	border-radius: 1rem;
	margin-bottom: ${mixins.spacing(4)};
	margin-left: auto;
	margin-right: auto;
	width: clamp(32.6rem, 80vw, 90rem);

	${device.up.DT_XL} {
		margin-bottom: ${mixins.spacing(8)};
	}

	img {
		display: block;
		mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
	}
`;

export const FeaturesList = styled.div`
	display: grid;
	gap: ${mixins.spacing(6)};

	${device.up.TABLET} {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const FeatureItem = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: ${mixins.spacing(3)};

	svg {
		width: 6%;
		align-self: flex-start;
		max-width: 2rem;
		padding-top: 0.25rem;
	}

	${Subtitle2} {
		width: 90%;
		color: ${colors.text.light};

		span {
			color: ${colors.primary};
			font-weight: bold;
		}
	}
`;
