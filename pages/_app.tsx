/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "../src/global.styles";
import theme from "../src/theme/default.theme";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
