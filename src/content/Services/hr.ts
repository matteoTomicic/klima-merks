/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

import Routes from "../../enums/routes";
import { IServicesContentTypes } from "../types";

const content: IServicesContentTypes = {
	metadata: {
		description:
			"Saznajte više o našim vrhunskim uslugama grijanja i hlađenja. Klima Merks nudi ugradnju, održavanje i popravak HVAC sustava, prilagođene vašim potrebama.",
		keywords: "Klima Merks usluge, grijanje, hlađenje, ugradnja, održavanje, popravak, HVAC sustavi",
		title: "Klima Merks | Usluge",
		url: Routes.SERVICES
	},

	servicesSection: {
		heading: "Profesionalne usluge klimatizacije i grijanja - Vaša udobnost je naš prioritet",
		subtitle:
			"Osiguravamo vašu udobnost kroz najnovija rješenja. Naša stručnost i posvećenost kvaliteti jamče dugoročnu pouzdanost vaših sustava klimatizacije i grijanja. Pružamo sveobuhvatne usluge koje će zadovoljiti sve vaše potrebe.",
		services: [
			{
				key: 0,
				id: "services-and-repairs",
				title: "Servisi i popravci",
				details: [
					{
						key: 0,
						title: "Redovito održavanje",
						description: [
							{
								key: 0,
								label:
									"Osiguravamo redovito održavanje vaših uređaja kako bismo maksimalno produžili njihov vijek trajanja i osigurali njihov optimalan rad."
							},
							{
								key: 1,
								label: "Periodičnim servisima održavamo performanse vaših sustava na najvišoj razini."
							},
							{
								key: 2,
								label: "Pružamo preventivne mjere koje sprječavaju potencijalne kvarove i smanjuju troškove popravaka."
							}
						],
						icon: "BiCog"
					},
					{
						key: 1,
						title: "Brzi i pouzdani popravci",
						description: [
							{
								key: 0,
								label:
									"Naši stručnjaci brzo reagiraju na sve vaše servisne pozive kako bismo što prije vratili funkcionalnost vaših uređaja."
							},
							{
								key: 1,
								label: "Koristimo visokokvalitetne dijelove i modernu opremu za brze i efikasne popravke."
							},
							{
								key: 2,
								label: "Jamčimo pouzdanost naših usluga kako biste se mogli osloniti na nas u svakoj situaciji."
							}
						],
						icon: "BiWrench"
					},
					{
						key: 2,
						title: "Upotreba originalnih dijelova",
						description: [
							{
								key: 0,
								label:
									"Koristimo samo originalne dijelove prilikom popravaka kako bismo osigurali dugoročnu pouzdanost vaših uređaja."
							},
							{
								key: 1,
								label: "Originalni dijelovi jamče kompatibilnost i optimalne performanse vašeg sustava."
							}
						],
						icon: "GiGears"
					}
				],
				ctaButton: {
					href: Routes.PRICE_LIST,
					label: "Cjenik"
				},
				image: {
					src: "/images/services/services-and-repairs.jpg",
					alt: "Serviseri Vaillant u akciji, odlaze na servisiranje uređaja",
					width: 625,
					height: 352
				}
			},
			{
				key: 1,
				id: "design-and-installation",
				title: "Projektiranje i montaža",
				details: [
					{
						key: 0,
						title: "Personalizirani pristup",
						description: [
							{
								key: 0,
								label:
									"Svaki projekt projektiramo prema vašim specifičnim zahtjevima i uvjetima prostora kako bismo osigurali idealno rješenje za vaš dom ili poslovni prostor."
							},
							{
								key: 1,
								label: "Naši stručnjaci pružaju personalizirane savjete i preporuke kako bi se postigli najbolji rezultati."
							}
						],
						icon: "BiUserCircle"
					},
					{
						key: 1,
						title: "Najnovije tehnološke inovacije",
						description: [
							{
								key: 0,
								label:
									"Koristimo najnoviju tehnologiju u projektiranju i montaži sustava za grijanje i hlađenje kako bismo osigurali efikasnost i učinkovitost."
							},
							{
								key: 1,
								label:
									"Integriramo inovativne sustave koji omogućuju optimalnu kontrolu temperature uz minimalnu potrošnju energije."
							}
						],
						icon: "GiTechnoHeart"
					},
					{
						key: 2,
						title: "Ekološki osviještene opcije",
						description: [
							{
								key: 0,
								label:
									"Ponujemo ekološki prihvatljiva rješenja koja smanjuju ekološki otisak vašeg sustava za grijanje ili hlađenje."
							},
							{
								key: 1,
								label: "Naši sustavi su dizajnirani kako bi minimizirali potrošnju energije i pridonijeli očuvanju okoliša."
							}
						],
						icon: "GiEcology"
					}
				],
				ctaButton: {
					href: Routes.PRICE_LIST,
					label: "Cjenik"
				},
				image: {
					src: "/images/services/design-and-installation.jpg",
					alt: "Inženjeri Vaillanta pri izradi projekta",
					width: 625,
					height: 352
				}
			},
			{
				key: 2,
				id: "consulting",
				title: "Savjetovanje",
				details: [
					{
						key: 0,
						title: "Stručne konzultacije",
						description: [
							{
								key: 0,
								label:
									"Naši stručnjaci su vam na raspolaganju za sve vrste konzultacija vezanih uz odabir, korištenje ili popravak vaših uređaja."
							},
							{
								key: 1,
								label:
									"Pružamo jasna objašnjenja i preporuke kako biste donijeli informirane odluke o vašim sustavima za grijanje i hlađenje."
							}
						],
						icon: "BiChat"
					},
					{
						key: 1,
						title: "Prilagođena rješenja",
						description: [
							{
								key: 0,
								label: "Nudimo prilagođena rješenja koja odgovaraju vašim specifičnim potrebama i uvjetima."
							},
							{
								key: 1,
								label:
									"Bilo da se radi o novom projektu ili unapređenju postojećeg sustava, prilagođavamo naše usluge kako bismo zadovoljili vaše zahtjeve."
							}
						],
						icon: "BiBuildings"
					},
					{
						key: 2,
						title: "Podrška u svim fazama",
						description: [
							{
								key: 0,
								label:
									"Pružamo podršku u svim fazama projekta, od inicijalne konzultacije do implementacije i kasnije održavanja."
							},
							{
								key: 1,
								label: "Naš cilj je osigurati da vaši sustavi za grijanje i hlađenje uvijek rade učinkovito i bez problema."
							}
						],
						icon: "FiLifeBuoy"
					}
				],
				ctaButton: {
					href: Routes.PRICE_LIST,
					label: "Cjenik"
				},
				image: {
					src: "/images/services/consulting.jpg",
					alt: "Zaposlenik Vaillanta u konzultaciji preko telefona",
					width: 625,
					height: 352
				}
			}
		]
	}
};

export default content;
