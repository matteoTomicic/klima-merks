import styled from "styled-components";

import { colors, device, mixins } from "../../global.styles";
import { Container, H2, Subtitle1, Subtitle2 } from "../../styles/shared.styles";

interface IStyledProductProps {
	$reverseOrder?: boolean;
}

interface IStyledProductImageProps {
	$reverseImageMask?: boolean;
}

export const StyledContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(10)};

	${device.up.TABLET} {
		gap: ${mixins.spacing(15)};
	}

	${device.up.LAPTOP} {
		gap: ${mixins.spacing(25)};
	}
`;

export const IntroWrapper = styled.div`
	${H2},
	${Subtitle2} {
		color: ${colors.text.light};
		text-align: center;

		${device.up.TABLET} {
			text-align: left;
		}
	}

	${H2} {
		margin-bottom: ${mixins.spacing(3)};

		span {
			color: ${colors.primary};
		}

		${device.up.LAPTOP} {
			margin-bottom: ${mixins.spacing(6)};
		}
	}

	${Subtitle2} {
		max-width: 85rem;
	}
`;

export const ProductsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${mixins.spacing(10)};

	${device.up.TABLET} {
		gap: ${mixins.spacing(16)};
	}

	${device.up.LAPTOP} {
		gap: ${mixins.spacing(24)};
	}
`;

export const Product = styled.div<IStyledProductProps>`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: ${mixins.spacing(8)};
	max-width: 43rem;
	position: relative;

	${device.up.TABLET} {
		max-width: 100%;
		flex-direction: ${({ $reverseOrder }) => ($reverseOrder ? "row" : "row-reverse")};
		gap: ${mixins.spacing(10)};
	}

	${device.up.LAPTOP} {
		gap: ${mixins.spacing(16)};
	}

	${device.up.DT_XL} {
		&::before {
			content: "";
			position: absolute;
			bottom: -9.7rem;
			left: 50%;
			transform: translateX(-50%);
			width: 80%;
			height: 0.1rem;
			background-color: ${colors.primary};
			opacity: 0.3;
		}

		&:last-child::before {
			display: none;
		}
	}
`;

export const ProductDetails = styled.div`
	flex: 1.5;

	${device.up.LAPTOP} {
		flex: 1.6;
	}

	${Subtitle1} {
		color: ${colors.primary};
		margin-bottom: ${mixins.spacing(2)};
	}

	${Subtitle2} {
		color: ${colors.text.light};
	}
`;

export const ProductImage = styled.div<IStyledProductImageProps>`
	flex: 1;

	${device.up.TABLET} {
		box-shadow: ${({ $reverseImageMask }) =>
			$reverseImageMask ? "-1.2rem 0.8rem 0.8rem 0 rgba(0, 0, 0, 0.1)" : "1.2rem 0.8rem 0.8rem 0 rgba(0, 0, 0, 0.1)"};
	}

	.product-image {
		border-radius: 1rem;
		mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));

		${device.up.TABLET} {
			mask-image: ${({ $reverseImageMask }) =>
				$reverseImageMask
					? "linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"
					: "linear-gradient(to left, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"};
		}
	}
`;
