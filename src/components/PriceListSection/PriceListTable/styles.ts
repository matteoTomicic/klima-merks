import styled from "styled-components";

import { colors, device, mixins } from "../../../global.styles";

export const Th = styled.th`
	background: ${colors.primary};
	border: 0.1rem solid ${colors.primaryDarker};
	text-align: center;
	color: ${colors.text.light};
`;

export const Td = styled.td`
	border: 0.1rem solid ${colors.primaryDarker};
	text-align: center;
	line-height: 2.2rem;
`;

export const Table = styled.table`
	width: 100%;
	max-width: 90rem;
	border-collapse: collapse;

	${Th}, ${Td} {
		padding: ${mixins.spacing(2)} ${mixins.spacing(1)};

		${device.up.MOBILE_LANDSCAPE} {
			padding: ${mixins.spacing(2)} ${mixins.spacing(4)};
		}

		${device.up.TABLET} {
			padding: ${mixins.spacing(3)} ${mixins.spacing(4)};
		}

		${device.up.LAPTOP} {
			padding: ${mixins.spacing(4)} ${mixins.spacing(4)};
		}
	}
`;

export const Tr = styled.tr`
	&:nth-child(even) {
		background: ${colors.grayDarker};
	}
`;
