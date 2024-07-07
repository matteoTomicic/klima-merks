/* eslint-disable perfectionist/sort-interfaces */

import { IFeatures } from "../components/Features";
import { IHomepageBanner } from "../components/HomepageBanner";
import { ILogoClouds } from "../components/LogoClouds";
import { IOurServices } from "../components/OurServices";
import { IOurStoryByNumbers } from "../components/OurStoryByNumbers";
import { IPriceListBanner } from "../components/PriceListBanner";
import { IPriceListSection } from "../components/PriceListSection";
import { IProductsShowcase } from "../components/ProductsShowcase";
import { IServicesSection } from "../components/ServicesSection";

interface IMetadata {
	description: string;
	keywords: string;
	title: string;
	url: string;
}

export interface IHomeContentTypes {
	metadata: IMetadata;
	homepageBannerContent: IHomepageBanner;
	logoCloudsContent: ILogoClouds;
	featuresContent: IFeatures;
	ourServicesContent: IOurServices;
	productsShowcaseContent: IProductsShowcase;
	ourStoryByNumbersContent: IOurStoryByNumbers;
}

export interface IServicesContentTypes {
	metadata: IMetadata;
	servicesSection: IServicesSection;
}

export interface IPriceListContentTypes {
	metadata: IMetadata;
	priceListBanner: IPriceListBanner;
	priceListSection: IPriceListSection;
}
