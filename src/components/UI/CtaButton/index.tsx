import Link from "next/link";
import { PropsWithChildren } from "react";

import CtaButtonStyled from "./styles";

interface ICtaButton extends PropsWithChildren {
	href: string;
}

function CtaButton({ children, href }: ICtaButton) {
	return (
		<CtaButtonStyled>
			<Link href={href}>{children}</Link>
		</CtaButtonStyled>
	);
}

export default CtaButton;
