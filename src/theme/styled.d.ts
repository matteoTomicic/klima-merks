/* eslint-disable perfectionist/sort-object-types */
import {} from "styled-components";

import { Device } from "./theme.config";

declare module "styled-components" {
	export interface DefaultTheme {
		device: {
			tablet: Device.TABLET;
			desktop: Device.DESKTOP;
		};

		spacing: (spacingNumber: number) => string;
	}
}
