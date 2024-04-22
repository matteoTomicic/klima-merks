/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const PRegular = styled.p`
	font-size: 1.4rem;
	line-height: 2rem;
	color: ${({ theme }) => theme.colors.text.primary};

	${({ theme }) => theme.device.LG} {
		font-size: 1.6rem;
		line-height: 2.4rem;
	}
`;
