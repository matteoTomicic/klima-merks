import Link from "next/link";
import styled from "styled-components";

import { colors, device, mixins } from "../../global.styles";
import { Container, Footnote, PRegular, Subtitle1 } from "../../styles/shared.styles";

export const StyledContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${mixins.spacing(10)};

	${device.up.LAPTOP} {
		gap: ${mixins.spacing(15)};
	}
`;

export const ServiceGrid = styled.div`
	display: flex;
	gap: ${mixins.spacing(8)};
	justify-content: center;
	flex-wrap: wrap;
`;

export const ServiceCard = styled.div`
	background: #fff;
	border-radius: 15px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	max-width: 34.4rem;
	display: flex;
	flex-direction: column;
`;

export const ImageWrapper = styled.div`
	width: 100%;
	height: 20rem;
	overflow: hidden;
	position: relative;
`;

export const CardContent = styled.div`
	padding: ${mixins.spacing(9)} ${mixins.spacing(4)} ${mixins.spacing(4)};
	position: relative;
	background: linear-gradient(145deg, #00917e, #0c685c);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${mixins.spacing(5)};
	flex-grow: 1;

	${Subtitle1},
	${PRegular},
	${Footnote} {
		color: ${colors.text.light};
		text-align: center;
	}
`;

export const CardIcon = styled.div`
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	background: ${colors.neutral};
	position: absolute;
	top: -2.5rem;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	justify-content: center;
	align-items: center;

	.service-icon {
		width: 2.8rem;
	}
`;

export const ServiceDetails = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ServiceLinksWrapper = styled.div`
	display: flex;
	gap: ${mixins.spacing(10)};
`;

export const ServiceLink = styled(Link)`
	text-decoration: none;
	color: ${colors.text.light};
	font-weight: bold;
	display: flex;
	align-items: center;
	gap: ${mixins.spacing(1)};
	border: 0.1rem solid ${colors.neutral};
	padding: ${mixins.spacing(2)} ${mixins.spacing(3)};
	border-radius: 1rem;

	&:hover {
		.service-link-icon {
			width: 1.6rem;
		}
	}

	.service-link-icon {
		width: 0;
		transition: width 0.2s ease-in-out;
	}
`;
