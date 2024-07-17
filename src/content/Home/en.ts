/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

import Routes from "../../enums/routes";
import { colors } from "../../global.styles";
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
						href: Routes.SERVICES_SERVICE_AND_REPAIR
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
						href: Routes.SERVICES_DESIGN_AND_INSTALLATION
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
						href: Routes.SERVICES_CONSULTING
					}
				]
			}
		]
	},

	productsShowcaseContent: {
		heading: "Protect Your Home with <span>Vaillant</span>",
		subHeading:
			"As the leading provider of Vaillant equipment maintenance, Klima Merks ensures your home remains comfortable and efficient. Our expert Vaillant maintenance services guarantee optimal performance and reliability.",
		products: [
			{
				key: 0,
				productImage: {
					alt: "Vaillant gas boiler",
					src: "/images/homepage/gas-boiler.jpg"
				},
				productTitle: "Gas Boilers",
				productDescription:
					"Whether it's a simple replacement or a new construction project, our gas appliances are a compact 'all-in-one' solution with low investment costs and short payback periods. Thousands of homeowners trust our range of gas boilers to heat their homes safely and efficiently. Find out why and join them today. At Klima Merks, we are proud to offer a range of gas boiler solutions equipped with a wide range of efficient technologies to suit any living space, with or without an integrated hot water tank. Each of our boilers offers the highest quality, reliability, and performance to ensure your home's superior comfort.",
				reversedOrder: false
			},
			{
				key: 1,
				productImage: {
					alt: "Vaillant heat pump",
					src: "/images/homepage/heat-pump.jpg"
				},
				productTitle: "Heat Pumps",
				productDescription:
					"By choosing Vaillant heat pumps, you become more energy independent. Heat pumps are a relatively new but extremely efficient product on the market, designed for heating, cooling spaces, and preparing hot water. They operate using infinitely available free renewable energy sources – thermal energy from the air. As such, they are an excellent investment that will soon pay off and ensure you feel comfortable and 'at home' in your space.",
				reversedOrder: true
			},
			{
				key: 2,
				productImage: {
					alt: "Vaillant air conditioner",
					src: "/images/homepage/ac-device.jpg"
				},
				productTitle: "Air Conditioners",
				productDescription:
					"A modern comprehensive solution for comfortable cooling and heating all year round. They are common in areas where summers are particularly hot, and now air conditioners are increasingly being installed in areas with milder climates. Thanks to the latest technology, air conditioners not only cool but also heat and provide air circulation. Enjoy the maximum comfort that Vaillant air conditioners provide, not only in summer but throughout the year!",
				reversedOrder: false
			}
		]
	},

	ourStoryByNumbersContent: {
		heading: "Story by Numbers",
		introText: "Discover our history through numbers that speak about our successes and achievements.",
		statsCards: [
			{
				key: 0,
				cardHeading: "Years of Trust",
				cardText: "We have proudly maintained Vaillant equipment for over three decades.",
				cardCounterNumber: 34,
				cardBackgroundColor: colors.grayDarker,
				cardMaxWidth: "44.8rem"
			},
			{
				key: 1,
				cardHeading: "Satisfied Clients",
				cardText:
					"Our long-standing experience and commitment to quality have earned us the trust of many satisfied clients. Every client is important to us, and their satisfaction is the best indicator of our work.",
				cardCounterNumber: 4000,
				cardBackgroundColor: colors.darkSection,
				cardMaxWidth: "54rem",
				cardClassName: "light-text"
			},
			{
				key: 2,
				cardHeading: "Successful Projects",
				cardText:
					"With our successfully completed projects, our dedication and expertise have ensured quality results and client satisfaction. Every project is an opportunity for growth and improvement of our services.",
				cardCounterNumber: 1000,
				cardBackgroundColor: colors.primaryDarker,
				cardMaxWidth: "50rem",
				cardClassName: "light-text"
			}
		]
	}
};

export default content;
