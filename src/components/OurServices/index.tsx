import Image, { ImageProps } from "next/image";
import { FaArrowRight } from "react-icons/fa";

import { colors } from "../../global.styles";
import getReactIcon from "../../helpers/getReactIcon.helper";
import { Footnote, H2, PRegular, Subtitle1 } from "../../styles/shared.styles";
import Section from "../LayoutComponents/Section";
import {
	CardContent,
	CardIcon,
	ImageWrapper,
	ServiceCard,
	ServiceDetails,
	ServiceGrid,
	ServiceLink,
	ServiceLinksWrapper,
	StyledContainer
} from "./styles";

interface IServiceButton {
	ariaLabel: string;
	href: string;
	key: number;
	text: string;
}

interface IService {
	description: string;
	details: string[];
	icon: string;
	image: ImageProps;
	key: number;
	serviceButtons: IServiceButton[];
	title: string;
}

export interface IOurServices {
	heading: string;
	services: IService[];
}

export default function OurServices({ heading, services }: IOurServices) {
	return (
		<Section style={{ backgroundColor: colors.gray }}>
			<StyledContainer>
				<H2>{heading}</H2>

				<ServiceGrid>
					{services.map((service) => {
						const ServiceIcon = getReactIcon(service.icon);

						return (
							<ServiceCard key={service.key}>
								<ImageWrapper>
									<Image alt={service.image.alt} fill src={service.image.src} style={{ objectFit: "cover" }} />
								</ImageWrapper>
								<CardContent>
									<CardIcon>
										<ServiceIcon className="service-icon" />
									</CardIcon>
									<Subtitle1>{service.title}</Subtitle1>
									<PRegular>{service.description}</PRegular>
									<ServiceDetails>
										{service.details.map((detail) => (
											<Footnote key={detail}>{detail}</Footnote>
										))}
									</ServiceDetails>
									<ServiceLinksWrapper>
										{service.serviceButtons.map((button) => (
											<ServiceLink aria-label={button.ariaLabel} href={button.href} key={button.key} passHref>
												<PRegular>{button.text}</PRegular>
												<FaArrowRight className="service-link-icon" />
											</ServiceLink>
										))}
									</ServiceLinksWrapper>
								</CardContent>
							</ServiceCard>
						);
					})}
				</ServiceGrid>
			</StyledContainer>
		</Section>
	);
}
