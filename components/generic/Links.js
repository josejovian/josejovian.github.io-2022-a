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
		const { name, _link } = link; 
		return (
			// <Link key={`profile-link-${link.type}`} href={link.link || "#"}>
			// 	<a className="account-link" target="_blank">
			// 		{ iconFromName(link.type) }
			// 		{ link.name }
			// 	</a>
			// </Link>
			<IconLink key={`profile-link-${link.type}`} icon={icon} name={name} link={_link} />
		);
	});

	return (
		<div className="flex flex-row justify-center items-center mt-6 text-center">
			{ linkElements }
		</div>	
	);
};

export default Links;