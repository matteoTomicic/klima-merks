/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

import Routes from "../../enums/routes";
import { IOurWorksContentTypes } from "../types";

const content: IOurWorksContentTypes = {
	metadata: {
		description:
			"Pregledajte naše prethodne projekte i radove u području grijanja i hlađenja. Klima Merks ponosno prikazuje svoje uspjehe u ugradnji, održavanju i popravcima HVAC sustava.",
		keywords: "Klima Merks radovi, projekti, grijanje, hlađenje, HVAC sustavi, reference",
		title: "Klima Merks | Naši Radovi",
		url: Routes.OUR_WORKS
	},

	aboutUs: {
		heading: "O nama i našim radovima",
		aboutUsText:
			"Poduzeće Klima - Merks d.o.o. veoma uspješno posluje još od 1990. godine kao obiteljska firma. Specijalizirali smo se u održavanju Vaillant opreme, a naša djelatnost obuhvaća usluge održavanja Vaillant klimatizacijskih sustava, ventilacije, grijanja, plinskih bojlera, toplinskih pumpi i ostalih Vaillant uređaja. Kroz dugogodišnji rad stekli smo ogromno iskustvo i mnogobrojne zadovoljne klijente koji nam se uvijek rado obraćaju za naše usluge.",
		ourServicesText:
			"Poslujemo odgovorno, precizno, pedantno i efikasno. Naši radovi se obavljaju na vrijeme i bez kašnjenja, poštivajući dogovorene rokove. Sjedište našeg poduzeća je u Puli, a djelujemo na području cijele Istre. Veliki broj zadovoljnih klijenata najbolja je garancija za kvalitetu naših usluga.",
		ourProjectsText:
			"Na ovoj stranici možete pregledati neke od naših referentnih projekata i radova. Svaki projekt prikazuje našu posvećenost kvaliteti, stručnosti i zadovoljstvu klijenata. Bilo da se radi o održavanju, popravcima ili instalacijama, naši iskusni timovi pružaju vrhunsku uslugu. Budite i Vi jedan od naših zadovoljnih klijenata – kontaktirajte nas i uvjerite se u našu kvalitetu i stručnost.",
		bannerImage: {
			src: "/images/our-works/about-us-banner.jpg",
			width: 600,
			height: 399,
			alt: "Vaillantov serviser obavlja svoj posao"
		}
	},

	ourWorksSection: {
		heading: "Ovdje možete pogledati neke od naših radova...",
		text:
			"Naš tim stručnjaka posvećen je pružanju vrhunske kvalitete u svakom projektu. Bilo da se radi o instalacijama novih sustava, održavanju postojećih uređaja ili popravcima, naši radovi prikazuju našu stručnost i posvećenost detaljima. Pogledajte galeriju naših uspješno završenih projekata i uvjerite se zašto su naši klijenti uvijek zadovoljni. Svaki projekt koji preuzmemo odražava našu predanost izvrsnosti i dugogodišnje iskustvo u industriji.",
		ourWorksGallery: {
			icon: "FaCircleInfo",
			infoText:
				"Trenutno nemamo galeriju naših radova dostupnu na web stranici jer radimo na poboljšanju i ažuriranju našeg portfelja kako bismo vam pružili što bolji uvid u naše projekte. Molimo vas za strpljenje dok pripremamo nove i uzbudljive primjere naših uspješno završenih projekata. U međuvremenu, slobodno nas kontaktirajte za više informacija o našim uslugama i kako vam možemo pomoći.",
			ctaButton: {
				label: "Kontaktirajte nas",
				href: Routes.CONTACT
			}
		}
	}
};

export default content;
