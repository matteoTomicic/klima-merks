import Image from "next/image";

import Routes from "../../enums/routes";
import { H1, H2, Subtitle2 } from "../../styles/shared.styles";
import Section from "../LayoutComponents/Section";
import CtaButton from "../UI/CtaButton";
import ContainerStyled from "./styles";

export interface IHomepageBanner {
	bannerImageAltText: string;
	ctaButtonText: string;
	introText: string;
	mainHeading: string;
	subHeading: string;
}

function HomepageBanner({ bannerImageAltText, ctaButtonText, introText, mainHeading, subHeading }: IHomepageBanner) {
	return (
		<Section style={{ position: "relative" }}>
			<Image
				alt={bannerImageAltText}
				fill
				priority
				quality={100}
				src="/images/homepage/homepage-banner.jpg"
				style={{ filter: "brightness(0.2)", objectFit: "cover", objectPosition: "right center" }}
			/>
			<ContainerStyled>
				<div>
					<H1>{mainHeading}</H1>
					<H2 dangerouslySetInnerHTML={{ __html: subHeading }} />
				</div>
				<Subtitle2>{introText}</Subtitle2>
				<CtaButton href={Routes.CONTACT}>{ctaButtonText}</CtaButton>
			</ContainerStyled>
		</Section>
	);
}

export default HomepageBanner;
