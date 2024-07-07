import Image, { ImageProps } from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { TiInputChecked } from "react-icons/ti";

import getReactIcon from "../../helpers/getReactIcon.helper";
import { Container, H1, PRegular, Subtitle1, Subtitle2 } from "../../styles/shared.styles";
import Section from "../LayoutComponents/Section";
import CtaButton from "../UI/CtaButton";
import {
	CtaButtonWrapper,
	Service,
	ServiceDetails,
	ServiceDetailsDescriptionListItem,
	ServiceDetailsTitle,
	ServiceDetailsWrapper,
	ServiceImageWrapper,
	ServiceTextContent,
	Services,
	StyledContainer,
	TitleContentWrapper
} from "./styles";

interface IService {
	ctaButton: {
		href: string;
		label: string;
	};
	details: {
		description: {
			key: number;
			label: string;
		}[];
		icon: string;
		key: number;
		title: string;
	}[];
	id: string;
	image: ImageProps;
	key: number;
	title: string;
}

export interface IServicesSection {
	heading: string;
	services: IService[];
	subtitle: string;
}

function ServicesSection({ heading, services, subtitle }: IServicesSection) {
	return (
		<Section style={{ padding: 0 }}>
			<TitleContentWrapper as="div">
				<Container>
					<H1>{heading}</H1>
					<Subtitle2>{subtitle}</Subtitle2>
				</Container>
			</TitleContentWrapper>

			<Services>
				{services.map((service) => (
					<Service as="div" id={service.id} key={service.key}>
						<StyledContainer>
							<ServiceImageWrapper>
								<Image
									alt={service.image.alt}
									height={service.image.height}
									priority={service.key === 0}
									quality={100}
									src={service.image.src}
									width={service.image.width}
								/>
							</ServiceImageWrapper>
							<ServiceTextContent>
								<Subtitle1>{service.title}</Subtitle1>
								<ServiceDetailsWrapper>
									{service.details.map((serviceDetails) => {
										const ServiceIcon = getReactIcon(serviceDetails.icon);
										return (
											<ServiceDetails key={serviceDetails.key}>
												<ServiceDetailsTitle>
													<ServiceIcon className="service-icon" />
													<Subtitle2>{serviceDetails.title}</Subtitle2>
												</ServiceDetailsTitle>
												<ul>
													{serviceDetails.description.map((description) => (
														<ServiceDetailsDescriptionListItem key={description.key}>
															<TiInputChecked size={22} />
															<PRegular>{description.label}</PRegular>
														</ServiceDetailsDescriptionListItem>
													))}
												</ul>
											</ServiceDetails>
										);
									})}
								</ServiceDetailsWrapper>
								<CtaButtonWrapper>
									<CtaButton href={service.ctaButton.href}>
										<span>{service.ctaButton.label}</span>
										<FaArrowRight size={14} />
									</CtaButton>
								</CtaButtonWrapper>
							</ServiceTextContent>
						</StyledContainer>
					</Service>
				))}
			</Services>
		</Section>
	);
}

export default ServicesSection;
