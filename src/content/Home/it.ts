/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

import Routes from "../../enums/routes";
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
						href: Routes.PRICE_LIST
					},
					{
						key: 1,
						text: "Dettagli",
						href: Routes.SERVICES
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
						href: Routes.PRICE_LIST
					},
					{
						key: 1,
						text: "Dettagli",
						href: Routes.SERVICES
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
						href: Routes.PRICE_LIST
					},
					{
						key: 1,
						text: "Dettagli",
						href: Routes.SERVICES
					}
				]
			}
		]
	}
};

export default content;
