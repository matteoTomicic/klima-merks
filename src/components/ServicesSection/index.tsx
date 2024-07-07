import Image, { ImageProps } from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { TiInputChecked } from "react-icons/ti";
import styled from "styled-components";

import { colors, device, mixins } from "../../global.styles";
import getReactIcon from "../../helpers/getReactIcon.helper";
import { Container, H1, PRegular, Subtitle1, Subtitle2 } from "../../styles/shared.styles";
import Section from "../LayoutComponents/Section";
import SectionStyled from "../LayoutComponents/Section/styles";
import CtaButton from "../UI/CtaButton";

export const StyledContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(10)};
`;

export const TitleContentWrapper = styled(SectionStyled)`
	max-width: 88.5rem;
	margin: 0 auto;

	${Container} {
		display: flex;
		flex-direction: column;
		gap: ${mixins.spacing(4)};
	}

	${H1} {
		text-align: center;
		font-size: 2.4rem;
		line-height: 3.2rem;

		${device.up.LAPTOP} {
			font-size: 4rem;
			line-height: 5rem;
		}
	}

	${Subtitle2} {
		text-align: center;
		color: ${colors.text.disabled};
	}
`;

export const Services = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ServiceImageWrapper = styled.div`
	border-radius: 0.8rem;
	max-width: 62.5rem;

	img {
		${mixins.maskImage("bottom")};
		border-radius: 0.8rem;

		${device.up.TABLET} {
			${mixins.maskImage("left")};
		}
	}
`;

export const Service = styled(SectionStyled)`
	&:nth-child(odd) {
		background-color: ${colors.gray};
	}

	&:nth-child(even) {
		${ServiceImageWrapper} {
			margin-left: auto;

			img {
				${device.up.TABLET} {
					${mixins.maskImage("right")};
				}
			}
		}
	}
`;

export const ServiceTextContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(6)};

	${device.up.LAPTOP} {
		gap: ${mixins.spacing(10)};
	}
`;

export const ServiceDetailsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(8)};

	${device.up.LAPTOP} {
		flex-direction: row;
	}
`;

export const ServiceDetails = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${mixins.spacing(4)};
`;

export const ServiceDetailsTitle = styled.div`
	display: flex;
	align-items: center;
	gap: ${mixins.spacing(1)};

	.service-icon {
		width: clamp(2rem, 2.4vw, 2.4rem);
	}

	${Subtitle2} {
		font-weight: 600;
	}

	${device.up.LAPTOP} {
		gap: ${mixins.spacing(2)};
		align-items: flex-start;
	}
`;

export const ServiceDetailsDescriptionListItem = styled.li`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: ${mixins.spacing(2)};

	& + & {
		margin-top: ${mixins.spacing(3)};
	}

	p {
		flex: 1;
	}
`;

export const CtaButtonWrapper = styled.div`
	a {
		display: flex;
		gap: ${mixins.spacing(2)};
	}
`;

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
