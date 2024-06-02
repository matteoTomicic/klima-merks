import Image, { ImageProps } from "next/image";
import { IconType } from "react-icons";
import { BiSupport } from "react-icons/bi";
import { FaArrowRight, FaTools } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

import { colors } from "../../global.styles";
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

type IconsMap = Record<string, IconType>;

interface IServiceButton {
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

interface IOurServices {
	heading: string;
	services: IService[];
}

export default function OurServices({ heading, services }: IOurServices) {
	const iconsMap: IconsMap = {
		BiSupport,
		FaGear,
		FaTools
	};

	return (
		<Section style={{ backgroundColor: colors.gray }}>
			<StyledContainer>
				<H2>{heading}</H2>

				<ServiceGrid>
					{services.map((service) => {
						const ServiceIcon = iconsMap[service.icon];

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
											<ServiceLink href={button.href} key={button.key} passHref>
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
