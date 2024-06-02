import Image from "next/image";
import { IconType } from "react-icons";
import { FaToolbox, FaTools } from "react-icons/fa";
import { MdHandshake, MdVerified } from "react-icons/md";

import { colors } from "../../global.styles";
import { H2, Subtitle1, Subtitle2 } from "../../styles/shared.styles";
import Section from "../LayoutComponents/Section";
import { FeatureItem, FeaturesImage, FeaturesList, IntroText, StyledContainer } from "./styles";

type IconsMap = Record<string, IconType>;

interface IFeatureItem {
	icon: string;
	key: number;
	text: string;
}

export interface IFeatures {
	features: IFeatureItem[];
	heading: string;
	imageAltText: string;
	introText: string;
	subHeading: string;
}

function Features({ features, heading, imageAltText, introText, subHeading }: IFeatures) {
	const iconsMap: IconsMap = {
		FaToolbox,
		FaTools,
		MdHandshake,
		MdVerified
	};

	return (
		<Section style={{ backgroundColor: colors.darkSection }}>
			<StyledContainer>
				<IntroText>
					<Subtitle1>{introText}</Subtitle1>
					<H2>{heading}</H2>
					<Subtitle2>{subHeading}</Subtitle2>
				</IntroText>
				<FeaturesImage>
					<Image alt={imageAltText} height={598} src="/images/homepage/features.jpg" width={900} />
				</FeaturesImage>
				<FeaturesList>
					{features.map((feature) => {
						const FeatureIcon = iconsMap[feature.icon];

						return (
							<FeatureItem key={feature.key}>
								<FeatureIcon color={colors.text.light} />
								<Subtitle2 dangerouslySetInnerHTML={{ __html: feature.text }} />
							</FeatureItem>
						);
					})}
				</FeaturesList>
			</StyledContainer>
		</Section>
	);
}

export default Features;
