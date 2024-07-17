import { FaArrowRight } from "react-icons/fa";
import { PiPhone } from "react-icons/pi";

import { colors } from "../../global.styles";
import { Footnote, H2, PRegular, Subtitle2 } from "../../styles/shared.styles";
import Section from "../LayoutComponents/Section";
import CtaButton from "../UI/CtaButton";
import PriceListTable, { IPriceListTable } from "./PriceListTable";
import {
	ContactInfoWrapper,
	ContactMobileLink,
	CtaButtonWrapper,
	StyledContainer,
	SuffixDisclaimersWrapper
} from "./styles";

export interface IPriceListSection {
	contactInfo: {
		contactNumberLinks: {
			href: string;
			key: number;
			label: string;
		}[];
		ctaButton: {
			href: string;
			label: string;
		};
		text: string;
	};
	prefixDisclaimer: string;
	priceListTable: IPriceListTable;
	suffixDisclaimers: {
		key: number;
		label: string;
	}[];
	title: string;
}

function PriceListSection({
	contactInfo,
	prefixDisclaimer,
	priceListTable,
	suffixDisclaimers,
	title
}: IPriceListSection) {
	return (
		<Section style={{ backgroundColor: colors.gray }}>
			<StyledContainer>
				<H2>{title}</H2>
				<PRegular style={{ maxWidth: "65rem" }}>{contactInfo.text}</PRegular>
				<ContactInfoWrapper>
					{contactInfo.contactNumberLinks.map((link) => (
						<ContactMobileLink href={link.href} key={link.key}>
							<PiPhone size={22} />
							<Subtitle2>{link.label}</Subtitle2>
						</ContactMobileLink>
					))}
					<CtaButtonWrapper>
						<CtaButton href={contactInfo.ctaButton.href}>
							<span>{contactInfo.ctaButton.label}</span>
							<FaArrowRight />
						</CtaButton>
					</CtaButtonWrapper>
				</ContactInfoWrapper>
				<Footnote>{prefixDisclaimer}</Footnote>

				<PriceListTable tableBodyRows={priceListTable.tableBodyRows} tableHeadColumns={priceListTable.tableHeadColumns} />

				<SuffixDisclaimersWrapper>
					{suffixDisclaimers.map((disclaimer) => (
						<Footnote key={disclaimer.key}>{disclaimer.label}</Footnote>
					))}
				</SuffixDisclaimersWrapper>
			</StyledContainer>
		</Section>
	);
}

export default PriceListSection;
