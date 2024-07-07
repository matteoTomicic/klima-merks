import styled from "styled-components";

import { device, mixins } from "../../global.styles";
import { Container } from "../../styles/shared.styles";

export const StyledContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(6)};

	${device.up.TABLET} {
		gap: ${mixins.spacing(10)};
	}
`;

export const ContactInfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: ${mixins.spacing(4)};

	${device.up.MOBILE_LANDSCAPE} {
		flex-direction: row;
		align-items: center;
		gap: ${mixins.spacing(10)};
	}
`;

export const ContactMobileLink = styled.a`
	display: flex;
	align-items: center;
	gap: ${mixins.spacing(1)};
	color: inherit;
`;

export const CtaButtonWrapper = styled.div`
	a {
		display: flex;
		align-items: center;
		gap: ${mixins.spacing(2)};
	}
`;

export const SuffixDisclaimersWrapper = styled.div`
	max-width: 90rem;
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(3)};
`;
