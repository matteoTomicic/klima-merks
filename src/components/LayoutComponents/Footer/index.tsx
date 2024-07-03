import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaGoogle, FaInstagram } from "react-icons/fa";

import { Footnote, PRegular, Subtitle2 } from "../../../styles/shared.styles";
import { INavigationItem } from "../shared.types";
import {
	Contact,
	ContactInfo,
	ContainerStyled,
	FooterCopyright,
	FooterHead,
	FooterLinks,
	FooterStyled,
	Navigation,
	NavigationLinks,
	OurServices,
	OurServicesLinks,
	SocialMediaItem,
	SocialMediaItems
} from "./styles";

type IconsMap = Record<string, IconType>;

interface ISocialMediaItem {
	href: string;
	icon: string;
	key: number;
}

interface IService {
	href: string;
	key: number;
	label: string;
}

interface IContact {
	key: number;
	label: string;
}

interface IFooter {
	companyMission: string;
	contactCategory: {
		contact: IContact[];
		title: string;
	};
	copyrightMessage: string;
	logo: ImageProps;
	navigationCategoryTitle: string;
	navigationItems: INavigationItem[];
	ourServicesCategory: {
		ourServices: IService[];
		title: string;
	};
	socialMediaItems: ISocialMediaItem[];
}

function Footer({
	companyMission,
	contactCategory,
	copyrightMessage,
	logo,
	navigationCategoryTitle,
	navigationItems,
	ourServicesCategory,
	socialMediaItems
}: IFooter) {
	const iconsMap: IconsMap = {
		FaGoogle,
		FaInstagram
	};

	return (
		<FooterStyled as="footer">
			<ContainerStyled>
				<FooterHead>
					<Image alt={logo.alt} height={logo.height} src={logo.src} width={logo.width} />
					<PRegular>{companyMission}</PRegular>
					<SocialMediaItems>
						{socialMediaItems.map((socialMediaItem) => {
							const SocialMediaIcon = iconsMap[socialMediaItem.icon];

							return (
								<SocialMediaItem href={socialMediaItem.href} key={socialMediaItem.key} rel="noreferrer" target="_blank">
									<SocialMediaIcon size={24} />
								</SocialMediaItem>
							);
						})}
					</SocialMediaItems>
				</FooterHead>

				<FooterLinks>
					<Navigation>
						<Subtitle2>{navigationCategoryTitle}</Subtitle2>
						<NavigationLinks>
							{navigationItems.map((navigationItem) => (
								<Link href={navigationItem.href} key={navigationItem.key}>
									<PRegular>{navigationItem.label}</PRegular>
								</Link>
							))}
						</NavigationLinks>
					</Navigation>

					<OurServices>
						<Subtitle2>{ourServicesCategory.title}</Subtitle2>
						<OurServicesLinks>
							{ourServicesCategory.ourServices.map((service) => (
								<Link href={service.href} key={service.key}>
									<PRegular>{service.label}</PRegular>
								</Link>
							))}
						</OurServicesLinks>
					</OurServices>

					<Contact>
						<Subtitle2>{contactCategory.title}</Subtitle2>
						<ContactInfo>
							{contactCategory.contact.map((contact) => (
								<PRegular key={contact.key}>{contact.label}</PRegular>
							))}
						</ContactInfo>
					</Contact>
				</FooterLinks>

				<FooterCopyright>
					<Footnote>{copyrightMessage}</Footnote>
				</FooterCopyright>
			</ContainerStyled>
		</FooterStyled>
	);
}

export default Footer;
