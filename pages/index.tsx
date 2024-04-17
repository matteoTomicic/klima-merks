import { GetStaticPropsContext } from "next";

import { ContentType, IPageProps } from "../src/content/Home/Home.types";

export default function Home(pageProps: IPageProps) {
	const { Hello } = pageProps;

	return <div>{Hello}</div>;
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	const content: unknown = await import(`../src/content/Home/${locale}.json`);

	return {
		props: {
			...(content as ContentType)
		}
	};
}
