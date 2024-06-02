/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

import Routes from "../../enums/routes";
import { IHomeContentTypes } from "../types";

const content: IHomeContentTypes = {
	metadata: {
		description:
			"Discover top-quality heating and cooling solutions with Klima Merks. As authorized Vaillant partners and service providers since 1990, we offer installation and maintenance services tailored to your needs.",
		keywords: "Klima Merks, heating, cooling, Vaillant partners, installation, maintenance, HVAC solutions",
		title: "Klima Merks | Authorized Vaillant partner",
		url: Routes.HOME
	},
	homepageBannerContent: {
		bannerImageAltText: "Vaillant heat pump installed in the backyard of a house.",
		mainHeading: "Klima Merks",
		subHeading: "- Authorized <span>Vaillant</span> service -",
		introText:
			"Since 1990, the company KLIMA - MERKS d.o.o. has been your reliable choice for top-notch air conditioning and heating. We proudly offer maintenance services for Vaillant equipment, with a focus on quality and customer satisfaction. Discover why we are the preferred partner for all your air conditioning and heating needs. Be part of our success story.",
		ctaButtonText: "Contact Us"
	},
	logoCloudsContent: {
		heading: "Powered by <span>Vaillant Group:</span> Trusted Innovation in Climate Control Solutions",
		logos: [
			{
				key: 0,
				src: "/images/homepage/vaillant-logo.png",
				alt: "Vaillant logo"
			},
			{
				key: 1,
				src: "/images/homepage/awb-logo.png",
				alt: "AWB logo"
			},
			{
				key: 2,
				src: "/images/homepage/demir-dokum-logo.png",
				alt: "Demir Dokum logo"
			},
			{
				key: 3,
				src: "/images/homepage/glow-worm-logo.png",
				alt: "Glow Worm logo"
			},
			{
				key: 4,
				src: "/images/homepage/protherm-logo.png",
				alt: "Protherm logo"
			},
			{
				key: 5,
				src: "/images/homepage/saunier-duval-logo.png",
				alt: "Saunier Duval logo"
			}
		]
	},
	featuresContent: {
		introText: "Everything You Need",
		heading: "Authorized Service for Vaillant Devices",
		subHeading:
			"We operate responsibly, precisely, and efficiently. Years of experience and numerous satisfied clients guarantee the quality of our services.",
		imageAltText: "Installation of Vaillant heat pump by authorized Vaillant service technician",
		features: [
			{
				key: 0,
				icon: "FaToolbox",
				text:
					"<span>Quality maintenance. </span>Our team of experts provides high-quality maintenance for all Vaillant devices, including air conditioning systems, ventilation, heating, gas boilers, and heat pumps. We guarantee optimal performance of your devices."
			},
			{
				key: 1,
				icon: "FaTools",
				text:
					"<span>Quick intervention. </span>Our local presence in Pula and throughout Istria enables us to respond quickly to your requests. Our technicians arrive at the location as soon as possible to provide you with the necessary assistance."
			},
			{
				key: 2,
				icon: "MdVerified",
				text:
					"<span>Reliability and accuracy. </span>We respect agreed deadlines and always finish projects on time. Our meticulousness and responsibility towards clients guarantee high quality performance and your satisfaction."
			},
			{
				key: 3,
				icon: "MdHandshake",
				text:
					"<span>Client satisfaction. </span>Our success is based on the trust and satisfaction of our clients. Join the numerous satisfied clients and experience for yourself our expertise and quality."
			}
		]
	},
	ourServicesContent: {
		heading: "Our Services",
		services: [
			{
				key: 0,
				title: "Services and Repairs",
				description:
					"To ensure the optimal operation of your device, regular services and timely repairs are required. Our expertise and experience guarantee the safety and longevity of your devices.",
				details: ["- Regular maintenance", "- Fast and reliable repairs", "- Use of original parts"],
				image: {
					src: "/images/homepage/service-and-repair.jpg",
					alt: "Vaillant gas boiler service"
				},
				icon: "FaTools",
				serviceButtons: [
					{
						key: 0,
						text: "Price List",
						href: Routes.PRICE_LIST
					},
					{
						key: 1,
						text: "Learn More",
						href: Routes.SERVICES
					}
				]
			},
			{
				key: 1,
				title: "Design and Installation",
				description:
					"Looking for a modern, safe, and environmentally friendly heating or cooling solution? We offer complete systems tailored to your needs, using the latest technology.",
				details: ["- Personalized approach", "- Latest technological innovations", "- Environmentally conscious options"],
				image: {
					src: "/images/homepage/hvac-project-3d.jpg",
					alt: "3D HVAC system project"
				},
				icon: "FaGear",
				serviceButtons: [
					{
						key: 0,
						text: "Price List",
						href: Routes.PRICE_LIST
					},
					{
						key: 1,
						text: "Learn More",
						href: Routes.SERVICES
					}
				]
			},
			{
				key: 2,
				title: "Consulting",
				description:
					"Do you need help with the selection, use, or repair of a device? Our experts are available for all kinds of advice and support. Don't hesitate to contact us.",
				details: ["- Expert consultations", "- Customized solutions", "- Support at all stages"],
				image: {
					src: "/images/homepage/consulting.jpg",
					alt: "Consultations"
				},
				icon: "BiSupport",
				serviceButtons: [
					{
						key: 0,
						text: "Price List",
						href: Routes.PRICE_LIST
					},
					{
						key: 1,
						text: "Learn More",
						href: Routes.SERVICES
					}
				]
			}
		]
	}
};

export default content;
