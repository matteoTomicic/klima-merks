import { GetStaticPropsContext } from "next";

import PageLayout from "../src/components/PageLayout";
import ServicesSection from "../src/components/ServicesSection";
import { IServicesContentTypes } from "../src/content/types";

export default function Services(pageProps: IServicesContentTypes) {
	const { metadata, servicesSection } = pageProps;

	return (
		<PageLayout description={metadata.description} keywords={metadata.keywords} title={metadata.title} url={metadata.url}>
			<ServicesSection
				heading={servicesSection.heading}
				services={servicesSection.services}
				subtitle={servicesSection.subtitle}
			/>
		</PageLayout>
	);
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	const module = (await import(`../src/content/Services/${locale}.ts`)) as { default: IServicesContentTypes };
	const content = module.default;

	return {
		props: {
			...content
		}
	};
}
