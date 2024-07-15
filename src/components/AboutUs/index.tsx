import Image, { ImageProps } from "next/image";

import { H1, PRegular } from "../../styles/shared.styles";
import Section from "../LayoutComponents/Section";
import { AboutUsWrapper, ImageWrapper, StyledContainer, TextWrapper } from "./styles";

export interface IAboutUs {
	aboutUsText: string;
	bannerImage: ImageProps;
	heading: string;
	ourProjectsText: string;
	ourServicesText: string;
}

function AboutUs({ aboutUsText, bannerImage, heading, ourProjectsText, ourServicesText }: IAboutUs) {
	return (
		<Section>
			<StyledContainer>
				<AboutUsWrapper>
					<H1>{heading}</H1>
					<TextWrapper>
						<ImageWrapper className="mobile">
							<Image
								alt={bannerImage.alt}
								height={bannerImage.height}
								priority
								src={bannerImage.src}
								width={bannerImage.width}
							/>
						</ImageWrapper>
						<PRegular>{aboutUsText}</PRegular>
						<PRegular>{ourServicesText}</PRegular>
						<PRegular>{ourProjectsText}</PRegular>
					</TextWrapper>
				</AboutUsWrapper>
				<ImageWrapper className="desktop">
					<Image
						alt={bannerImage.alt}
						height={bannerImage.height}
						priority
						src={bannerImage.src}
						width={bannerImage.width}
					/>
				</ImageWrapper>
			</StyledContainer>
		</Section>
	);
}

export default AboutUs;
