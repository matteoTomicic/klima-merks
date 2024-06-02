import styled from "styled-components";

import { colors, device } from "../global.styles";

export const Container = styled.div`
	width: calc(100% - 3.2rem);
	margin-left: auto;
	margin-right: auto;

	${device.up.MOBILE_LANDSCAPE} {
		max-width: 54rem;
		width: 100%;
	}

	${device.up.TABLET} {
		max-width: 72rem;
	}

	${device.up.LAPTOP} {
		max-width: 96rem;
	}

	${device.up.DT_XL} {
		max-width: 114rem;
	}

	${device.up.DT_XXL} {
		max-width: 132rem;
	}
`;

export const H1 = styled.h1`
	font-size: 3rem;
	line-height: 3.6rem;
	font-weight: 700;

	${device.up.LAPTOP} {
		font-size: 5rem;
		line-height: 5.8rem;
	}
`;

export const H2 = styled.h2`
	font-size: 2.4rem;
	line-height: 2.8rem;
	font-weight: 700;

	${device.up.LAPTOP} {
		font-size: 3.4rem;
		line-height: 4rem;
	}
`;

export const Subtitle1 = styled.p`
	font-size: 1.8rem;
	line-height: 2.4rem;
	font-weight: 700;

	${device.up.LAPTOP} {
		font-size: 2.4rem;
		line-height: 3.2rem;
	}
`;

export const Subtitle2 = styled.p`
	font-size: 1.6rem;
	line-height: 2.2rem;

	${device.up.LAPTOP} {
		font-size: 2rem;
		line-height: 2.6rem;
	}
`;

export const PRegular = styled.p`
	font-size: 1.4rem;
	line-height: 2rem;
	color: ${colors.text.primary};

	${device.up.LAPTOP} {
		font-size: 1.6rem;
		line-height: 2.4rem;
	}
`;

export const Footnote = styled.p`
	font-size: 1.2rem;
	line-height: 2rem;
	color: ${colors.text.primary};

	${device.up.LAPTOP} {
		font-size: 1.4rem;
		line-height: 2.4rem;
	}
`;
