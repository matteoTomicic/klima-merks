import {
	languageSelectorEn,
	languageSelectorHr,
	languageSelectorIt
} from "../../content/Global/LanguageSelector.content";
import { navigationEn, navigationHr, navigationIt } from "../../content/Global/Navigation.content";

const getLayoutComponentsTranslations = (language: string | undefined) => {
	let navigationItems;
	let languageSelectorItems;
	let languageSelectorTitle;
	let languageSelectorGoBackButtonText;
	let selectedLanguageImage;
	let logo;

	switch (language) {
		case "en":
			navigationItems = navigationEn.navigationItems;
			logo = navigationEn.logo;
			languageSelectorItems = languageSelectorEn.languageSelectorItems;
			languageSelectorTitle = languageSelectorEn.languageSelectorTitle;
			languageSelectorGoBackButtonText = languageSelectorEn.languageSelectorGoBackButtonText;
			selectedLanguageImage = languageSelectorEn.selectedLanguageImage;
			break;

		case "it":
			navigationItems = navigationIt.navigationItems;
			logo = navigationIt.logo;
			languageSelectorItems = languageSelectorIt.languageSelectorItems;
			languageSelectorTitle = languageSelectorIt.languageSelectorTitle;
			languageSelectorGoBackButtonText = languageSelectorIt.languageSelectorGoBackButtonText;
			selectedLanguageImage = languageSelectorIt.selectedLanguageImage;
			break;

		default:
			navigationItems = navigationHr.navigationItems;
			logo = navigationHr.logo;
			languageSelectorItems = languageSelectorHr.languageSelectorItems;
			languageSelectorTitle = languageSelectorHr.languageSelectorTitle;
			languageSelectorGoBackButtonText = languageSelectorHr.languageSelectorGoBackButtonText;
			selectedLanguageImage = languageSelectorHr.selectedLanguageImage;
			break;
	}

	return {
		languageSelectorGoBackButtonText,
		languageSelectorItems,
		languageSelectorTitle,
		logo,
		navigationItems,
		selectedLanguageImage
	};
};

export default getLayoutComponentsTranslations;
