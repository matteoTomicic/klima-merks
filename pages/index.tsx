import { GetStaticPropsContext } from "next";

import HomepageBanner from "../src/components/HomepageBanner";
import LogoClouds from "../src/components/LogoClouds";
import PageLayout from "../src/components/PageLayout";
import { ContentType, IPageProps } from "../src/content/Home/types";

export default function Home(pageProps: IPageProps) {
	const { HomepageBannerContent, LogoCloudsContent, Metadata } = pageProps;

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
