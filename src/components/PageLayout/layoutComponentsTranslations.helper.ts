import { footerEn, footerHr, footerIt } from "../../content/Global/footer.content";
import {
	languageSelectorEn,
	languageSelectorHr,
	languageSelectorIt
} from "../../content/Global/languageSelector.content";
import { navigationEn, navigationHr, navigationIt } from "../../content/Global/navigation.content";

const getLayoutComponentsTranslations = (language: string | undefined) => {
	let navigationItems;
	let footerSocialMediaItems;
	let footerCopyrightMessage;
	let footerCompanyMission;
	let footerOurServices;
	let footerContact;
	let footerLogo;
	let languageSelectorItems;
	let languageSelectorTitle;
	let languageSelectorGoBackButtonText;
	let selectedLanguageImage;
	let footerNavigationCategoryTitle;
	let logo;

	switch (language) {
		case "en":
			navigationItems = navigationEn.navigationItems;
			logo = navigationEn.logo;
			languageSelectorItems = languageSelectorEn.languageSelectorItems;
			languageSelectorTitle = languageSelectorEn.languageSelectorTitle;
			languageSelectorGoBackButtonText = languageSelectorEn.languageSelectorGoBackButtonText;
			selectedLanguageImage = languageSelectorEn.selectedLanguageImage;
			footerSocialMediaItems = footerEn.socialMediaItems;
			footerCopyrightMessage = footerEn.copyrightMessage;
			footerLogo = footerEn.logo;
			footerCompanyMission = footerEn.companyMission;
			footerOurServices = footerEn.ourServicesCategory;
			footerContact = footerEn.contactCategory;
			footerNavigationCategoryTitle = footerEn.navigationCategoryTitle;
			break;

		case "it":
			navigationItems = navigationIt.navigationItems;
			logo = navigationIt.logo;
			languageSelectorItems = languageSelectorIt.languageSelectorItems;
			languageSelectorTitle = languageSelectorIt.languageSelectorTitle;
			languageSelectorGoBackButtonText = languageSelectorIt.languageSelectorGoBackButtonText;
			selectedLanguageImage = languageSelectorIt.selectedLanguageImage;
			footerSocialMediaItems = footerIt.socialMediaItems;
			footerCopyrightMessage = footerIt.copyrightMessage;
			footerLogo = footerIt.logo;
			footerCompanyMission = footerIt.companyMission;
			footerOurServices = footerIt.ourServicesCategory;
			footerContact = footerIt.contactCategory;
			footerNavigationCategoryTitle = footerIt.navigationCategoryTitle;
			break;

		default:
			navigationItems = navigationHr.navigationItems;
			logo = navigationHr.logo;
			languageSelectorItems = languageSelectorHr.languageSelectorItems;
			languageSelectorTitle = languageSelectorHr.languageSelectorTitle;
			languageSelectorGoBackButtonText = languageSelectorHr.languageSelectorGoBackButtonText;
			selectedLanguageImage = languageSelectorHr.selectedLanguageImage;
			footerSocialMediaItems = footerHr.socialMediaItems;
			footerCopyrightMessage = footerHr.copyrightMessage;
			footerLogo = footerHr.logo;
			footerCompanyMission = footerHr.companyMission;
			footerOurServices = footerHr.ourServicesCategory;
			footerContact = footerHr.contactCategory;
			footerNavigationCategoryTitle = footerHr.navigationCategoryTitle;
			break;
	}

	return {
		footerCompanyMission,
		footerContact,
		footerCopyrightMessage,
		footerLogo,
		footerNavigationCategoryTitle,
		footerOurServices,
		footerSocialMediaItems,
		languageSelectorGoBackButtonText,
		languageSelectorItems,
		languageSelectorTitle,
		logo,
		navigationItems,
		selectedLanguageImage
	};
};

export default getLayoutComponentsTranslations;
