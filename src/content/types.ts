/* eslint-disable perfectionist/sort-interfaces */

import { IFeatures } from "../components/Features";
import { IHomepageBanner } from "../components/HomepageBanner";
import { ILogoClouds } from "../components/LogoClouds";
import { IOurServices } from "../components/OurServices";

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
}
