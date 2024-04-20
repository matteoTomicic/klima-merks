import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoCheckmark } from "react-icons/io5";
import { useOutsideClickRef } from "rooks";

import { Flag, LanguageName, LanguagesDropdown, SelectedLanguageImageWrapper } from "./LanguageSelector.styles";

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
	languageSelectorItems: ILanguageSelectorItem[];
	linkTo: string;
	locale?: string;
}

export default function LanguageSelector({ languageSelectorItems, linkTo, locale }: ILanguageSelector) {
	const [isLanguagesDropdownOpen, setIsLanguagesDropdownOpen] = useState(false);

	const handleLanguagesDropdownOpening = () => {
		setIsLanguagesDropdownOpen(!isLanguagesDropdownOpen);
	};

	const closeLanguageDropdown = () => {
		setIsLanguagesDropdownOpen(false);
	};

	const [selectedLanguageWrapperRef] = useOutsideClickRef(closeLanguageDropdown);

	return (
		<div style={{ position: "relative" }}>
			<SelectedLanguageImageWrapper onClick={handleLanguagesDropdownOpening} ref={selectedLanguageWrapperRef}>
				<Image
					alt={locale === "hr" ? "Hrvatska zastava" : "UK flag"}
					height={30}
					src={
						locale === "hr"
							? "/images/language-selector/croatia-flag-circle.png"
							: "/images/language-selector/uk-flag-circle.png"
					}
					width={30}
				/>
				{isLanguagesDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
			</SelectedLanguageImageWrapper>
			<LanguagesDropdown className={isLanguagesDropdownOpen ? "opened" : undefined}>
				{languageSelectorItems.map((item) => (
					<Flag className={locale === item.locale ? "selected-language" : undefined} key={item.key}>
						<Link href={linkTo} locale={item.locale}>
							<Image alt={item.flag.alt} height={30} priority src={item.flag.src} width={30} />
							<LanguageName>{item.label}</LanguageName>
						</Link>
						{locale === item.locale ? <IoCheckmark className="checkmark" /> : null}
					</Flag>
				))}
			</LanguagesDropdown>
		</div>
	);
}
