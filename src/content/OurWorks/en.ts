/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

import Routes from "../../enums/routes";
import { IOurWorksContentTypes } from "../types";

const content: IOurWorksContentTypes = {
	metadata: {
		description:
			"Explore our previous projects and works in heating and cooling services. Klima Merks proudly showcases its achievements in HVAC system installation, maintenance, and repair.",
		keywords: "Klima Merks works, projects, heating, cooling, HVAC systems, portfolio",
		title: "Klima Merks | Our Works",
		url: Routes.OUR_WORKS
	},

	aboutUs: {
		heading: "About Us and Our Works",
		aboutUsText:
			"Klima - Merks Ltd. has been operating very successfully since 1990 as a family business. We specialize in the maintenance of Vaillant equipment, and our activities include maintenance services for Vaillant air conditioning systems, ventilation, heating, gas boilers, heat pumps, and other Vaillant devices. Through many years of work, we have gained extensive experience and numerous satisfied clients who always gladly turn to us for our services.",
		ourServicesText:
			"We operate responsibly, precisely, meticulously, and efficiently. Our works are carried out on time and without delays, respecting the agreed deadlines. The headquarters of our company is in Pula, and we operate in the area of Istria. A large number of satisfied clients is the best guarantee for the quality of our services.",
		ourProjectsText:
			"On this page, you can view some of our reference projects and works. Each project showcases our commitment to quality, expertise, and client satisfaction. Whether it is maintenance, repairs, or installations, our experienced teams provide top-notch service. Be one of our satisfied clients – contact us and see for yourself our quality and expertise.",
		bannerImage: {
			src: "/images/our-works/about-us-banner.jpg",
			width: 600,
			height: 399,
			alt: "Vaillant technician doing his job"
		}
	},

	ourWorksSection: {
		heading: "Here you can view some of our works...",
		text:
			"Our team of experts is dedicated to providing top-notch quality in every project. Whether it's installing new systems, maintaining existing equipment, or making repairs, our works showcase our expertise and attention to detail. Browse through the gallery of our successfully completed projects and see why our clients are always satisfied. Every project we undertake reflects our commitment to excellence and years of experience in the industry.",
		ourWorksGallery: {
			icon: "FaCircleInfo",
			infoText:
				"We currently do not have a gallery of our works available on the website as we are working on improving and updating our portfolio to provide you with the best insight into our projects. Please bear with us while we prepare new and exciting examples of our successfully completed projects. In the meantime, feel free to contact us for more information about our services and how we can assist you.",
			ctaButton: {
				label: "Contact Us",
				href: Routes.CONTACT
			}
		}
	}
};

export default content;
