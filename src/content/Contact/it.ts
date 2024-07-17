/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

import Constants from "../../enums/constants";
import Routes from "../../enums/routes";
import { IContactContentTypes } from "../types";

const content: IContactContentTypes = {
	metadata: {
		description:
			"Contatta Klima Merks per tutte le richieste relative al riscaldamento e al raffreddamento. Il nostro team di esperti è disponibile per consulenze, installazioni e manutenzione dei sistemi HVAC.",
		keywords: "Klima Merks contatto, richieste, riscaldamento, raffreddamento, sistemi HVAC, supporto",
		title: "Klima Merks | Contatto",
		url: Routes.CONTACT
	},

	contactUs: {
		image: {
			src: "/images/contact/contact-us.jpg",
			alt: "",
			width: 1299,
			height: 1075
		},
		heading: "Contattaci",
		introText:
			"Klima - Merks S.r.l. opera con successo dal 1990, specializzandosi nella manutenzione delle attrezzature Vaillant. Offriamo servizi di manutenzione per sistemi di climatizzazione, ventilazione, riscaldamento, caldaie a gas, pompe di calore e altri dispositivi Vaillant. Con molti anni di esperienza e numerosi clienti soddisfatti, il nostro team opera in modo responsabile, preciso, meticoloso ed efficiente, rispettando le scadenze concordate.",
		contactInfos: [
			{
				key: 0,
				labelRow1: "Borik 60",
				labelRow2: "52100 Pola, Croazia",
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
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.109168637283!2d13.850816113080192!3d44.9007749709497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477cd29b1af017fd%3A0x1b12ffebafef47a!2sKlima%20-%20merks%20d.o.o.!5e0!3m2!1sit!2it!4v1721148222145!5m2!1sit!2it"
	}
};

export default content;
