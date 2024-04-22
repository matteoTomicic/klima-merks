import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import LanguageSelector, { ILanguageSelectorItem } from "./LanguageSelector/LanguageSelector";
import {
	ContainerStyled,
	LogoWrapper,
	NavigationItem,
	NavigationItems,
	NavigationItemsList,
	NavigationStyled
} from "./Navigation.styles";

interface INavigationItem {
	href: string;
	key: number;
	label: string;
}

interface INavigation {
	languageSelectorGoBackButtonText: string;
	languageSelectorItems: ILanguageSelectorItem[];
	languageSelectorTitle: string;
	navigationItems: INavigationItem[];
}

export default function Navigation({
	languageSelectorGoBackButtonText,
	languageSelectorItems,
	languageSelectorTitle,
	navigationItems
}: INavigation) {
	const [toggleNavigation, setToggleNavigation] = useState(false);
	const { locale, pathname } = useRouter();

	const handleToggleNavigation = () => {
		setToggleNavigation(!toggleNavigation);
	};

	return (
		<NavigationStyled>
			<ContainerStyled>
				<Link href="/">
					<LogoWrapper>
						<Image alt="Klima Merks logo" height={36} priority src="/images/global/logo.svg" width={150} />
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
						/>
					</NavigationItemsList>
				</NavigationItems>
			</ContainerStyled>
		</NavigationStyled>
	);
}
