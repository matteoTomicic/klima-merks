import Image, { ImageProps } from "next/image";

import getReactIcon from "../../helpers/getReactIcon.helper";
import { H1, PRegular, Subtitle2 } from "../../styles/shared.styles";
import {
	ContactInfoSection,
	ContactInfoWrapper,
	ContactInfosWrapper,
	ContactUsWrapper,
	ImageSection,
	ImageWrapper,
	LocationMap,
	StyledContainer,
	TextWrapper
} from "./styles";

interface IContactInfo {
	icon: string;
	key: number;
	labelRow1: string;
	labelRow2?: string;
	link?: {
		href: string;
	};
}

export interface IContactUs {
	contactInfos: IContactInfo[];
	googleMapSrc: string;
	heading: string;
	image: ImageProps;
	introText: string;
}

function ContactUs({ contactInfos, googleMapSrc, heading, image, introText }: IContactUs) {
	return (
		<ContactUsWrapper>
			<ImageSection>
				<ImageWrapper>
					<Image alt={image.alt} height={image.height} priority src={image.src} width={image.width} />
				</ImageWrapper>
			</ImageSection>
			<ContactInfoSection>
				<StyledContainer>
					<TextWrapper>
						<H1>{heading}</H1>
						<Subtitle2>{introText}</Subtitle2>
					</TextWrapper>
					<ContactInfosWrapper>
						{contactInfos.map((contactInfo) => {
							const ContactInfoIcon = getReactIcon(contactInfo.icon);

							return (
								<ContactInfoWrapper key={contactInfo.key}>
									<ContactInfoIcon size={24} />
									<div>
										{!contactInfo.link && <PRegular>{contactInfo.labelRow1}</PRegular>}
										{contactInfo.labelRow2 && <PRegular>{contactInfo.labelRow2}</PRegular>}
										{contactInfo.link && (
											<a href={contactInfo.link.href}>
												<PRegular>{contactInfo.labelRow1}</PRegular>
											</a>
										)}
									</div>
								</ContactInfoWrapper>
							);
						})}
					</ContactInfosWrapper>
					<LocationMap
						allowFullScreen={false}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						src={googleMapSrc}
						title="Klima Merks map pin"
					/>
				</StyledContainer>
			</ContactInfoSection>
		</ContactUsWrapper>
	);
}

export default ContactUs;
