/* eslint-disable perfectionist/sort-interfaces */

import { IAboutUs } from "../components/AboutUs";
import { IFeatures } from "../components/Features";
import { IHomepageBanner } from "../components/HomepageBanner";
import { ILogoClouds } from "../components/LogoClouds";
import { IOurServices } from "../components/OurServices";
import { IOurStoryByNumbers } from "../components/OurStoryByNumbers";
import { IOurWorksSection } from "../components/OurWorksSection";
import { IPriceListBanner } from "../components/PriceListBanner";
import { IPriceListSection } from "../components/PriceListSection";
import { IProductsShowcase } from "../components/ProductsShowcase";
import { IServicesSection } from "../components/ServicesSection";

interface IMetadata {
	metadata: {
		description: string;
		keywords: string;
		title: string;
		url: string;
	};
}

export interface IHomeContentTypes extends IMetadata {
	homepageBannerContent: IHomepageBanner;
	logoCloudsContent: ILogoClouds;
	featuresContent: IFeatures;
	ourServicesContent: IOurServices;
	productsShowcaseContent: IProductsShowcase;
	ourStoryByNumbersContent: IOurStoryByNumbers;
}

export interface IServicesContentTypes extends IMetadata {
	servicesSection: IServicesSection;
}

export interface IPriceListContentTypes extends IMetadata {
	priceListBanner: IPriceListBanner;
	priceListSection: IPriceListSection;
}

export interface IOurWorksContentTypes extends IMetadata {
	aboutUs: IAboutUs;
	ourWorksSection: IOurWorksSection;
}
