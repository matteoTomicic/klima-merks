import styled from "styled-components";

import { device, mixins } from "../../../global.styles";

const SectionStyled = styled.section`
	padding: ${mixins.spacing(12)} 0;

	${device.up.LAPTOP} {
		padding: ${mixins.spacing(24)} 0;
	}
`;

export default SectionStyled;
