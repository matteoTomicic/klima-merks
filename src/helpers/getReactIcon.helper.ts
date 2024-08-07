import { IconType } from "react-icons";
import { BiBuildings, BiChat, BiCog, BiSupport, BiUserCircle, BiWrench } from "react-icons/bi";
import { FaGoogle, FaInstagram, FaToolbox, FaTools } from "react-icons/fa";
import { FaCircleInfo, FaGear } from "react-icons/fa6";
import { FiLifeBuoy } from "react-icons/fi";
import { GiEcology, GiGears, GiTechnoHeart } from "react-icons/gi";
import { MdHandshake, MdVerified } from "react-icons/md";
import { PiBuildings, PiEnvelope, PiPhone } from "react-icons/pi";

type IconsMap = Record<string, IconType>;

const getReactIcon = (iconName: string): IconType => {
	const iconsMap: IconsMap = {
		BiBuildings,
		BiChat,
		BiCog,
		BiSupport,
		BiUserCircle,
		BiWrench,
		FaCircleInfo,
		FaGear,
		FaGoogle,
		FaInstagram,
		FaToolbox,
		FaTools,
		FiLifeBuoy,
		GiEcology,
		GiGears,
		GiTechnoHeart,
		MdHandshake,
		MdVerified,
		PiBuildings,
		PiEnvelope,
		PiPhone
	};

	const IconComponent = iconsMap[iconName];

	return IconComponent;
};

export default getReactIcon;
