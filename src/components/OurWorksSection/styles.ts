import styled from "styled-components";

import { device, mixins } from "../../global.styles";
import { Container, PRegular } from "../../styles/shared.styles";

export const StyledContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(10)};

	${device.up.LAPTOP} {
		gap: ${mixins.spacing(15)};
	}
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(5)};

	${device.up.LAPTOP} {
		gap: ${mixins.spacing(8)};
	}

	${PRegular} {
		max-width: 80rem;
	}
`;

export const OurWorksGallery = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: ${mixins.spacing(5)};

	${PRegular} {
		display: flex;
		flex-direction: column;
		gap: ${mixins.spacing(2)};
		border-radius: 1rem;
		padding: ${mixins.spacing(3)};
		background-color: rgba(0, 145, 126, 0.1);
		max-width: 80rem;
	}
`;

export const CtaButtonWrapper = styled.div`
	a {
		display: flex;
		align-items: center;
		gap: ${mixins.spacing(2)};
	}
`;
