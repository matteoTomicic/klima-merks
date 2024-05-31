import styled from "styled-components";

import { colors, device, mixins } from "../../global.styles";
import { Container, H1, H2, Subtitle2 } from "../../styles/shared.styles";

const ContainerStyled = styled(Container)`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	align-items: flex-start;
	gap: ${mixins.spacing(6)};
	z-index: 999;
	position: relative;

	${device.up.LAPTOP} {
		gap: ${mixins.spacing(10)};
	}

	${device.up.DT_XXL} {
		padding: 2vw 0;
	}

	${H1} {
		color: ${colors.primary};
		margin-bottom: ${mixins.spacing(2)};
	}

	${H2} {
		color: ${colors.text.light};

		span {
			color: ${colors.primary};
		}
	}

	${Subtitle2} {
		color: ${colors.text.light};
		width: clamp(34.3rem, 72vw, 85.8rem);
	}
`;

export default ContainerStyled;
