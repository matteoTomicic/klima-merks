/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

import Routes from "../../enums/routes";
import { IOurWorksContentTypes } from "../types";

const content: IOurWorksContentTypes = {
	metadata: {
		description:
			"Esplora i nostri progetti e lavori precedenti nei servizi di riscaldamento e raffreddamento. Klima Merks mostra con orgoglio i suoi successi nell'installazione, manutenzione e riparazione dei sistemi HVAC.",
		keywords: "Klima Merks lavori, progetti, riscaldamento, raffreddamento, sistemi HVAC, referenze",
		title: "Klima Merks | I Nostri Lavori",
		url: Routes.OUR_WORKS
	},

	aboutUs: {
		heading: "Chi Siamo e i Nostri Lavori",
		aboutUsText:
			"Klima - Merks S.r.l. opera con grande successo dal 1990 come azienda familiare. Siamo specializzati nella manutenzione delle apparecchiature Vaillant, e le nostre attività includono servizi di manutenzione per sistemi di climatizzazione Vaillant, ventilazione, riscaldamento, caldaie a gas, pompe di calore e altri dispositivi Vaillant. Attraverso molti anni di lavoro, abbiamo acquisito una vasta esperienza e numerosi clienti soddisfatti che si rivolgono sempre a noi con piacere per i nostri servizi.",
		ourServicesText:
			"Operiamo in modo responsabile, preciso, meticoloso ed efficiente. I nostri lavori vengono svolti in tempo e senza ritardi, rispettando le scadenze concordate. La sede della nostra azienda è a Pola, e operiamo nell'area dell'Istria. Un gran numero di clienti soddisfatti è la migliore garanzia per la qualità dei nostri servizi.",
		ourProjectsText:
			"In questa pagina puoi visualizzare alcuni dei nostri progetti e lavori di riferimento. Ogni progetto dimostra il nostro impegno per la qualità, la competenza e la soddisfazione del cliente. Che si tratti di manutenzione, riparazioni o installazioni, i nostri team esperti forniscono un servizio di alto livello. Diventa anche tu uno dei nostri clienti soddisfatti – contattaci e verifica di persona la nostra qualità e competenza.",
		bannerImage: {
			src: "/images/our-works/about-us-banner.webp",
			width: 600,
			height: 399,
			alt: "Tecnico Vaillant al lavoro"
		}
	},

	ourWorksSection: {
		heading: "Qui potete vedere alcuni dei nostri lavori...",
		text:
			"Il nostro team di esperti è dedicato a fornire qualità eccellente in ogni progetto. Che si tratti di installare nuovi sistemi, mantenere apparecchiature esistenti o effettuare riparazioni, i nostri lavori mostrano la nostra competenza e attenzione ai dettagli. Sfogliate la galleria dei nostri progetti completati con successo e scoprite perché i nostri clienti sono sempre soddisfatti. Ogni progetto che intraprendiamo riflette il nostro impegno per l'eccellenza e anni di esperienza nel settore.",
		ourWorksGallery: {
			icon: "FaCircleInfo",
			infoText:
				"Attualmente non abbiamo una galleria dei nostri lavori disponibile sul sito web poiché stiamo lavorando per migliorare e aggiornare il nostro portfolio per fornirvi la migliore visione possibile dei nostri progetti. Vi preghiamo di avere pazienza mentre prepariamo nuovi ed entusiasmanti esempi dei nostri progetti completati con successo. Nel frattempo, non esitate a contattarci per ulteriori informazioni sui nostri servizi e su come possiamo aiutarvi.",
			ctaButton: {
				label: "Contattaci",
				href: Routes.CONTACT
			}
		}
	}
};

export default content;
