import styled from "styled-components";

import { colors, device, mixins } from "../../global.styles";
import { Container, H2, Subtitle1, Subtitle2 } from "../../styles/shared.styles";

interface IStatCardStyled {
	$cardBackgroundColor: string;
	$cardMaxWidth?: string;
}

export const StyledContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(14)};

	${device.up.LAPTOP} {
		gap: ${mixins.spacing(20)};
	}

	${H2} {
		margin-bottom: ${mixins.spacing(6)};
	}
`;

export const StatsGrid = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(8)};

	${device.up.LAPTOP} {
		max-width: none;
		flex-direction: row;
		align-items: flex-end;
	}
`;

export const StatCard = styled.div<IStatCardStyled>`
	padding: ${mixins.spacing(8)};
	border-radius: 1.6rem;
	background-color: ${({ $cardBackgroundColor }) => $cardBackgroundColor};
	display: flex;
	flex-direction: column-reverse;
	row-gap: ${mixins.spacing(8)};
	column-gap: ${mixins.spacing(16)};

	&.light-text {
		.count-number {
			color: ${colors.text.light};
		}
	}

	.count-number {
		font-size: 3rem;
		font-weight: bold;
	}

	${device.up.MOBILE_LANDSCAPE} {
		flex-direction: row-reverse;
		align-items: flex-end;
		max-width: ${({ $cardMaxWidth }) => $cardMaxWidth};
	}

	${device.up.LAPTOP} {
		max-width: none;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
	}
`;

export const StatCardText = styled.div`
	${Subtitle1} {
		margin-bottom: ${mixins.spacing(2)};
	}

	.light-text & {
		${Subtitle1},
		${Subtitle2} {
			color: ${colors.text.light};
		}
	}
`;
