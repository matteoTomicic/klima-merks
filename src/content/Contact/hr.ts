/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

import Constants from "../../enums/constants";
import Routes from "../../enums/routes";
import { IContactContentTypes } from "../types";

const content: IContactContentTypes = {
	metadata: {
		description:
			"Kontaktirajte Klima Merks za sve upite vezane uz grijanje i hlađenje. Naš stručni tim vam stoji na raspolaganju za savjetovanje, instalaciju i održavanje HVAC sustava.",
		keywords: "Klima Merks kontakt, upiti, grijanje, hlađenje, HVAC sustavi, podrška",
		title: "Klima Merks | Kontakt",
		url: Routes.CONTACT
	},

	contactUs: {
		image: {
			src: "/images/contact/contact-us.webp",
			alt: "",
			width: 1299,
			height: 1075
		},
		heading: "Kontaktirajte nas",
		introText:
			"Klima - Merks d.o.o. uspješno posluje još od 1990. godine, specijalizirano za održavanje Vaillant opreme. Nudimo usluge održavanja klimatizacijskih sustava, ventilacije, grijanja, plinskih bojlera, tizalica topline i ostalih Vaillant uređaja. Dugogodišnjim iskustvom i mnogobrojnim zadovoljnim klijentima, naš tim djeluje odgovorno, precizno, pedantno i efikasno, poštujući dogovorene rokove.",
		contactInfos: [
			{
				key: 0,
				labelRow1: "Borik 60",
				labelRow2: "52100 Pula, Hrvatska",
				icon: "PiBuildings"
			},
			{
				key: 1,
				labelRow1: Constants.PHONE_NUMBER_BORIS,
				link: {
					href: Constants.PHONE_NUMBER_BORIS_HREF
				},
				icon: "PiPhone"
			},
			{
				key: 2,
				labelRow1: Constants.PHONE_NUMBER_LUKA,
				link: {
					href: Constants.PHONE_NUMBER_LUKA_HREF
				},
				icon: "PiPhone"
			},
			{
				key: 3,
				labelRow1: Constants.MAIL,
				link: {
					href: `mailto:${Constants.MAIL}`
				},
				icon: "PiEnvelope"
			}
		],
		googleMapSrc:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.109168637283!2d13.850816113080192!3d44.9007749709497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd29b1af017fd%3A0x1b12ffebafef47a!2sKlima%20-%20merks%20d.o.o.!5e0!3m2!1shr!2shr!4v1721148222145!5m2!1shr!2shr"
	}
};

export default content;
