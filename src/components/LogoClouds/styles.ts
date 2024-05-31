import styled from "styled-components";

import { colors, device, mixins } from "../../global.styles";
import { H2 } from "../../styles/shared.styles";

export const HeadingWrapper = styled.div`
	${H2} {
		text-align: center;
		margin-bottom: ${mixins.spacing(5)};

		${device.up.LAPTOP} {
			margin-bottom: ${mixins.spacing(7)};
		}

		span {
			color: ${colors.primary};
		}
	}
`;

export const LogosWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: ${mixins.spacing(4)} ${mixins.spacing(5)};

	${device.up.DT_XXL} {
		gap: ${mixins.spacing(7)};
	}

	.logo {
		background-color: ${colors.neutral};
		border-radius: 1rem;
		padding: ${mixins.spacing(2)};

		${device.up.DT_XL} {
			width: 16rem;
		}
	}
`;
