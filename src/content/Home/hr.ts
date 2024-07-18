/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

import Routes from "../../enums/routes";
import { colors } from "../../global.styles";
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
						href: Routes.PRICE_LIST,
						ariaLabel: "Cjenik servisi i popravci"
					},
					{
						key: 1,
						text: "Saznajte više",
						href: Routes.SERVICES_SERVICE_AND_REPAIR,
						ariaLabel: "Servisi i popravci"
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
						href: Routes.PRICE_LIST,
						ariaLabel: "Cjenik projektiranje i montaža"
					},
					{
						key: 1,
						text: "Saznajte više",
						href: Routes.SERVICES_DESIGN_AND_INSTALLATION,
						ariaLabel: "Projektiranje i montaža"
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
						href: Routes.PRICE_LIST,
						ariaLabel: "Cjenik savjetovanje"
					},
					{
						key: 1,
						text: "Saznajte više",
						href: Routes.SERVICES_CONSULTING,
						ariaLabel: "Savjetovanje"
					}
				]
			}
		]
	},

	productsShowcaseContent: {
		heading: "Zaštite svoj dom s <span>Vaillantom</span>",
		subHeading:
			"Kao vodeći pružatelj održavanja opreme Vaillant, Klima Merks osigurava da vaš dom ostane udoban i učinkovit. Naše stručne usluge održavanja Vaillantovih uređaja jamče optimalnu izvedbu i pouzdanost.",
		products: [
			{
				key: 0,
				productImage: {
					alt: "Vaillantov plinski bojler",
					src: "/images/homepage/gas-boiler.jpg"
				},
				productTitle: "Plinski bojleri",
				productDescription:
					"Bilo da se radi o jednostavnoj zamjeni ili projektu nove gradnje, naši plinski uređaji kompaktno su 'sve u jednom' rješenje s niskim investicijskim troškovima i kratkim razdobljima amortizacije. Tisuće vlasnika kuća vjeruju našoj paleti plinskih bojlera za grijanje domova, na siguran i učinkovit način. Saznajte zašto i pridružite im se danas. U tvrtki Klima Merks ponosni smo što nudimo niz rješenja za plinske bojlere opremljene širokim rasponom učinkovitih tehnologija koje odgovaraju svakom životnom prostoru, sa ili bez integriranog spremnika za toplu vodu. Svaki naš bojler nudi najvišu kvalitetu, pouzdanost i performanse kako bi omogućio vrhunsku udobnost vašeg doma.",
				reversedOrder: false
			},
			{
				key: 1,
				productImage: {
					alt: "Vaillantova dizalica topline",
					src: "/images/homepage/heat-pump.jpg"
				},
				productTitle: "Dizalice topline",
				productDescription:
					"Odabirom Vaillant dizalica topline postajete energetski neovisniji. Dizalice topline relativno su nov, ali iznimno učinkovit proizvod na tržištu, a namijenjene su grijanju, hlađenju prostora i pripremi tople vode. Za svoj rad koriste beskonačno raspoložive besplatne obnovljive izvore energije – toplinsku energiju iz zraka. Kao takve, izvrsno su ulaganje koje će se ubrzo isplatiti i osigurati da se u svojem prostoru osjećate ugodno i 'kao doma'.",
				reversedOrder: true
			},
			{
				key: 2,
				productImage: {
					alt: "Vaillantov klima uređaj",
					src: "/images/homepage/ac-device.jpg"
				},
				productTitle: "Klima uređaji",
				productDescription:
					"Suvremeno cjelovito rješenje za ugodno hlađenje i grijanje tijekom cijele godine. Uobičajeni su na područjima gdje su ljeta posebno vruća, a sada se klima uređaji sve više ugrađuju i u područjima s blažom klimom. Zahvaljujući najnovijoj tehnologiji, klima uređaji ne samo da hlade nego i griju i omogućuju cirkulaciju zraka. Uživajte u maksimalnoj udobnost koju Vam pružaju Vaillant klima uređaji, ne samo ljeti, već tijekom cijele godine!",
				reversedOrder: false
			}
		]
	},

	ourStoryByNumbersContent: {
		heading: "Priča u brojevima",
		introText: "Upoznajte našu povijest kroz brojeve koji govore o našim uspjesima i postignućima.",
		statsCards: [
			{
				key: 0,
				cardHeading: "Godina povjerenja",
				cardText: "S ponosom održavamo Vaillant opremu već više od tri desetljeća.",
				cardCounterNumber: 34,
				cardBackgroundColor: colors.grayDarker,
				cardMaxWidth: "44.8rem"
			},
			{
				key: 1,
				cardHeading: "Zadovoljnih klijenata",
				cardText:
					"Naše dugogodišnje iskustvo i predanost kvaliteti osigurali su nam povjerenje mnogih zadovoljnih klijenata. Svaki klijent za nas je važan, a njihovo zadovoljstvo je najbolji pokazatelj našeg rada.",
				cardCounterNumber: 4000,
				cardBackgroundColor: colors.darkSection,
				cardMaxWidth: "54rem",
				cardClassName: "light-text"
			},
			{
				key: 2,
				cardHeading: "Uspješnih projekata",
				cardText:
					"S našim uspješno završenim projektima, naša predanost i stručnost osigurali su kvalitetne rezultate i zadovoljstvo klijenata. Svaki projekt je prilika za rast i unapređenje naših usluga.",
				cardCounterNumber: 1000,
				cardBackgroundColor: colors.primaryDarker,
				cardMaxWidth: "50rem",
				cardClassName: "light-text"
			}
		]
	}
};

export default content;
