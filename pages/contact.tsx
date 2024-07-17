import { GetStaticPropsContext } from "next";

import ContactUs from "../src/components/ContactUs";
import PageLayout from "../src/components/PageLayout";
import { IContactContentTypes } from "../src/content/types";

export default function Contact(pageProps: IContactContentTypes) {
	const { contactUs, metadata } = pageProps;

	return (
		<PageLayout description={metadata.description} keywords={metadata.keywords} title={metadata.title} url={metadata.url}>
			<ContactUs
				contactInfos={contactUs.contactInfos}
				googleMapSrc={contactUs.googleMapSrc}
				heading={contactUs.heading}
				image={contactUs.image}
				introText={contactUs.introText}
			/>
		</PageLayout>
	);
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	const module = (await import(`../src/content/Contact/${locale}.ts`)) as { default: IContactContentTypes };
	const content = module.default;

	return {
		props: {
			...content
		}
	};
}
