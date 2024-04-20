/* eslint-disable perfectionist/sort-object-types */
import {} from "styled-components";

import { Device } from "./theme.config";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			text: {
				primary: string;
				light: string;
				disabled: string;
			};
			neutral: string;
			primary: string;
			dark: string;
		};

		device: {
			SM: Device.SM;
			MD: Device.MD;
			LG: Device.LG;
			XL: Device.XL;
			XXL: Device.XXL;
		};

		fonts: {
			default: string;
		};

		spacing: (spacingNumber: number) => string;
	}
}
