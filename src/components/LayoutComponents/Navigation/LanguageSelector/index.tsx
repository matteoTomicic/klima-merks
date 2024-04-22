import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsArrowBarDown } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { useOutsideClickRef } from "rooks";

import { PRegular } from "../../../../styles/shared.styles";
import {
	Flag,
	GoBackMenu,
	LanguageName,
	LanguageSelectorStyled,
	LanguagesDropdown,
	SelectedLanguageImageWrapper
} from "./styles";

export interface ILanguageSelectorItem {
	flag: {
		alt: string;
		src: string;
	};
	key: number;
	label: string;
	locale: string;
}

interface ILanguageSelector {
	languageSelectorGoBackButtonText: string;
	languageSelectorItems: ILanguageSelectorItem[];
	languageSelectorTitle: string;
	linkTo: string;
	locale?: string;
}

export default function LanguageSelector({
	languageSelectorGoBackButtonText,
	languageSelectorItems,
	languageSelectorTitle,
	linkTo,
	locale
}: ILanguageSelector) {
	const [isLanguagesDropdownOpen, setIsLanguagesDropdownOpen] = useState(false);

	const handleLanguagesDropdownOpening = () => {
		setIsLanguagesDropdownOpen(!isLanguagesDropdownOpen);
	};

	const closeLanguageDropdown = () => {
		setIsLanguagesDropdownOpen(false);
	};

	const [selectedLanguageWrapperRef] = useOutsideClickRef(closeLanguageDropdown);

	const selectLanguage = (language: string | undefined) => {
		let selectedLanguageImageAltText;
		let selectedLanguageFlagImageSrc;

		switch (language) {
			case "en":
				selectedLanguageImageAltText = "UK Flag";
				selectedLanguageFlagImageSrc = "/images/language-selector/uk-flag-circle.png";
				break;

			case "it":
				selectedLanguageImageAltText = "Bandiera Italiana";
				selectedLanguageFlagImageSrc = "/images/language-selector/italy-flag-circle.png";
				break;

			default:
				selectedLanguageImageAltText = "Hrvatska zastava";
				selectedLanguageFlagImageSrc = "/images/language-selector/croatia-flag-circle.png";
				break;
		}

		return { selectedLanguageFlagImageSrc, selectedLanguageImageAltText };
	};

	return (
		<LanguageSelectorStyled>
			<SelectedLanguageImageWrapper
				$isLanguagesDropdownOpen={isLanguagesDropdownOpen}
				onClick={handleLanguagesDropdownOpening}
				ref={selectedLanguageWrapperRef}
			>
				<Image
					alt={selectLanguage(locale).selectedLanguageImageAltText}
					height={30}
					priority
					src={selectLanguage(locale).selectedLanguageFlagImageSrc}
					width={30}
				/>
				<IoIosArrowUp />
			</SelectedLanguageImageWrapper>
			<LanguagesDropdown className={isLanguagesDropdownOpen ? "opened" : undefined}>
				<PRegular>{languageSelectorTitle}</PRegular>
				{languageSelectorItems.map((item) => (
					<Flag className={locale === item.locale ? "selected-language" : undefined} key={item.key}>
						<Link href={linkTo} locale={item.locale}>
							<Image alt={item.flag.alt} height={30} priority src={item.flag.src} width={30} />
							<LanguageName>{item.label}</LanguageName>
						</Link>
						{locale === item.locale ? <IoCheckmark className="checkmark" /> : null}
					</Flag>
				))}
				<GoBackMenu>
					<PRegular>{languageSelectorGoBackButtonText}</PRegular>
					<BsArrowBarDown />
				</GoBackMenu>
			</LanguagesDropdown>
		</LanguageSelectorStyled>
	);
}
