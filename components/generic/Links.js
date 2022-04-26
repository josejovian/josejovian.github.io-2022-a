import { SiGithub, SiLinkedin } from "react-icons/si";
import { FiLink } from "react-icons/fi";
import Link from "next/link";
import IconLink from "./IconLink";

function iconFromName(name) {
	switch (name) {
		case "linkedin":
			return <SiLinkedin />;
		case "github":
			return <SiGithub />;
		default:
			return <FiLink />;
	}
}

const Links = ({ links, align = "center", margin="mt-6" }) => {
	const linkElements = links.map((link, idx) => {
		if (!link.link) {
			return <></>;
		}

		const icon = iconFromName(link.type);
		return (
			<IconLink
				key={`profile-link-${link.type}`}
				idx={idx}
				align={align}
				icon={icon}
				name={link.name}
				link={link.link}
			/>
		);
	});

	const alignClasses =
		align === "center"
			? "justify-center items-center text-center "
			: "justify-start items-start text-left ";

	return (
		<div
			id="links-wrapper"
			className={`flex flex-row ${alignClasses} ${margin}`}
		>
			{linkElements}
		</div>
	);
};

export default Links;
