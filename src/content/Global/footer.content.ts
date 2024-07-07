/* eslint-disable perfectionist/sort-objects */
import Constants from "../../enums/constants";
import Routes from "../../enums/routes";

export const footerHr = {
	logo: {
		alt: "Klima Merks logo",
		height: 36,
		src: "/images/global/logo.svg",
		width: 150
	},
	companyMission:
		"Pružamo vrhunsku uslugu održavanja Vaillant opreme s naglaskom na kvalitetu, pouzdanost i zadovoljstvo klijenata.",
	socialMediaItems: [
		{
			href: Constants.INSTAGRAM_URL,
			icon: "FaInstagram",
			key: 0
		},
		{
			href: Constants.GOOGLE_URL,
			icon: "FaGoogle",
			key: 1
		}
	],
	navigationCategoryTitle: "Navigacija",
	ourServicesCategory: {
		title: "Naše usluge",
		ourServices: [
			{
				key: 0,
				href: Routes.SERVICES_SERVICE_AND_REPAIR,
				label: "Servisi i popravci"
			},
			{
				key: 1,
				href: Routes.SERVICES_DESIGN_AND_INSTALLATION,
				label: "Projektiranje i montaža"
			},
			{
				key: 2,
				href: Routes.SERVICES_CONSULTING,
				label: "Savjetovanje"
			}
		]
	},
	contactCategory: {
		title: "Kontakt",
		contact: [
			{
				key: 0,
				label: "Klima - Merks d.o.o."
			},
			{
				key: 1,
				label: "Borik 60,"
			},
			{
				key: 2,
				label: "52100 Pula"
			},
			{
				key: 3,
				label: "Hrvatska"
			}
		]
	},
	copyrightMessage: `© ${new Date().getFullYear()} Klima - Merks d.o.o. | Sva prava pridržana.`
};

export const footerEn = {
	logo: {
		alt: "Klima Merks logo",
		height: 36,
		src: "/images/global/logo.svg",
		width: 150
	},
	companyMission:
		"We provide top-quality maintenance services for Vaillant equipment, emphasizing reliability, quality, and customer satisfaction.",
	socialMediaItems: [
		{
			href: Constants.INSTAGRAM_URL,
			icon: "FaInstagram",
			key: 0
		},
		{
			href: Constants.GOOGLE_URL,
			icon: "FaGoogle",
			key: 1
		}
	],
	navigationCategoryTitle: "Navigation",
	ourServicesCategory: {
		title: "Our Services",
		ourServices: [
			{
				key: 0,
				href: Routes.SERVICES_SERVICE_AND_REPAIR,
				label: "Services and Repairs"
			},
			{
				key: 1,
				href: Routes.SERVICES_DESIGN_AND_INSTALLATION,
				label: "Design and Installation"
			},
			{
				key: 2,
				href: Routes.SERVICES_CONSULTING,
				label: "Consulting"
			}
		]
	},
	contactCategory: {
		title: "Contact",
		contact: [
			{
				key: 0,
				label: "Klima - Merks LCC"
			},
			{
				key: 1,
				label: "Borik 60,"
			},
			{
				key: 2,
				label: "52100 Pula"
			},
			{
				key: 3,
				label: "Croatia"
			}
		]
	},
	copyrightMessage: `© ${new Date().getFullYear()} Klima - Merks LCC | All rights reserved.`
};

export const footerIt = {
	logo: {
		alt: "Logo Klima Merks",
		height: 36,
		src: "/images/global/logo.svg",
		width: 150
	},
	companyMission:
		"Offriamo servizi di manutenzione di alta qualità per l'attrezzatura Vaillant, con enfasi su affidabilità, qualità e soddisfazione del cliente.",
	socialMediaItems: [
		{
			href: Constants.INSTAGRAM_URL,
			icon: "FaInstagram",
			key: 0
		},
		{
			href: Constants.GOOGLE_URL,
			icon: "FaGoogle",
			key: 1
		}
	],
	navigationCategoryTitle: "Navigazione",
	ourServicesCategory: {
		title: "I Nostri Serviz",
		ourServices: [
			{
				key: 0,
				href: Routes.SERVICES_SERVICE_AND_REPAIR,
				label: "Servizi e Riparazioni"
			},
			{
				key: 1,
				href: Routes.SERVICES_DESIGN_AND_INSTALLATION,
				label: "Progettazione e Installazione"
			},
			{
				key: 2,
				href: Routes.SERVICES_CONSULTING,
				label: "Consulenza"
			}
		]
	},
	contactCategory: {
		title: "Contact",
		contact: [
			{
				key: 0,
				label: "Klima - Merks S.r.l."
			},
			{
				key: 1,
				label: "Borik 60,"
			},
			{
				key: 2,
				label: "52100 Pula"
			},
			{
				key: 3,
				label: "Croazia"
			}
		]
	},
	copyrightMessage: `© ${new Date().getFullYear()} Klima - Merks S.r.l. | Tutti i diritti riservati.`
};
