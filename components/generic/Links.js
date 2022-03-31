import { SiGithub, SiLinkedin } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import Link from "next/link";
import IconLink from "./IconLink";

function iconFromName(name) {
	switch(name) {
		case "linkedin":
			return <SiLinkedin />;
		case "github":
			return <SiGithub />;
		default:
			return <BsGlobe />;
	}
}

const Links = ({ links }) => {
	const linkElements = links.map((link) => {
		const icon = iconFromName(link.type);
		return (
			<IconLink key={`profile-link-${link.type}`} icon={icon} name={link.name} link={link.link} />
		);
	});

	return (
		<div className="flex flex-row justify-center items-center mt-6 text-center">
			{ linkElements }
		</div>	
	);
};

export default Links;