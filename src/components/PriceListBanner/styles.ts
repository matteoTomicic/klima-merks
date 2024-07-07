import styled from "styled-components";

import { colors, mixins } from "../../global.styles";
import { Container, H1 } from "../../styles/shared.styles";

const StyledContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: clamp(${mixins.spacing(16)}, 12.2vw, ${mixins.spacing(62)}) 0;

	${H1} {
		color: ${colors.text.light};
		position: relative;
		z-index: 999;
		text-transform: uppercase;
		letter-spacing: 0.2rem;
	}

	img {
		filter: brightness(0.2);
		object-fit: cover;
	}
`;

export default StyledContainer;
