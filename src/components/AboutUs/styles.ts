import styled from "styled-components";

import { device, mixins } from "../../global.styles";
import { Container } from "../../styles/shared.styles";

export const StyledContainer = styled(Container)`
	${device.up.DT_XL} {
		display: flex;
		align-items: center;
		gap: ${mixins.spacing(5)};
	}
`;

export const AboutUsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(5)};

	${device.up.LAPTOP} {
		gap: ${mixins.spacing(10)};
	}

	${device.up.DT_XL} {
		flex: 1.3;
	}
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(3)};

	${device.up.LAPTOP} {
		gap: ${mixins.spacing(5)};
	}
`;

export const ImageWrapper = styled.div`
	&.desktop {
		display: none;

		${device.up.DT_XL} {
			display: block;
		}
	}

	&.mobile {
		${device.up.DT_XL} {
			display: none;
		}
	}

	img {
		${mixins.maskImage("bottom")};
		border-radius: 1rem;

		${device.up.DT_XL} {
			${mixins.maskImage("left")};
		}
	}

	${device.up.DT_XL} {
		flex: 1;
	}
`;
