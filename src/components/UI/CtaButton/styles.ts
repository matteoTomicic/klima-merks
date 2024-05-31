import styled from "styled-components";

import { colors, mixins } from "../../../global.styles";

const CtaButtonStyled = styled.div`
	background-color: ${colors.primary};
	display: inline-flex;
	border-radius: 1.2rem;
	transition: 0.25s ease-in-out;

	a {
		text-decoration: none;
		color: ${colors.text.light};
		padding: ${mixins.spacing(3)} ${mixins.spacing(4)};
	}

	&:hover {
		background-color: ${colors.primaryDarker};
		box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.2);
	}
`;

export default CtaButtonStyled;
