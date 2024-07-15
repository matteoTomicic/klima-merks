import { GetStaticPropsContext } from "next";

import AboutUs from "../src/components/AboutUs";
import OurWorksSection from "../src/components/OurWorksSection";
import PageLayout from "../src/components/PageLayout";
import { IOurWorksContentTypes } from "../src/content/types";

export default function OurWorks(pageProps: IOurWorksContentTypes) {
	const { aboutUs, metadata, ourWorksSection } = pageProps;

	return (
		<PageLayout description={metadata.description} keywords={metadata.keywords} title={metadata.title} url={metadata.url}>
			<AboutUs
				aboutUsText={aboutUs.aboutUsText}
				bannerImage={aboutUs.bannerImage}
				heading={aboutUs.heading}
				ourProjectsText={aboutUs.ourProjectsText}
				ourServicesText={aboutUs.ourServicesText}
			/>
			<OurWorksSection
				heading={ourWorksSection.heading}
				ourWorksGallery={ourWorksSection.ourWorksGallery}
				text={ourWorksSection.text}
			/>
		</PageLayout>
	);
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	const module = (await import(`../src/content/OurWorks/${locale}.ts`)) as { default: IOurWorksContentTypes };
	const content = module.default;

	return {
		props: {
			...content
		}
	};
}
