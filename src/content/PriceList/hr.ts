/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

import Constants from "../../enums/constants";
import Routes from "../../enums/routes";
import { IPriceListContentTypes } from "../types";

const content: IPriceListContentTypes = {
	metadata: {
		description:
			"Saznajte više o našim konkurentnim cijenama za usluge grijanja i hlađenja. Klima Merks nudi povoljne cijene za ugradnju, održavanje i popravak HVAC sustava.",
		keywords: "Klima Merks cjenik, cijene, grijanje, hlađenje, ugradnja, održavanje, popravak, HVAC sustavi",
		title: "Klima Merks | Cjenik",
		url: Routes.PRICE_LIST
	},

	priceListBanner: {
		heading: "Cjenik",
		image: {
			src: "/images/price-list/banner.jpg",
			alt: "Dvorište sa vanjskom jedinicom dizalice topline"
		}
	},

	priceListSection: {
		title: "Cjenik servisa i najčešćih usluga",
		contactInfo: {
			text:
				"Poštovani korisnici, za narudžbu termina i usluga molimo Vas kontaktirajte nas pozivom na navedeni broj ili klikom na dugme ispod kako bi otišli na stranicu sa detaljima za kontakt.",
			ctaButton: {
				href: Routes.CONTACT,
				label: "Kontakt stranica"
			},
			contactNumberLink: {
				href: "tel: 00385998131891",
				label: Constants.PHONE_NUMBER
			}
		},
		prefixDisclaimer:
			"*Cijene vrijede za servise i usluge u osnovnoj zoni djelatnosti (Istarska županija (do 20 km udaljenosti od sjedišta))",
		priceListTable: {
			tableHeadColumns: [
				{
					key: 0,
					label: "#"
				},
				{
					key: 1,
					label: "Usluga"
				},
				{
					key: 2,
					label: "Cijena sa PDV-om"
				}
			],
			tableBodyRows: [
				{
					key: 0,
					serviceNumber: 1,
					serviceLabel: "Dolazak i utvrđivanje kvara",
					servicePrice: "€40.00"
				},
				{
					key: 1,
					serviceNumber: 2,
					serviceLabel: "Redovan godišnji servis kombi i cirko bojlera",
					servicePrice: "€90.00"
				},
				{
					key: 2,
					serviceNumber: 3,
					serviceLabel: "Redovan godišnji servis kondenzacijskog bojlera",
					servicePrice: "€100.00"
				},
				{
					key: 3,
					serviceNumber: 4,
					serviceLabel: "Servis kombi bojlera s čišćenjem od kamenca",
					servicePrice: "€120.00"
				},
				{
					key: 4,
					serviceNumber: 5,
					serviceLabel: "Kompletan servis VUI uređaja sa demontažom (od minimalno)",
					servicePrice: "€450.00"
				},
				{
					key: 5,
					serviceNumber: 6,
					serviceLabel: "Servis plinskog kondenzacijskog kotla VSC",
					servicePrice: "€140.00"
				},
				{
					key: 6,
					serviceNumber: 7,
					serviceLabel: "Servis plinskog kotla",
					servicePrice: "€90.00"
				},
				{
					key: 7,
					serviceNumber: 8,
					serviceLabel: "Servis akumulacijskog bojlera",
					servicePrice: "€90.00"
				},
				{
					key: 8,
					serviceNumber: 9,
					serviceLabel: "Servis akumulacijskog bojlera s čišćenjem kamenca",
					servicePrice: "€150.00"
				},
				{
					key: 9,
					serviceNumber: 10,
					serviceLabel: "Servis protočnog bojlera",
					servicePrice: "€80.00"
				},
				{
					key: 10,
					serviceNumber: 11,
					serviceLabel: "Servis protočnog bojlera sa čišćenjem kamenca",
					servicePrice: "€100.00"
				},
				{
					key: 11,
					serviceNumber: 12,
					serviceLabel: "Puštanje u rad konvencionalnih plinskih uređaja",
					servicePrice: "€120.00"
				},
				{
					key: 12,
					serviceNumber: 13,
					serviceLabel: "Puštanje u rad kondenzacijskog kombi bojlera",
					servicePrice: "€120.00"
				},
				{
					key: 13,
					serviceNumber: 14,
					serviceLabel: "Puštanje u rad kondenzacijskog bojlera (PEEC)",
					servicePrice: "€120.00"
				},
				{
					key: 14,
					serviceNumber: 15,
					serviceLabel: "Puštanje u rad kondenzacijskog cirko bojlera",
					servicePrice: "€120.00"
				},
				{
					key: 15,
					serviceNumber: 16,
					serviceLabel: "Programiranje digitalnog sobnog termostata",
					servicePrice: "€50.00"
				},
				{
					key: 16,
					serviceNumber: 17,
					serviceLabel: "Programiranje WiFi sobnog termostata",
					servicePrice: "€80.00"
				},
				{
					key: 17,
					serviceNumber: 18,
					serviceLabel: "Programiranje i adresiranje automatike",
					servicePrice: "€100.00"
				}
			]
		},
		suffixDisclaimers: [
			{
				key: 0,
				label:
					" *Cijene usluge popravka uređaja i zamjene dijelova ovise o kompleksnosti samog popravka, vrsti uređaja i pristupačnosti uređaju, a serviser će vas obavijestiti o cijeni popravka nakon defektacije kvara, a prije rada na samom uređaju."
			},
			{
				key: 1,
				label:
					"*U slučaju težeg pristupa uređaju, potrebnih dodatnih radova ili drugih poteškoća prilikom izvođenja klasičnih usluga, postoji mogućnost doplate u odnosu na ovdje iskazane cijene."
			}
		]
	}
};

export default content;
