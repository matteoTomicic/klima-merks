import { FaArrowRight } from "react-icons/fa6";

import { colors } from "../../global.styles";
import getReactIcon from "../../helpers/getReactIcon.helper";
import { H2, PRegular } from "../../styles/shared.styles";
import Section from "../LayoutComponents/Section";
import CtaButton from "../UI/CtaButton";
import { CtaButtonWrapper, OurWorksGallery, StyledContainer, TextWrapper } from "./styles";

export interface IOurWorksSection {
	heading: string;
	ourWorksGallery: {
		ctaButton: {
			href: string;
			label: string;
		};
		icon: string;
		infoText: string;
	};
	text: string;
}

function OurWorksSection({ heading, ourWorksGallery, text }: IOurWorksSection) {
	const InfoIcon = getReactIcon(ourWorksGallery.icon);

	return (
		<Section style={{ backgroundColor: colors.gray }}>
			<StyledContainer>
				<TextWrapper>
					<H2>{heading}</H2>
					<PRegular>{text}</PRegular>
				</TextWrapper>

				<OurWorksGallery>
					<PRegular>
						<span>
							<InfoIcon color={colors.primary} size={32} />
						</span>
						<span>{ourWorksGallery.infoText}</span>
					</PRegular>
					<CtaButtonWrapper>
						<CtaButton href={ourWorksGallery.ctaButton.href}>
							<span>{ourWorksGallery.ctaButton.label}</span>
							<FaArrowRight />
						</CtaButton>
					</CtaButtonWrapper>
				</OurWorksGallery>
			</StyledContainer>
		</Section>
	);
}

export default OurWorksSection;
