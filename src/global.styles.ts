import * as styled from "styled-components";

export default styled.createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	html {
		line-height: 1.15;
		-webkit-text-size-adjust: 100%;
		font-size: 62.5%;
		scroll-behavior: smooth;
	}

	body {
		min-height: 100vh;
		font-family: ${({ theme }) => theme.fonts.default};
		font-weight: 400;
		font-size: 1.6rem;
		background-color: gray;
	}

	header {
		height: 6.8rem;

		${({ theme }) => theme.device.LG} {
			height: 7.5rem;
		}
	}

	ol,
	ul,
	li {
		list-style: none;
	}

	img,
	picture,
	svg,
	video,
	object {
		display: block;
		max-width: 100%;
		height: auto;
	}
`;
