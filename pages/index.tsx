import { GetStaticPropsContext } from "next";

import Features from "../src/components/Features";
import HomepageBanner from "../src/components/HomepageBanner";
import LogoClouds from "../src/components/LogoClouds";
import OurServices from "../src/components/OurServices";
import OurStoryByNumbers from "../src/components/OurStoryByNumbers";
import PageLayout from "../src/components/PageLayout";
import ProductsShowcase from "../src/components/ProductsShowcase";
import { IHomeContentTypes } from "../src/content/types";

export default function Home(pageProps: IHomeContentTypes) {
	const {
		featuresContent,
		homepageBannerContent,
		logoCloudsContent,
		metadata,
		ourServicesContent,
		ourStoryByNumbersContent,
		productsShowcaseContent
	} = pageProps;

	return (
		<PageLayout description={metadata.description} keywords={metadata.keywords} title={metadata.title} url={metadata.url}>
			<HomepageBanner
				bannerImageAltText={homepageBannerContent.bannerImageAltText}
				ctaButtonText={homepageBannerContent.ctaButtonText}
				introText={homepageBannerContent.introText}
				mainHeading={homepageBannerContent.mainHeading}
				subHeading={homepageBannerContent.subHeading}
			/>
			<LogoClouds heading={logoCloudsContent.heading} logos={logoCloudsContent.logos} />
			<Features
				features={featuresContent.features}
				heading={featuresContent.heading}
				imageAltText={featuresContent.imageAltText}
				introText={featuresContent.introText}
				subHeading={featuresContent.subHeading}
			/>
			<OurServices heading={ourServicesContent.heading} services={ourServicesContent.services} />
			<ProductsShowcase
				heading={productsShowcaseContent.heading}
				products={productsShowcaseContent.products}
				subHeading={productsShowcaseContent.subHeading}
			/>
			<OurStoryByNumbers
				heading={ourStoryByNumbersContent.heading}
				introText={ourStoryByNumbersContent.introText}
				statsCards={ourStoryByNumbersContent.statsCards}
			/>
		</PageLayout>
	);
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	const module = (await import(`../src/content/Home/${locale}.ts`)) as { default: IHomeContentTypes };
	const content = module.default;

	return {
		props: {
			...content
		}
	};
}
