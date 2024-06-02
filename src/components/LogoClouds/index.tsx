import Image, { ImageProps } from "next/image";

import { colors } from "../../global.styles";
import { Container, H2 } from "../../styles/shared.styles";
import Section from "../LayoutComponents/Section";
import { HeadingWrapper, LogosWrapper } from "./styles";

export interface ILogoClouds {
	heading: string;
	logos: ImageProps[];
}

function LogoClouds({ heading, logos }: ILogoClouds) {
	return (
		<Section style={{ backgroundColor: colors.gray }}>
			<Container>
				<HeadingWrapper>
					<H2 dangerouslySetInnerHTML={{ __html: heading }} />
				</HeadingWrapper>

				<LogosWrapper>
					{logos.map((logo) => (
						<Image alt={logo.alt} className="logo" height={90} key={logo.key} priority src={logo.src} width={140} />
					))}
				</LogosWrapper>
			</Container>
		</Section>
	);
}

export default LogoClouds;
