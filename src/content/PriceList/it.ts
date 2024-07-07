/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

import Routes from "../../enums/routes";
import { IPriceListContentTypes } from "../types";

const content: IPriceListContentTypes = {
	metadata: {
		description:
			"Scopri di più sui nostri prezzi competitivi per i servizi di riscaldamento e raffreddamento. Klima Merks offre tariffe convenienti per l'installazione, la manutenzione e la riparazione di sistemi HVAC.",
		keywords:
			"Klima Merks listino prezzi, prezzi, riscaldamento, raffreddamento, installazione, manutenzione, riparazione, sistemi HVAC",
		title: "Klima Merks | Listino Prezzi",
		url: Routes.PRICE_LIST
	},

	priceListBanner: {
		heading: "Listino prezzi",
		image: {
			src: "/images/price-list/banner.jpg",
			alt: "Cortile con unità esterna della pompa di calore"
		}
	},

	priceListSection: {
		title: "Listino Prezzi dei Servizi e dei Servizi Comuni",
		contactInfo: {
			text:
				"Gentili clienti, per prenotare un appuntamento e i servizi, contattateci chiamando il numero fornito o cliccando il pulsante qui sotto per andare alla pagina dei dettagli di contatto.",
			ctaButton: {
				href: Routes.CONTACT,
				label: "Pagina dei Contatti"
			},
			contactNumberLink: {
				href: "tel: 00385998131891",
				label: "+385 99 813 1891"
			}
		},
		prefixDisclaimer:
			"*I prezzi sono validi per i servizi all'interno della zona di attività di base (Provincia dell'Istria (fino a 20 km di distanza dalla sede))",
		priceListTable: {
			tableHeadColumns: [
				{
					key: 0,
					label: "#"
				},
				{
					key: 1,
					label: "Servizio"
				},
				{
					key: 0,
					label: "Prezzo con IVA"
				}
			],
			tableBodyRows: [
				{
					key: 0,
					serviceNumber: 1,
					serviceLabel: "Arrivo e diagnosi del guasto",
					servicePrice: "€40.00"
				},
				{
					key: 1,
					serviceNumber: 2,
					serviceLabel: "Servizio annuale regolare di caldaie combinate e circo",
					servicePrice: "€89.00"
				},
				{
					key: 2,
					serviceNumber: 3,
					serviceLabel: "Servizio annuale regolare di caldaie a condensazione",
					servicePrice: "€99.00"
				},
				{
					key: 3,
					serviceNumber: 4,
					serviceLabel: "Servizio di caldaie combinate con decalcificazione",
					servicePrice: "€119.00"
				},
				{
					key: 4,
					serviceNumber: 5,
					serviceLabel: "Servizio completo del dispositivo VUI con smontaggio (da minimo)",
					servicePrice: "€395.00"
				},
				{
					key: 5,
					serviceNumber: 6,
					serviceLabel: "Servizio di caldaia a condensazione VSC",
					servicePrice: "€133.00"
				},
				{
					key: 6,
					serviceNumber: 7,
					serviceLabel: "Servizio di caldaia a gas",
					servicePrice: "€89.00"
				},
				{
					key: 7,
					serviceNumber: 8,
					serviceLabel: "Servizio di scaldabagno ad accumulo",
					servicePrice: "€89.00"
				},
				{
					key: 8,
					serviceNumber: 9,
					serviceLabel: "Servizio di scaldabagno ad accumulo con decalcificazione",
					servicePrice: "€149.00"
				},
				{
					key: 9,
					serviceNumber: 10,
					serviceLabel: "Servizio di scaldabagno istantaneo",
					servicePrice: "€79.00"
				},
				{
					key: 10,
					serviceNumber: 11,
					serviceLabel: "Servizio di scaldabagno istantaneo con decalcificazione",
					servicePrice: "€99.00"
				},
				{
					key: 11,
					serviceNumber: 12,
					serviceLabel: "Messa in servizio di dispositivi a gas convenzionali",
					servicePrice: "€79.00"
				},
				{
					key: 12,
					serviceNumber: 13,
					serviceLabel: "Messa in servizio di caldaia combinata a condensazione",
					servicePrice: "€89.00"
				},
				{
					key: 13,
					serviceNumber: 14,
					serviceLabel: "Messa in servizio di caldaia a condensazione (PEEC)",
					servicePrice: "€109.00"
				},
				{
					key: 14,
					serviceNumber: 15,
					serviceLabel: "Messa in servizio di caldaia circo a condensazione",
					servicePrice: "€109.00"
				},
				{
					key: 15,
					serviceNumber: 16,
					serviceLabel: "Programmazione di termostato digitale per ambiente",
					servicePrice: "€55.00"
				},
				{
					key: 16,
					serviceNumber: 17,
					serviceLabel: "Programmazione di termostato WiFi per ambiente",
					servicePrice: "€79.00"
				},
				{
					key: 17,
					serviceNumber: 18,
					serviceLabel: "Programmazione e indirizzamento dell'automazione",
					servicePrice: "€99.00"
				}
			]
		},
		suffixDisclaimers: [
			{
				key: 0,
				label:
					"*Il prezzo della riparazione del servizio e della sostituzione delle parti dipende dalla complessità della riparazione, dal tipo di dispositivo e dalla sua accessibilità. Il tecnico vi informerà del prezzo della riparazione dopo aver diagnosticato il guasto e prima di lavorare sul dispositivo."
			},
			{
				key: 1,
				label:
					"*In caso di difficile accesso al dispositivo, lavori aggiuntivi richiesti o altre difficoltà durante l'esecuzione dei servizi standard, potrebbe esserci un costo aggiuntivo rispetto ai prezzi indicati qui."
			}
		]
	}
};

export default content;
