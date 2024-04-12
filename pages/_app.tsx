/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from "next/app";

import GlobalStyle from "../src/global.styles";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}
