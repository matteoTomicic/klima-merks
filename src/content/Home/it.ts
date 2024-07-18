/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

import Routes from "../../enums/routes";
import { colors } from "../../global.styles";
import { IHomeContentTypes } from "../types";

const content: IHomeContentTypes = {
	metadata: {
		description:
			"Scopri soluzioni di riscaldamento e raffreddamento di alta qualità con Klima Merks. In qualità di partner e fornitori di servizi autorizzati Vaillant dal 1990, offriamo servizi di installazione e manutenzione personalizzati alle tue esigenze.",
		keywords: "Klima Merks, riscaldamento, raffreddamento, partner Vaillant, installazione, manutenzione, soluzioni HVAC",
		title: "Klima Merks | Autorizzato partner Vaillant",
		url: Routes.HOME
	},

	homepageBannerContent: {
		bannerImageAltText: "Pompa di calore Vaillant installata nel cortile di una casa.",
		mainHeading: "Klima Merks",
		subHeading: "- Servizio autorizzato <span>Vaillant</span> -",
		introText:
			"Dal 1990, l'azienda KLIMA - MERKS d.o.o. è la vostra scelta affidabile per climatizzazione e riscaldamento di alta qualità. Offriamo con orgoglio servizi di manutenzione per l'attrezzatura Vaillant, con un focus sulla qualità e la soddisfazione del cliente. Scoprite perché siamo il partner preferito per tutte le vostre esigenze di climatizzazione e riscaldamento. Fate parte della nostra storia di successo.",
		ctaButtonText: "Contattaci"
	},

	logoCloudsContent: {
		heading: "Alimentato dal <span>Gruppo Vaillant:</span> Innovazione Affidabile nelle Soluzioni di Controllo del Clima",
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
		introText: "Tutto ciò di cui hai bisogno",
		heading: "Servizio autorizzato per dispositivi Vaillant",
		subHeading:
			"Operiamo in modo responsabile, preciso ed efficiente. Anni di esperienza e numerosi clienti soddisfatti garantiscono la qualità dei nostri servizi.",
		imageAltText: "Installazione di una pompa di calore Vaillant da parte di un tecnico autorizzato Vaillant",
		features: [
			{
				key: 0,
				icon: "FaToolbox",
				text:
					"<span>Manutenzione di qualità. </span>Il nostro team di esperti offre una manutenzione di alta qualità per tutti i dispositivi Vaillant, inclusi sistemi di climatizzazione, ventilazione, riscaldamento, caldaie a gas e pompe di calore. Garantiamo prestazioni ottimali dei tuoi dispositivi."
			},
			{
				key: 1,
				icon: "FaTools",
				text:
					"<span>Intervento rapido. </span>La nostra presenza locale a Pola e in tutta l'Istria ci consente di rispondere rapidamente alle tue richieste. I nostri tecnici arrivano sul posto il prima possibile per fornirti l'assistenza necessaria."
			},
			{
				key: 2,
				icon: "MdVerified",
				text:
					"<span>Affidabilità e precisione. </span>Rispettiamo le scadenze concordate e finiamo sempre i progetti in tempo. La nostra meticolosità e responsabilità verso i clienti garantiscono prestazioni di alta qualità e la tua soddisfazione."
			},
			{
				key: 3,
				icon: "MdHandshake",
				text:
					"<span>Soddisfazione del cliente. </span>Il nostro successo si basa sulla fiducia e la soddisfazione dei nostri clienti. Unisciti ai numerosi clienti soddisfatti e scopri tu stesso la nostra competenza e qualità."
			}
		]
	},

	ourServicesContent: {
		heading: "I Nostri Servizi",
		services: [
			{
				key: 0,
				title: "Servizi e Riparazioni",
				description:
					"Per garantire il funzionamento ottimale del tuo dispositivo, sono necessari servizi regolari e riparazioni tempestive. La nostra competenza e esperienza garantiscono la sicurezza e la longevità dei tuoi dispositivi.",
				details: ["- Manutenzione regolare", "- Riparazioni rapide e affidabili", "- Utilizzo di parti originali"],
				image: {
					src: "/images/homepage/service-and-repair.jpg",
					alt: "Servizio caldaia a gas Vaillant"
				},
				icon: "FaTools",
				serviceButtons: [
					{
						key: 0,
						text: "Prezzi",
						href: Routes.PRICE_LIST,
						ariaLabel: "Servizi e Riparazioni prezzi"
					},
					{
						key: 1,
						text: "Dettagli",
						href: Routes.SERVICES_SERVICE_AND_REPAIR,
						ariaLabel: "Servizi e Riparazioni"
					}
				]
			},
			{
				key: 1,
				title: "Progettazione e Installazione",
				description:
					"Cerchi una soluzione di riscaldamento o raffreddamento moderna, sicura ed ecologica? Offriamo sistemi completi su misura per le tue esigenze, utilizzando la tecnologia più recente.",
				details: ["- Approccio personalizzato", "- Ultime innovazioni tecnologiche", "- Opzioni ecologiche"],
				image: {
					src: "/images/homepage/hvac-project-3d.jpg",
					alt: "Progetto HVAC 3D"
				},
				icon: "FaGear",
				serviceButtons: [
					{
						key: 0,
						text: "Prezzi",
						href: Routes.PRICE_LIST,
						ariaLabel: "Progettazione e Installazione prezzi"
					},
					{
						key: 1,
						text: "Dettagli",
						href: Routes.SERVICES_DESIGN_AND_INSTALLATION,
						ariaLabel: "Progettazione e Installazione"
					}
				]
			},
			{
				key: 2,
				title: "Consulenza",
				description:
					"Hai bisogno di aiuto nella scelta, utilizzo o riparazione di un dispositivo? I nostri esperti sono disponibili per ogni tipo di consiglio e supporto. Non esitare a contattarci.",
				details: ["- Consulenze esperte", "- Soluzioni personalizzate", "- Supporto in tutte le fasi"],
				image: {
					src: "/images/homepage/consulting.jpg",
					alt: "Consulenze"
				},
				icon: "BiSupport",
				serviceButtons: [
					{
						key: 0,
						text: "Prezzi",
						href: Routes.PRICE_LIST,
						ariaLabel: "Consulenza prezzi"
					},
					{
						key: 1,
						text: "Dettagli",
						href: Routes.SERVICES_CONSULTING,
						ariaLabel: "Consulenza"
					}
				]
			}
		]
	},

	productsShowcaseContent: {
		heading: "Proteggi la tua casa con <span>Vaillant</span>",
		subHeading:
			"Come il principale fornitore di manutenzione delle apparecchiature Vaillant, Klima Merks assicura che la tua casa rimanga confortevole ed efficiente. I nostri servizi di manutenzione esperti dei dispositivi Vaillant garantiscono prestazioni ottimali e affidabilità.",
		products: [
			{
				key: 0,
				productImage: {
					alt: "Caldaia a gas Vaillant",
					src: "/images/homepage/gas-boiler.jpg"
				},
				productTitle: "Caldaie a Gas",
				productDescription:
					"Che si tratti di una semplice sostituzione o di un progetto di nuova costruzione, i nostri apparecchi a gas sono una soluzione compatta 'tutto in uno' con bassi costi di investimento e brevi periodi di ammortamento. Migliaia di proprietari di case si affidano alla nostra gamma di caldaie a gas per riscaldare le loro case in modo sicuro ed efficiente. Scopri perché e unisciti a loro oggi stesso. In Klima Merks siamo orgogliosi di offrire una gamma di soluzioni per caldaie a gas dotate di un'ampia gamma di tecnologie efficienti adatte a qualsiasi spazio abitativo, con o senza serbatoio dell'acqua calda integrato. Ognuna delle nostre caldaie offre la massima qualità, affidabilità e prestazioni per garantire il comfort superiore della tua casa.",
				reversedOrder: false
			},
			{
				key: 1,
				productImage: {
					alt: "Pompa di calore Vaillant",
					src: "/images/homepage/heat-pump.jpg"
				},
				productTitle: "Pompe di Calore",
				productDescription:
					"Scegliendo le pompe di calore Vaillant, diventi più indipendente dal punto di vista energetico. Le pompe di calore sono un prodotto relativamente nuovo ma estremamente efficiente sul mercato, progettate per riscaldare, raffreddare gli spazi e preparare l'acqua calda. Funzionano utilizzando fonti di energia rinnovabile gratuite e infinitamente disponibili: l'energia termica dall'aria. Come tali, sono un ottimo investimento che si ripagherà presto e garantirà che tu ti senta a tuo agio e 'come a casa' nel tuo spazio.",
				reversedOrder: true
			},
			{
				key: 2,
				productImage: {
					alt: "Condizionatore Vaillant",
					src: "/images/homepage/ac-device.jpg"
				},
				productTitle: "Condizionatori",
				productDescription:
					"Una soluzione moderna e completa per un raffreddamento e un riscaldamento confortevoli tutto l'anno. Sono comuni nelle aree in cui le estati sono particolarmente calde, e ora i condizionatori d'aria vengono sempre più installati anche nelle aree con climi più miti. Grazie alla tecnologia più recente, i condizionatori d'aria non solo raffreddano ma anche riscaldano e garantiscono la circolazione dell'aria. Goditi il massimo comfort offerto dai condizionatori Vaillant, non solo in estate, ma durante tutto l'anno!",
				reversedOrder: false
			}
		]
	},

	ourStoryByNumbersContent: {
		heading: "Storia in numeri",
		introText: "Conosci la nostra storia attraverso i numeri che parlano dei nostri successi e risultati.",
		statsCards: [
			{
				key: 0,
				cardHeading: "Anno di fiducia",
				cardText: "Siamo orgogliosi di mantenere le attrezzature Vaillant da oltre tre decenni.",
				cardCounterNumber: 34,
				cardBackgroundColor: colors.grayDarker,
				cardMaxWidth: "44.8rem"
			},
			{
				key: 1,
				cardHeading: "Clienti soddisfatti",
				cardText:
					"La nostra lunga esperienza e dedizione alla qualità ci hanno assicurato la fiducia di molti clienti soddisfatti. Ogni cliente per noi è importante, e la loro soddisfazione è il miglior indicatore del nostro lavoro.",
				cardCounterNumber: 4000,
				cardBackgroundColor: colors.darkSection,
				cardMaxWidth: "54rem",
				cardClassName: "light-text"
			},
			{
				key: 2,
				cardHeading: "Progetti di successo",
				cardText:
					"Con i nostri progetti completati con successo, il nostro impegno e la nostra competenza hanno garantito risultati di qualità e soddisfazione dei clienti. Ogni progetto è un'opportunità di crescita e miglioramento dei nostri servizi.",
				cardCounterNumber: 1000,
				cardBackgroundColor: colors.primaryDarker,
				cardMaxWidth: "50rem",
				cardClassName: "light-text"
			}
		]
	}
};

export default content;
