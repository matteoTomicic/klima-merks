import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import Routes from "../../../enums/routes";
import HamburgerMenu from "./HamburgerMenu";
import LanguageSelector, { ILanguageSelector } from "./LanguageSelector";
import {
	ContainerStyled,
	LogoWrapper,
	NavigationItem,
	NavigationItems,
	NavigationItemsList,
	NavigationStyled
} from "./styles";

interface INavigationItem {
	href: string;
	key: number;
	label: string;
}

interface INavigation extends Omit<ILanguageSelector, "linkTo"> {
	logo: ImageProps;
	navigationItems: INavigationItem[];
}

export default function Navigation({
	languageSelectorGoBackButtonText,
	languageSelectorItems,
	languageSelectorTitle,
	logo,
	navigationItems,
	selectedLanguageImage
}: INavigation) {
	const [toggleNavigation, setToggleNavigation] = useState(false);
	const { locale, pathname } = useRouter();

	const handleToggleNavigation = () => {
		setToggleNavigation(!toggleNavigation);
	};

	return (
		<NavigationStyled>
			<ContainerStyled>
				<Link href={Routes.HOME}>
					<LogoWrapper>
						<Image alt={logo.alt} height={logo.height} priority src={logo.src} width={logo.width} />
					</LogoWrapper>
				</Link>
				<HamburgerMenu closeHamburger={toggleNavigation} onClick={handleToggleNavigation} />
				<NavigationItems className={toggleNavigation ? "shown" : ""}>
					<NavigationItemsList>
						{navigationItems.map((item) => {
							return (
								<NavigationItem $currentPage={pathname === item.href} key={item.key}>
									<Link href={item.href} title={item.label}>
										{item.label}
									</Link>
								</NavigationItem>
							);
						})}

						<LanguageSelector
							languageSelectorGoBackButtonText={languageSelectorGoBackButtonText}
							languageSelectorItems={languageSelectorItems}
							languageSelectorTitle={languageSelectorTitle}
							linkTo={pathname}
							locale={locale}
							selectedLanguageImage={selectedLanguageImage}
						/>
					</NavigationItemsList>
				</NavigationItems>
			</ContainerStyled>
		</NavigationStyled>
	);
}
