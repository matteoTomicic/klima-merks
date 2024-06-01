import { GetStaticPropsContext } from "next";

import Features from "../src/components/Features";
import HomepageBanner from "../src/components/HomepageBanner";
import LogoClouds from "../src/components/LogoClouds";
import PageLayout from "../src/components/PageLayout";
import { ContentType, IPageProps } from "../src/content/Home/types";

export default function Home(pageProps: IPageProps) {
	const { FeaturesContent, HomepageBannerContent, LogoCloudsContent, Metadata } = pageProps;

	return (
		<PageLayout description={Metadata.Description} keywords={Metadata.Keywords} title={Metadata.Title} url={Metadata.Url}>
			<HomepageBanner
				bannerImageAltText={HomepageBannerContent.BannerImage.Alt}
				ctaButtonText={HomepageBannerContent.CtaButtonText}
				introText={HomepageBannerContent.IntroText}
				mainHeading={HomepageBannerContent.MainHeading}
				subHeading={HomepageBannerContent.SubHeading}
			/>
			<LogoClouds heading={LogoCloudsContent.Heading} logos={LogoCloudsContent.Logos} />
			<Features
				features={FeaturesContent.Features}
				heading={FeaturesContent.Heading}
				imageAltText={FeaturesContent.ImageAltText}
				introText={FeaturesContent.IntroText}
				subHeading={FeaturesContent.SubHeading}
			/>
		</PageLayout>
	);
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	const content: unknown = await import(`../src/content/Home/${locale}.json`);

	return {
		props: {
			...(content as ContentType)
		}
	};
}
