/* eslint-disable perfectionist/sort-objects */
/* eslint-disable perfectionist/sort-object-types */

import Constants from "../../enums/constants";
import Routes from "../../enums/routes";
import { IPriceListContentTypes } from "../types";

const content: IPriceListContentTypes = {
	metadata: {
		description:
			"Find out more about our competitive prices for heating and cooling services. Klima Merks offers affordable rates for installation, maintenance, and repair of HVAC systems.",
		keywords: "Klima Merks price list, prices, heating, cooling, installation, maintenance, repair, HVAC systems",
		title: "Klima Merks | Price List",
		url: Routes.PRICE_LIST
	},

	priceListBanner: {
		heading: "Price List",
		image: {
			src: "/images/price-list/banner.webp",
			alt: "Yard with an outdoor heat pump unit"
		}
	},

	priceListSection: {
		title: "Service Price List and Common Services",
		contactInfo: {
			text:
				"Dear customers, to schedule an appointment and services, please contact us by calling the number provided or by clicking the button below to go to the contact details page.",
			ctaButton: {
				href: Routes.CONTACT,
				label: "Contact Page"
			},
			contactNumberLinks: [
				{
					key: 0,
					href: Constants.PHONE_NUMBER_BORIS_HREF,
					label: Constants.PHONE_NUMBER_BORIS
				},
				{
					key: 1,
					href: Constants.PHONE_NUMBER_LUKA_HREF,
					label: Constants.PHONE_NUMBER_LUKA
				}
			]
		},
		prefixDisclaimer:
			"*Prices are valid for services within the basic activity zone (Istria County (up to 20 km distance from headquarters))",
		priceListTable: {
			tableHeadColumns: [
				{
					key: 0,
					label: "#"
				},
				{
					key: 1,
					label: "Service"
				},
				{
					key: 2,
					label: "Price with VAT"
				}
			],
			tableBodyRows: [
				{
					key: 0,
					serviceNumber: 1,
					serviceLabel: "Arrival and fault diagnosis",
					servicePrice: "€40.00"
				},
				{
					key: 1,
					serviceNumber: 2,
					serviceLabel: "Regular annual service of combi and circo boilers",
					servicePrice: "€90.00"
				},
				{
					key: 2,
					serviceNumber: 3,
					serviceLabel: "Regular annual service of condensing boilers",
					servicePrice: "€100.00"
				},
				{
					key: 3,
					serviceNumber: 4,
					serviceLabel: "Combi boiler service with descaling",
					servicePrice: "€120.00"
				},
				{
					key: 4,
					serviceNumber: 5,
					serviceLabel: "Complete service of VUI device with disassembly (from minimum)",
					servicePrice: "€450.00"
				},
				{
					key: 5,
					serviceNumber: 6,
					serviceLabel: "Service of VSC gas condensing boiler",
					servicePrice: "€140.00"
				},
				{
					key: 6,
					serviceNumber: 7,
					serviceLabel: "Service of gas boiler",
					servicePrice: "€90.00"
				},
				{
					key: 7,
					serviceNumber: 8,
					serviceLabel: "Service of accumulation boiler",
					servicePrice: "€90.00"
				},
				{
					key: 8,
					serviceNumber: 9,
					serviceLabel: "Service of accumulation boiler with descaling",
					servicePrice: "€150.00"
				},
				{
					key: 9,
					serviceNumber: 10,
					serviceLabel: "Service of instantaneous water heater",
					servicePrice: "€80.00"
				},
				{
					key: 10,
					serviceNumber: 11,
					serviceLabel: "Service of instantaneous water heater with descaling",
					servicePrice: "€100.00"
				},
				{
					key: 11,
					serviceNumber: 12,
					serviceLabel: "Commissioning of conventional gas devices",
					servicePrice: "€120.00"
				},
				{
					key: 12,
					serviceNumber: 13,
					serviceLabel: "Commissioning of condensing combi boiler",
					servicePrice: "€120.00"
				},
				{
					key: 13,
					serviceNumber: 14,
					serviceLabel: "Commissioning of condensing boiler (PEEC)",
					servicePrice: "€120.00"
				},
				{
					key: 14,
					serviceNumber: 15,
					serviceLabel: "Commissioning of condensing circo boiler",
					servicePrice: "€120.00"
				},
				{
					key: 15,
					serviceNumber: 16,
					serviceLabel: "Programming of digital room thermostat",
					servicePrice: "€50.00"
				},
				{
					key: 16,
					serviceNumber: 17,
					serviceLabel: "Programming of WiFi room thermostat",
					servicePrice: "€80.00"
				},
				{
					key: 17,
					serviceNumber: 18,
					serviceLabel: "Programming and addressing of automation",
					servicePrice: "€100.00"
				}
			]
		},
		suffixDisclaimers: [
			{
				key: 0,
				label:
					"*The service repair price and replacement parts depend on the complexity of the repair, the type of device, and its accessibility. The technician will inform you of the repair price after diagnosing the fault and before working on the device."
			},
			{
				key: 1,
				label:
					"*In case of difficult access to the device, additional work required, or other difficulties during the execution of standard services, there may be an additional charge compared to the prices stated here."
			}
		]
	}
};

export default content;
