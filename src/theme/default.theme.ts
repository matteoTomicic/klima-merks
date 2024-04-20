/* eslint-disable perfectionist/sort-objects */
import { Montserrat } from "next/font/google";
import { DefaultTheme } from "styled-components";

import { Device } from "./theme.config";

const montserrat = Montserrat({
	weight: ["300", "400", "600", "700"],
	subsets: ["latin"]
});

const theme: DefaultTheme = {
	device: {
		SM: Device.SM,
		MD: Device.MD,
		LG: Device.LG,
		XL: Device.XL,
		XXL: Device.XXL
	},

	fonts: {
		default: montserrat.style.fontFamily
	},

	colors: {
		text: {
			primary: "#353535",
			light: "#FFFFFF",
			disabled: "#989898"
		},
		neutral: "#FFFFFF",
		primary: "#00917e",
		dark: "#353535"
	},

	spacing: (spacingNumber) => `${(spacingNumber * 4) / 10}rem`
};

export default theme;
