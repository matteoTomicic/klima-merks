/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

import Routes from "../../enums/routes";
import { IServicesContentTypes } from "../types";

const content: IServicesContentTypes = {
	metadata: {
		description:
			"Scopri di più sui nostri servizi di riscaldamento e raffreddamento di alta qualità. Klima Merks offre installazione, manutenzione e riparazione di sistemi HVAC, su misura per le tue esigenze.",
		keywords:
			"Servizi Klima Merks, riscaldamento, raffreddamento, installazione, manutenzione, riparazione, sistemi HVAC",
		title: "Klima Merks | Servizi",
		url: Routes.SERVICES
	},

	servicesSection: {
		heading: "Servizi Professionali di Climatizzazione e Riscaldamento - Il Vostro Comfort è la Nostra Priorità",
		subtitle:
			"Garantiamo il vostro comfort attraverso le soluzioni più recenti. La nostra competenza e l'impegno per la qualità garantiscono l'affidabilità a lungo termine dei vostri sistemi di climatizzazione e riscaldamento. Offriamo servizi completi che soddisferanno tutte le vostre esigenze.",
		services: [
			{
				key: 0,
				id: "services-and-repairs",
				title: "Manutenzione e riparazioni",
				details: [
					{
						key: 0,
						title: "Manutenzione regolare",
						description: [
							{
								key: 0,
								label:
									"Garantiamo la manutenzione regolare dei vostri dispositivi per massimizzare la loro durata e assicurare il loro funzionamento ottimale."
							},
							{
								key: 1,
								label: "Attraverso servizi periodici manteniamo le performance dei vostri sistemi al massimo livello."
							},
							{
								key: 2,
								label: "Offriamo misure preventive per prevenire potenziali guasti e ridurre i costi di riparazione."
							}
						],
						icon: "BiCog"
					},
					{
						key: 1,
						title: "Riparazioni rapide e affidabili",
						description: [
							{
								key: 0,
								label:
									"I nostri esperti rispondono prontamente a tutte le vostre chiamate di assistenza per ripristinare rapidamente la funzionalità dei vostri dispositivi."
							},
							{
								key: 1,
								label:
									"Utilizziamo pezzi di ricambio di alta qualità e attrezzature moderne per riparazioni veloci ed efficienti."
							},
							{
								key: 2,
								label: "Garantiamo l'affidabilità dei nostri servizi in modo che possiate contare su di noi in ogni situazione."
							}
						],
						icon: "BiWrench"
					},
					{
						key: 2,
						title: "Utilizzo di pezzi di ricambio originali",
						description: [
							{
								key: 0,
								label:
									"Utilizziamo solo pezzi di ricambio originali durante le riparazioni per garantire la longevità dei vostri dispositivi."
							},
							{
								key: 1,
								label:
									"I pezzi di ricambio originali garantiscono la compatibilità e le prestazioni ottimali del vostro sistema."
							}
						],
						icon: "GiGears"
					}
				],
				ctaButton: {
					href: Routes.PRICE_LIST,
					label: "Listino prezzi"
				},
				image: {
					src: "/images/services/services-and-repairs.jpg",
					alt: "Tecnici Vaillant in azione, diretti per il servizio",
					width: 862,
					height: 485
				}
			},
			{
				key: 1,
				id: "design-and-installation",
				title: "Progettazione e installazione",
				details: [
					{
						key: 0,
						title: "Approccio personalizzato",
						description: [
							{
								key: 0,
								label:
									"Progettiamo ogni progetto secondo le vostre specifiche esigenze e condizioni dello spazio per garantire la soluzione ideale per la vostra casa o luogo di lavoro."
							},
							{
								key: 1,
								label:
									"I nostri esperti forniscono consigli personalizzati e raccomandazioni per ottenere i migliori risultati."
							}
						],
						icon: "BiUserCircle"
					},
					{
						key: 1,
						title: "Ultime innovazioni tecnologiche",
						description: [
							{
								key: 0,
								label:
									"Utilizziamo le più recenti tecnologie nella progettazione e installazione di sistemi di riscaldamento e raffreddamento per garantire efficienza ed efficacia."
							},
							{
								key: 1,
								label:
									"Integriamo sistemi innovativi che consentono il controllo ottimale della temperatura con il minimo consumo energetico."
							}
						],
						icon: "GiTechnoHeart"
					},
					{
						key: 2,
						title: "Opzioni ecologiche",
						description: [
							{
								key: 0,
								label:
									"Offriamo soluzioni ecologiche che riducono l'impronta ecologica del vostro sistema di riscaldamento o raffreddamento."
							},
							{
								key: 1,
								label:
									"I nostri sistemi sono progettati per minimizzare il consumo energetico e contribuire alla conservazione dell'ambiente."
							}
						],
						icon: "GiEcology"
					}
				],
				ctaButton: {
					href: Routes.PRICE_LIST,
					label: "Listino prezzi"
				},
				image: {
					src: "/images/services/design-and-installation.jpg",
					alt: "Ingegneri Vaillant mentre progettano",
					width: 1280,
					height: 720
				}
			},
			{
				key: 2,
				id: "consulting",
				title: "Consulenza",
				details: [
					{
						key: 0,
						title: "Consulenze specialistiche",
						description: [
							{
								key: 0,
								label:
									"I nostri esperti sono a vostra disposizione per ogni tipo di consulenza riguardante la scelta, l'uso o la riparazione dei vostri dispositivi."
							},
							{
								key: 1,
								label:
									"Forniamo spiegazioni chiare e raccomandazioni per consentirvi di prendere decisioni informate sui vostri sistemi di riscaldamento e raffreddamento."
							}
						],
						icon: "BiChat"
					},
					{
						key: 1,
						title: "Soluzioni personalizzate",
						description: [
							{
								key: 0,
								label: "Offriamo soluzioni personalizzate che soddisfano le vostre specifiche esigenze e condizioni."
							},
							{
								key: 1,
								label:
									"Che si tratti di un nuovo progetto o di migliorare un sistema esistente, adattiamo i nostri servizi per soddisfare le vostre richieste."
							}
						],
						icon: "BiBuildings"
					},
					{
						key: 2,
						title: "Supporto in tutte le fasi",
						description: [
							{
								key: 0,
								label:
									"Forniamo supporto in tutte le fasi del progetto, dalla consulenza iniziale all'implementazione e alla manutenzione successiva."
							},
							{
								key: 1,
								label:
									"Il nostro obiettivo è garantire che i vostri sistemi di riscaldamento e raffreddamento funzionino sempre in modo efficiente e senza problemi."
							}
						],
						icon: "FiLifeBuoy"
					}
				],
				ctaButton: {
					href: Routes.PRICE_LIST,
					label: "Listino prezzi"
				},
				image: {
					src: "/images/services/consulting.jpg",
					alt: "Dipendente Vaillant con cuffie che parla o consulta qualcuno",
					width: 935,
					height: 526
				}
			}
		]
	}
};

export default content;
