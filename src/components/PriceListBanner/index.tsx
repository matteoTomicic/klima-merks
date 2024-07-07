import Image, { ImageProps } from "next/image";

import { H1 } from "../../styles/shared.styles";
import Section from "../LayoutComponents/Section";
import StyledContainer from "./styles";

export interface IPriceListBanner {
	heading: string;
	image: ImageProps;
}

export function PriceListBanner({ heading, image }: IPriceListBanner) {
	return (
		<Section style={{ padding: "0", position: "relative" }}>
			<StyledContainer>
				<H1>{heading}</H1>
				<Image alt={image.alt} fill priority src={image.src} />
			</StyledContainer>
		</Section>
	);
}
