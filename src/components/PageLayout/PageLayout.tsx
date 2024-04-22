import Head from "next/head";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

import { WEBSITE_URL } from "../../constants/general.constants";
import {
	languageSelectorEn,
	languageSelectorHr,
	languageSelectorIt
} from "../../content/Global/LanguageSelector.content";
import { navigationItemsEn, navigationItemsHr, navigationItemsIt } from "../../content/Global/Navigation.content";
import Navigation from "../LayoutComponents/Navigation/Navigation";

export interface IPageLayout extends PropsWithChildren {
	description: string;
	keywords: string;
	title: string;
	url: string;
}

function PageLayout({ children, description, keywords, title, url }: IPageLayout) {
	const { locale } = useRouter();

	const selectLanguage = (language: string | undefined) => {
		let navigationItems;
		let languageSelectorItems;
		let languageSelectorTitle;
		let languageSelectorGoBackButtonText;

		switch (language) {
			case "en":
				navigationItems = navigationItemsEn;
				languageSelectorItems = languageSelectorEn.languageSelectorItems;
				languageSelectorTitle = languageSelectorEn.languageSelectorTitle;
				languageSelectorGoBackButtonText = languageSelectorEn.languageSelectorGoBackButtonText;
				break;

			case "it":
				navigationItems = navigationItemsIt;
				languageSelectorItems = languageSelectorIt.languageSelectorItems;
				languageSelectorTitle = languageSelectorIt.languageSelectorTitle;
				languageSelectorGoBackButtonText = languageSelectorIt.languageSelectorGoBackButtonText;
				break;

			default:
				navigationItems = navigationItemsHr;
				languageSelectorItems = languageSelectorHr.languageSelectorItems;
				languageSelectorTitle = languageSelectorHr.languageSelectorTitle;
				languageSelectorGoBackButtonText = languageSelectorHr.languageSelectorGoBackButtonText;
				break;
		}

		return { languageSelectorGoBackButtonText, languageSelectorItems, languageSelectorTitle, navigationItems };
	};

	return (
		<>
			<Head>
				<title>{title}</title>
				<meta content={description} name="description" />
				<meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
				<meta content={keywords} name="keywords" />
				<meta content="website" property="og:type" />
				<meta content={`${WEBSITE_URL}${url}`} property="og:url" />
				<meta content={title} property="og:title" />
				<meta content={description} property="og:description" />
				<meta content="/images/logo.svg" property="og:image" />
				<link href="/favicon.ico" rel="icon" type="image/svg+xml" />
			</Head>
			<header id="header">
				<Navigation
					languageSelectorGoBackButtonText={selectLanguage(locale).languageSelectorGoBackButtonText}
					languageSelectorItems={selectLanguage(locale).languageSelectorItems}
					languageSelectorTitle={selectLanguage(locale).languageSelectorTitle}
					navigationItems={selectLanguage(locale).navigationItems}
				/>
			</header>
			<main>{children}</main>
			<footer>Footer goes here...</footer>
		</>
	);
}

export default PageLayout;
