/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

import Constants from "../../enums/constants";
import Routes from "../../enums/routes";
import { IContactContentTypes } from "../types";

const content: IContactContentTypes = {
	metadata: {
		description:
			"Contact Klima Merks for all inquiries related to heating and cooling. Our expert team is available for consultation, installation, and maintenance of HVAC systems.",
		keywords: "Klima Merks contact, inquiries, heating, cooling, HVAC systems, support",
		title: "Klima Merks | Contact",
		url: Routes.CONTACT
	},

	contactUs: {
		image: {
			src: "/images/contact/contact-us.jpg",
			alt: "",
			width: 1299,
			height: 1075
		},
		heading: "Contact Us",
		introText:
			"Klima - Merks Ltd. has been successfully operating since 1990, specializing in the maintenance of Vaillant equipment. We offer maintenance services for air conditioning systems, ventilation, heating, gas boilers, heat pumps, and other Vaillant devices. With many years of experience and numerous satisfied clients, our team operates responsibly, precisely, meticulously, and efficiently, respecting agreed deadlines.",
		contactInfos: [
			{
				key: 0,
				labelRow1: "Borik 60",
				labelRow2: "52100 Pula, Croatia",
				icon: "PiBuildings"
			},
			{
				key: 1,
				labelRow1: Constants.PHONE_NUMBER,
				link: {
					href: "tel:00385998131891"
				},
				icon: "PiPhone"
			},
			{
				key: 2,
				labelRow1: Constants.MAIL,
				link: {
					href: `mailto:${Constants.MAIL}`
				},
				icon: "PiEnvelope"
			}
		],
		googleMapSrc:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.109168637283!2d13.850816113080192!3d44.9007749709497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd29b1af017fd%3A0x1b12ffebafef47a!2sKlima%20-%20merks%20d.o.o.!5e0!3m2!1sen!2sus!4v1721148222145!5m2!1sen!2sus"
	}
};

export default content;
