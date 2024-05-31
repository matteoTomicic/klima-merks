import { CSSProperties, PropsWithChildren } from "react";

import SectionStyled from "./styles";

interface ISection extends PropsWithChildren {
	style?: CSSProperties;
}

function Section({ children, style }: ISection) {
	return <SectionStyled style={style}>{children}</SectionStyled>;
}

export default Section;
