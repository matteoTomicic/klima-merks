/* eslint-disable perfectionist/sort-enums */
/* eslint-disable perfectionist/sort-objects */
import { Montserrat } from "next/font/google";
import * as styled from "styled-components";

const montserrat = Montserrat({
	weight: ["300", "400", "600", "700"],
	subsets: ["latin"]
});

export const colors = {
	dark: "#353535",
	neutral: "#FFFFFF",
	gray: "#FAFAFA",
	grayDarker: "#eaedef",
	darkSection: "#111827",
	primary: "#00917e",
	primaryDarker: "#0c685c",
	text: {
		disabled: "#989898",
		light: "#FFFFFF",
		primary: "#353535"
	}
};

export const fonts = {
	default: montserrat.style.fontFamily
};

export const device = {
	up: {
		MOBILE_LANDSCAPE: "@media (min-width: 576px)",
		TABLET: "@media (min-width: 768px)",
		LAPTOP: "@media (min-width: 992px)",
		DT_XL: "@media (min-width: 1200px)",
		DT_XXL: "@media (min-width: 1400px)"
	}
};

export const mixins = {
	spacing: (spacingNumber: number) => `${(spacingNumber * 4) / 10}rem`
};

export default styled.createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		line-height: 1.15;
		-webkit-text-size-adjust: 100%;
		font-size: 62.5%;
		scroll-behavior: smooth;
	}

	body {
		min-height: 100vh;
		font-family: ${fonts.default};
		font-weight: 400;
		font-size: 1.6rem;
	}

	header {
		height: 6.8rem;

		${device.up.LAPTOP} {
			height: 7.5rem;
		}
	}

	ol,
	ul,
	li {
		list-style: none;
	}

	img,
	picture,
	svg,
	video,
	object {
		display: block;
		max-width: 100%;
		height: auto;
	}
`;
