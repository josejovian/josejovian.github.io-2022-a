import { SiGithub, SiLinkedin } from "react-icons/si";
import Link from "next/link";

const links = [{
	icon: <SiGithub />,
	type: "github",
	name: "josejovian",
	link: "https://github.com/josejovian"
}, {
	icon: <SiLinkedin />,
	type: "linkedin",
	name: "josejovian",
	link: "https://www.linkedin.com/in/josejovian/"
}];

const Links = () => {
	const linkElements = links.map((link) => {
		return (
			<Link key={`profile-link-${link.type}`} href={link.link}>
				<a className="account-link" target="_blank">
					{ link.icon }
					{ link.name }
				</a>
			</Link>
		);
	});

	return (
		<div className="flex flex-row justify-center items-center mt-8 text-center">
			{ linkElements }
		</div>	
	);
};

export default Links;