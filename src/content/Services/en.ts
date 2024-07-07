/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

import Routes from "../../enums/routes";
import { IServicesContentTypes } from "../types";

const content: IServicesContentTypes = {
	metadata: {
		description:
			"Learn more about our premium heating and cooling services. Klima Merks offers installation, maintenance, and repair of HVAC systems, tailored to your needs.",
		keywords: "Klima Merks services, heating, cooling, installation, maintenance, repair, HVAC systems",
		title: "Klima Merks | Services",
		url: Routes.SERVICES
	},

	servicesSection: {
		heading: "Professional Air Conditioning and Heating Services - Your Comfort is Our Priority",
		subtitle:
			"We ensure your comfort through the latest solutions. Our expertise and commitment to quality guarantee the long-term reliability of your HVAC systems. We provide comprehensive services that will meet all your needs.",
		services: [
			{
				key: 0,
				id: "services-and-repairs",
				title: "Services and Repairs",
				details: [
					{
						key: 0,
						title: "Regular Maintenance",
						description: [
							{
								key: 0,
								label:
									"We ensure regular maintenance of your devices to maximize their lifespan and ensure optimal performance."
							},
							{
								key: 1,
								label: "Through periodic servicing, we maintain the performance of your systems at the highest level."
							},
							{
								key: 2,
								label: "We provide preventive measures that prevent potential breakdowns and reduce repair costs."
							}
						],
						icon: "BiCog"
					},
					{
						key: 1,
						title: "Fast and Reliable Repairs",
						description: [
							{
								key: 0,
								label:
									"Our experts respond quickly to all your service calls to restore the functionality of your devices as soon as possible."
							},
							{
								key: 1,
								label: "We use high-quality parts and modern equipment for fast and efficient repairs."
							},
							{
								key: 2,
								label: "We guarantee the reliability of our services so you can rely on us in any situation."
							}
						],
						icon: "BiWrench"
					},
					{
						key: 2,
						title: "Use of Original Parts",
						description: [
							{
								key: 0,
								label: "We use only original parts during repairs to ensure the long-term reliability of your devices."
							},
							{
								key: 1,
								label: "Original parts ensure compatibility and optimal performance of your system."
							}
						],
						icon: "GiGears"
					}
				],
				ctaButton: {
					href: Routes.PRICE_LIST,
					label: "Price List"
				},
				image: {
					src: "/images/services/services-and-repairs.jpg",
					alt: "Vaillant technicians in action, heading for service",
					width: 625,
					height: 352
				}
			},
			{
				key: 1,
				id: "design-and-installation",
				title: "Design and Installation",
				details: [
					{
						key: 0,
						title: "Personalized Approach",
						description: [
							{
								key: 0,
								label:
									"We design each project according to your specific requirements and spatial conditions to ensure the ideal solution for your home or business space."
							},
							{
								key: 1,
								label: "Our experts provide personalized advice and recommendations to achieve the best results."
							}
						],
						icon: "BiUserCircle"
					},
					{
						key: 1,
						title: "Latest Technological Innovations",
						description: [
							{
								key: 0,
								label:
									"We use the latest technology in designing and installing heating and cooling systems to ensure efficiency and effectiveness."
							},
							{
								key: 1,
								label:
									"We integrate innovative systems that enable optimal temperature control with minimal energy consumption."
							}
						],
						icon: "GiTechnoHeart"
					},
					{
						key: 2,
						title: "Environmentally Conscious Options",
						description: [
							{
								key: 0,
								label:
									"We offer environmentally friendly solutions that reduce the environmental footprint of your heating or cooling system."
							},
							{
								key: 1,
								label: "Our systems are designed to minimize energy consumption and contribute to environmental preservation."
							}
						],
						icon: "GiEcology"
					}
				],
				ctaButton: {
					href: Routes.PRICE_LIST,
					label: "Price List"
				},
				image: {
					src: "/images/services/design-and-installation.jpg",
					alt: "Vaillant engineers designing",
					width: 625,
					height: 352
				}
			},
			{
				key: 2,
				id: "consulting",
				title: "Consulting",
				details: [
					{
						key: 0,
						title: "Expert Consultations",
						description: [
							{
								key: 0,
								label:
									"Our experts are available to assist you with all types of consultations related to the selection, use, or repair of your devices."
							},
							{
								key: 1,
								label:
									"We provide clear explanations and recommendations to help you make informed decisions about your heating and cooling systems."
							}
						],
						icon: "BiChat"
					},
					{
						key: 1,
						title: "Custom Solutions",
						description: [
							{
								key: 0,
								label: "We offer custom solutions that meet your specific needs and conditions."
							},
							{
								key: 1,
								label:
									"Whether it's a new project or an enhancement of an existing system, we tailor our services to meet your requirements."
							}
						],
						icon: "BiBuildings"
					},
					{
						key: 2,
						title: "Support in All Phases",
						description: [
							{
								key: 0,
								label:
									"We provide support in all phases of the project, from initial consultation to implementation and ongoing maintenance."
							},
							{
								key: 1,
								label:
									"Our goal is to ensure that your heating and cooling systems always operate efficiently and without issues."
							}
						],
						icon: "FiLifeBuoy"
					}
				],
				ctaButton: {
					href: Routes.PRICE_LIST,
					label: "Price List"
				},
				image: {
					src: "/images/services/consulting.jpg",
					alt: "Vaillant employee with headphones consulting someone",
					width: 625,
					height: 352
				}
			}
		]
	}
};

export default content;
