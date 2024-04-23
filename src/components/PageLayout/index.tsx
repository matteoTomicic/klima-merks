import Head from "next/head";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

import { WEBSITE_URL } from "../../constants/general.constants";
import Navigation from "../LayoutComponents/Navigation";
import getLayoutComponentsTranslations from "./layoutComponentsTranslations.helper";

export interface IPageLayout extends PropsWithChildren {
	description: string;
	keywords: string;
	title: string;
	url: string;
}

function PageLayout({ children, description, keywords, title, url }: IPageLayout) {
	const { locale } = useRouter();

	const layoutComponentsTranslations = getLayoutComponentsTranslations(locale);

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
					languageSelectorGoBackButtonText={layoutComponentsTranslations.languageSelectorGoBackButtonText}
					languageSelectorItems={layoutComponentsTranslations.languageSelectorItems}
					languageSelectorTitle={layoutComponentsTranslations.languageSelectorTitle}
					logo={layoutComponentsTranslations.logo}
					navigationItems={layoutComponentsTranslations.navigationItems}
					selectedLanguageImage={layoutComponentsTranslations.selectedLanguageImage}
				/>
			</header>
			<main>{children}</main>
			<footer>Footer goes here...</footer>
		</>
	);
}

export default PageLayout;
