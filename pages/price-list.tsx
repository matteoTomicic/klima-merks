import { GetStaticPropsContext } from "next";

import PageLayout from "../src/components/PageLayout";
import { PriceListBanner } from "../src/components/PriceListBanner";
import PriceListSection from "../src/components/PriceListSection";
import { IPriceListContentTypes } from "../src/content/types";

export default function PriceList(pageProps: IPriceListContentTypes) {
	const { metadata, priceListBanner, priceListSection } = pageProps;

	return (
		<PageLayout description={metadata.description} keywords={metadata.keywords} title={metadata.title} url={metadata.url}>
			<PriceListBanner heading={priceListBanner.heading} image={priceListBanner.image} />
			<PriceListSection
				contactInfo={priceListSection.contactInfo}
				prefixDisclaimer={priceListSection.prefixDisclaimer}
				priceListTable={priceListSection.priceListTable}
				suffixDisclaimers={priceListSection.suffixDisclaimers}
				title={priceListSection.title}
			/>
		</PageLayout>
	);
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	const module = (await import(`../src/content/PriceList/${locale}.ts`)) as { default: IPriceListContentTypes };
	const content = module.default;

	return {
		props: {
			...content
		}
	};
}
