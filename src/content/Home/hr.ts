/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

import Routes from "../../enums/routes";
import { IHomeContentTypes } from "../types";

const content: IHomeContentTypes = {
	metadata: {
		description:
			"Otkrijte vrhunska rješenja za grijanje i hlađenje s Klima Merksom. Kao ovlašteni partneri i serviseri Vaillanta od 1990. godine, nudimo usluge ugradnje i održavanja prilagođene vašim potrebama.",
		keywords: "Klima Merks, grijanje, hlađenje, partneri Vaillanta, ugradnja, održavanje, HVAC rješenja",
		title: "Klima Merks | Ovlašteni Vaillant partner",
		url: Routes.HOME
	},

	homepageBannerContent: {
		bannerImageAltText: "Vaillant dizalica topline montirana u dvorištu kuće.",
		mainHeading: "Klima Merks",
		subHeading: "- Ovlašteni <span>Vaillant</span> servis -",
		introText:
			"Od 1990., firma KLIMA - MERKS d.o.o. je vaš pouzdan izbor za vrhunsku klimatizaciju i grijanje. S ponosom pružamo usluge održavanja Vaillant opreme, s fokusom na kvalitetu i zadovoljstvo naših klijenata. Otkrijte zašto smo preferirani partner za sve vaše potrebe u klimatizaciji i grijanju. Budite dio naše priče o uspjehu.",
		ctaButtonText: "Kontaktiraj nas"
	},

	logoCloudsContent: {
		heading: "<span>Vaillant Grupa:</span> Pouzdane inovacije u svim područjima grijanja i hlađenja",
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
		introText: "Sve što Vam je potrebno",
		heading: "Ovlašteni servis za Vaillant uređaje",
		subHeading:
			"Poslujemo odgovorno, precizno i efikasno. Dugogodišnje iskustvo i mnogobrojni zadovoljni klijenti garancija su kvalitete naših usluga.",
		imageAltText: "Montaža Vaillantove dizalice topline od strane ovlaštenog Vaillant servisera",
		features: [
			{
				key: 0,
				icon: "FaToolbox",
				text:
					"<span>Kvalitetno održavanje. </span>Naš tim stručnjaka pruža visokokvalitetno održavanje svih Vaillant uređaja, uključujući klimatizacijske sustave, ventilaciju, grijanje, plinske bojlere i dizalice topline. Jamčimo optimalan rad vaših uređaja."
			},
			{
				key: 1,
				icon: "FaTools",
				text:
					"<span>Brza intervencija. </span>Naša lokalna dostupnost u Puli i cijeloj Istri omogućava nam brzu reakciju na vaše zahtjeve. Naši tehničari stižu na lokaciju u najkraćem mogućem roku kako bi vam pružili potrebnu pomoć."
			},
			{
				key: 2,
				icon: "MdVerified",
				text:
					"<span>Pouzdanost i točnost. </span>Poštujemo dogovorene rokove i uvijek završavamo radove na vrijeme. Naša pedantnost i odgovornost prema klijentima jamče visoku kvalitetu izvedbe i vaše zadovoljstvo."
			},
			{
				key: 3,
				icon: "MdHandshake",
				text:
					"<span>Zadovoljstvo klijenata. </span>Naš uspjeh temelji se na povjerenju i zadovoljstvu naših klijenata. Pridružite se mnogobrojnim zadovoljnim klijentima i uvjerite se sami u našu stručnost i kvalitetu."
			}
		]
	},

	ourServicesContent: {
		heading: "Naše Usluge",
		services: [
			{
				key: 0,
				title: "Servisi i popravci",
				description:
					"Da biste osigurali optimalan rad vašeg uređaja, potrebni su redoviti servisi i pravovremeni popravci. Naša stručnost i iskustvo jamče sigurnost i dugovječnost vaših uređaja.",
				details: ["- Redovito održavanje", "- Brzi i pouzdani popravci", "- Upotreba originalnih dijelova"],
				image: {
					src: "/images/homepage/service-and-repair.jpg",
					alt: "Servis Vaillant plinskog bojlera"
				},
				icon: "FaTools",
				serviceButtons: [
					{
						key: 0,
						text: "Cjenik",
						href: Routes.PRICE_LIST
					},
					{
						key: 1,
						text: "Saznajte više",
						href: Routes.SERVICES
					}
				]
			},
			{
				key: 1,
				title: "Projektiranje i montaža",
				description:
					"Tražite moderno, sigurno i ekološki prihvatljivo rješenje za grijanje ili hlađenje? Nudimo vam cjelovite sustave prilagođene vašim potrebama, koristeći najnoviju tehnologiju.",
				details: ["- Personalizirani pristup", "- Najnovije tehnološke inovacije", "- Ekološki osviještene opcije"],
				image: {
					src: "/images/homepage/hvac-project-3d.jpg",
					alt: "3D projekt HVAC sistema"
				},
				icon: "FaGear",
				serviceButtons: [
					{
						key: 0,
						text: "Cjenik",
						href: Routes.PRICE_LIST
					},
					{
						key: 1,
						text: "Saznajte više",
						href: Routes.SERVICES
					}
				]
			},
			{
				key: 2,
				title: "Savjetovanje",
				description:
					"Potrebna vam je pomoć pri odabiru, korištenju ili popravku uređaja? Naši stručnjaci su vam na raspolaganju za sve vrste savjeta i podrške. Nemojte se ustručavati kontaktirati nas.",
				details: ["- Stručne konzultacije", "- Prilagođena rješenja", "- Podrška u svim fazama"],
				image: {
					src: "/images/homepage/consulting.jpg",
					alt: "Konzultacije"
				},
				icon: "BiSupport",
				serviceButtons: [
					{
						key: 0,
						text: "Cjenik",
						href: Routes.PRICE_LIST
					},
					{
						key: 1,
						text: "Saznajte više",
						href: Routes.SERVICES
					}
				]
			}
		]
	}
};

export default content;
