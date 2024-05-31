import { GetStaticPropsContext } from "next";

import HomepageBanner from "../src/components/HomepageBanner";
import PageLayout from "../src/components/PageLayout";
import { ContentType, IPageProps } from "../src/content/Home/types";

export default function Home(pageProps: IPageProps) {
	const { HomepageBannerContent, Metadata } = pageProps;

	return (
		<PageLayout description={Metadata.Description} keywords={Metadata.Keywords} title={Metadata.Title} url={Metadata.Url}>
			<HomepageBanner
				bannerImageAltText={HomepageBannerContent.BannerImage.Alt}
				ctaButtonText={HomepageBannerContent.CtaButtonText}
				introText={HomepageBannerContent.IntroText}
				mainHeading={HomepageBannerContent.MainHeading}
				subHeading={HomepageBannerContent.SubHeading}
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
