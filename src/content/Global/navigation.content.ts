import Routes from "../../enums/routes";

export const navigationHr = {
	logo: {
		alt: "Klima Merks logo",
		height: 36,
		src: "/images/global/logo.svg",
		width: 150
	},
	navigationItems: [
		{
			href: Routes.HOME,
			key: 0,
			label: "Početna"
		},
		{
			href: Routes.SERVICES,
			key: 1,
			label: "Usluge"
		},
		{
			href: Routes.OUR_WORKS,
			key: 2,
			label: "Naši radovi"
		},
		{
			href: Routes.PRICE_LIST,
			key: 3,
			label: "Cjenik"
		},
		{
			href: Routes.CONTACT,
			key: 4,
			label: "Kontakt"
		}
	]
};

export const navigationEn = {
	logo: {
		alt: "Klima Merks logo",
		height: 36,
		src: "/images/global/logo.svg",
		width: 150
	},
	navigationItems: [
		{
			href: Routes.HOME,
			key: 0,
			label: "Home"
		},
		{
			href: Routes.SERVICES,
			key: 1,
			label: "Services"
		},
		{
			href: Routes.OUR_WORKS,
			key: 2,
			label: "Our Works"
		},
		{
			href: Routes.PRICE_LIST,
			key: 3,
			label: "Price list"
		},
		{
			href: Routes.CONTACT,
			key: 4,
			label: "Contact"
		}
	]
};

export const navigationIt = {
	logo: {
		alt: "Logo Klima Merks",
		height: 36,
		src: "/images/global/logo.svg",
		width: 150
	},
	navigationItems: [
		{
			href: Routes.HOME,
			key: 0,
			label: "Home"
		},
		{
			href: Routes.SERVICES,
			key: 1,
			label: "Servizi"
		},
		{
			href: Routes.OUR_WORKS,
			key: 2,
			label: "I nostri lavori"
		},
		{
			href: Routes.PRICE_LIST,
			key: 3,
			label: "Listino prezzi"
		},
		{
			href: Routes.CONTACT,
			key: 4,
			label: "Contatto"
		}
	]
};
