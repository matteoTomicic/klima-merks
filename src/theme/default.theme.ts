/* eslint-disable perfectionist/sort-objects */
import { DefaultTheme } from "styled-components";

import { Device } from "./theme.config";

const theme: DefaultTheme = {
	device: {
		tablet: Device.TABLET,
		desktop: Device.DESKTOP
	},

	spacing: (spacingNumber) => `${(spacingNumber * 4) / 10}rem`
};

export default theme;
