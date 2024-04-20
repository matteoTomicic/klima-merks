import { GetStaticPropsContext } from "next";

import PageLayout from "../src/components/PageLayout/PageLayout";
import { ContentType, IPageProps } from "../src/content/Home/Home.types";

export default function Home(pageProps: IPageProps) {
	const { Metadata } = pageProps;

	return (
		<PageLayout description={Metadata.Description} keywords={Metadata.Keywords} title={Metadata.Title} url={Metadata.Url}>
			Body content goes here...
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
